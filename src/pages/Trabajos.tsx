import Head from "../seo/Head";
import { useParams, useLocation } from "react-router-dom";

interface trabajo {
  Nombre: string;
  Tipo: string;
  Descripcion: string;
  Fecha: string;
  Tecnologias: string;
  repositorio: string;
  desplegado: string;
}

export default function Trabajos(){
  const { title } = useParams();
  const location = useLocation();
  const trabajos = location.state;

  return (
    <>
      <Head title="Trabajos | Portafolio" favicon="/assets/favicon-works-32.png" />
      <main className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-brown-800 mb-4">{title}</h1>

        {trabajos.map((trabajo: trabajo) => (
          <section className="mb-5" key={`section-${trabajo.Nombre}`}>
            <h1 className="text-3xl font-bold text-brown-800 mb-4" key={`title-${trabajo.Nombre}`}>
              {trabajo.Nombre}
            </h1>
            <div className="bg-[#fefefe] shadow-md rounded-lg p-6 border-l-4 border-[#4d230f]">
              <p className="text-gray-700 leading-relaxed">
                <strong>Tipo:</strong> {trabajo.Tipo} <br/>
                <strong>Descripcion:</strong> {trabajo.Descripcion} <br/>
                <strong>Fecha:</strong> {trabajo.Fecha} <br/>
                <strong>Tecnología:</strong> {trabajo.Tecnologias} <br/>
                <strong>Repositorio:</strong>{" "}
                <a
                  href={trabajo.repositorio}
                  className="text-blue-600 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {trabajo.repositorio}
                </a>
                <br/>
                <strong>Desplegado:</strong>{" "}
                <a
                  href={trabajo.desplegado}
                  className="text-blue-600 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {trabajo.desplegado}
                </a>
              </p>
            </div>
          </section>
        ))}
      </main>
    </>
  );
}
