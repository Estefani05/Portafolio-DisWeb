import { useState, useEffect, useMemo } from "react";
import Head from "../seo/Head";
import { useNavigate } from "react-router-dom";

interface trabajo {
  Nombre: string;
  Tipo: string;           // laboratorio | proyecto | lectura | investigacion | portafolio | ...
  Descripcion: string;
  Fecha: string;          // "dd/mm/yyyy"
  Tecnologias: string;    // "HTML, CSS3, GitHub"
  repositorio: string;
  desplegado: string;
}

interface Course {
  codigo: string;
  nombre: string;
  semestre: string;
  descripcion: string;
  trabajos: trabajo[];
}

type Filters = {
  tipo: string;           // vacío = todos
  techs: Set<string>;     // múltiples tecnologías
  desde: string;          // input type="date" => yyyy-mm-dd
  hasta: string;          // input type="date" => yyyy-mm-dd
};

// --- Utils ---
const splitTechs = (s?: string): string[] =>
  (s ?? "")
    .split(",")
    .map(t => t.trim())
    .filter(Boolean);

// Convierte "dd/mm/yyyy" a Date
function parseDDMMYYYY(dateStr?: string): Date | null {
  if (!dateStr) return null;
  const m = dateStr.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  if (!m) return null;
  const [ , dd, mm, yyyy ] = m;
  return new Date(Number(yyyy), Number(mm) - 1, Number(dd));
}

// Convierte "yyyy-mm-dd" (de <input type="date">) a Date (inicio de día)
const parseInputDate = (s?: string): Date | null => (s ? new Date(`${s}T00:00:00`) : null);

export default function Cursos() {
  const [courses, setCourses] = useState<Course[]>([]);
  const navigate = useNavigate();

  // Filtros
  const [filters, setFilters] = useState<Filters>({
    tipo: "",
    techs: new Set<string>(),
    desde: "",
    hasta: "",
  });

  useEffect(() => {
    fetch("/data/courses.json")
      .then((res) => res.json())
      .then((json) => setCourses(json));
  }, []);

  // Tipos únicos y Tecnologías únicas (para los controles)
  const { uniqueTypes, uniqueTechs } = useMemo(() => {
    const types = new Set<string>();
    const techs = new Set<string>();
    for (const c of courses) {
      for (const t of c.trabajos) {
        if (t.Tipo) types.add(t.Tipo);
        for (const tech of splitTechs(t.Tecnologias)) techs.add(tech);
      }
    }
    return {
      uniqueTypes: Array.from(types).sort(),
      uniqueTechs: Array.from(techs).sort(),
    };
  }, [courses]);

  // Aplicar filtros a los trabajos dentro de cada curso
  const filteredCourses: Course[] = useMemo(() => {
    const dDesde = parseInputDate(filters.desde);
    const dHasta = parseInputDate(filters.hasta);

    const courseList = courses
      .map((course) => {
        const trabajosFiltrados = course.trabajos.filter((t) => {
          // Tipo
          const okTipo = !filters.tipo || t.Tipo.toLowerCase() === filters.tipo.toLowerCase();

          // Tecnologías (al menos 1 coincidencia)
          const tTechs = new Set(splitTechs(t.Tecnologias).map(x => x.toLowerCase()));
          const selectedTechs = Array.from(filters.techs).map(x => x.toLowerCase());
          const okTechs =
            filters.techs.size === 0 ||
            selectedTechs.some((sel) => tTechs.has(sel));

          // Fechas
          const fechaT = parseDDMMYYYY(t.Fecha);
          const okDesde = !dDesde || (fechaT && fechaT >= dDesde);
          const okHasta = !dHasta || (fechaT && fechaT <= dHasta);

          return okTipo && okTechs && okDesde && okHasta;
        });

        return { ...course, trabajos: trabajosFiltrados };
      })
      // Oculta cursos sin trabajos que coincidan
      .filter((c) => c.trabajos.length > 0);

    return courseList;
  }, [courses, filters]);

  // Navegar a Trabajos con la lista filtrada de ese curso
  const goToCourse = (title: string, trabajos: trabajo[]) => {
    navigate(`/Trabajos/${title}`, {
      state: trabajos,
    });
  };

  // Handlers filtros
  const toggleTech = (tech: string) =>
    setFilters((prev) => {
      const next = new Set(prev.techs);
      if (next.has(tech)) next.delete(tech);
      else next.add(tech);
      return { ...prev, techs: next };
    });

  const clearFilters = () =>
    setFilters({ tipo: "", techs: new Set<string>(), desde: "", hasta: "" });

  return (
    <>
      <Head title="Cursos | Portafolio" />
      <main className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-brown-800 mb-6">Cursos</h1>

        {/* Panel de Filtros */}
        <section className="mb-8 bg-[#fefefe] shadow-md rounded-lg p-6 border-l-4 border-[#4d230f]">
          <h2 className="text-xl font-semibold mb-4 text-brown-800">Filtros</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Tipo */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tipo de evaluación
              </label>
              <select
                className="w-full border border-gray-300 rounded-md p-2"
                value={filters.tipo}
                onChange={(e) => setFilters((f) => ({ ...f, tipo: e.target.value }))}
              >
                <option value="">Todos</option>
                {uniqueTypes.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            {/* Rango de fechas */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Desde
              </label>
              <input
                type="date"
                className="w-full border border-gray-300 rounded-md p-2"
                value={filters.desde}
                onChange={(e) => setFilters((f) => ({ ...f, desde: e.target.value }))}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Hasta
              </label>
              <input
                type="date"
                className="w-full border border-gray-300 rounded-md p-2"
                value={filters.hasta}
                onChange={(e) => setFilters((f) => ({ ...f, hasta: e.target.value }))}
              />
            </div>
          </div>

          {/* Tecnologías (checklist) */}
          <div className="mt-4">
            <span className="block text-sm font-medium text-gray-700 mb-2">
              Tecnologías (selección múltiple)
            </span>
            <div className="flex flex-wrap gap-3">
              {uniqueTechs.map((tech) => {
                const checked = filters.techs.has(tech);
                return (
                  <label
                    key={tech}
                    className={`px-3 py-1 border rounded-md cursor-pointer select-none ${
                      checked ? "bg-[#4d230f] text-white border-[#4d230f]" : "bg-white"
                    }`}
                  >
                    <input
                      type="checkbox"
                      className="mr-2 align-middle"
                      checked={checked}
                      onChange={() => toggleTech(tech)}
                    />
                    {tech}
                  </label>
                );
              })}
            </div>
          </div>

          {/* Acciones */}
          <div className="mt-4 flex gap-3">
            <button
              onClick={clearFilters}
              className="bg-gray-100 px-4 py-2 rounded border hover:bg-gray-200"
            >
              Limpiar filtros
            </button>
          </div>
        </section>

        {/* Listado de cursos filtrados */}
        {filteredCourses.length === 0 && (
          <p className="text-gray-600">No hay trabajos que coincidan con los filtros.</p>
        )}

        {filteredCourses.map((course) => {
          const trabajos = course.trabajos; // ya vienen filtrados
          return (
            <section className="mb-5" key={`course-${course.codigo}`}>
              <h2 className="text-2xl font-bold text-brown-800 mb-2">{course.nombre}</h2>
              <div className="bg-[#fefefe] shadow-md rounded-lg p-6 border-l-4 border-[#4d230f]">
                <p className="text-gray-700 leading-relaxed">
                  <strong>Código</strong>: {course.codigo} <br />
                  <strong>Semestre</strong>: {course.semestre} <br />
                  <strong>Descripción</strong>: {course.descripcion}
                </p>

                <div className="mt-4">
                  <h3 className="font-semibold mb-2">Trabajos ({trabajos.length})</h3>
                  {trabajos.length === 0 ? (
                    <p className="text-gray-500">No hay trabajos con los filtros aplicados.</p>
                  ) : (
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      {trabajos.map((t) => (
                        <li key={`${course.codigo}-${t.Nombre}`}>
                          <span className="font-medium">{t.Nombre}</span> — {t.Tipo} — {t.Fecha} — {t.Tecnologias}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <button
                  onClick={() => goToCourse(`${course.codigo}-${course.nombre}`, trabajos)}
                  className="mt-4 bg-[#4d230f] text-white px-5 py-2 rounded shadow hover:bg-[#34281d] transition"
                  disabled={trabajos.length === 0}
                  title={trabajos.length === 0 ? "No hay trabajos para ver con los filtros actuales" : "Ver Trabajos"}
                >
                  Ver Trabajos
                </button>
              </div>
            </section>
          );
        })}
      </main>
    </>
  );
}
