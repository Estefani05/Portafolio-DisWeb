import { useEffect, useState } from "react";
import Head from "../seo/Head";
import jsPDF from "jspdf";

export default function Profile() {
  const [jsonLd, setJsonLd] = useState<object | null>(null);

  useEffect(() => {
    fetch("/data/personal.json")
      .then((r) => r.json())
      .then(setJsonLd)
      .catch((e) => {
        console.error("No se pudo cargar personal.json", e);
        setJsonLd(null);
      });
  }, []);

  const handleDownloadCV = () => {
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "pt",
      format: "a4",
    });

    let y = 40;

    doc.setFontSize(22);
    doc.text("Estefani Valverde", 40, y);
    y += 30;
    doc.setFontSize(14);
    doc.text("Estudiante de Ingeniería en Computación", 40, y);
    y += 20;
    doc.text("Instituto Tecnológico de Costa Rica", 40, y);

    y += 30;
    doc.setFontSize(16);
    doc.text("Biografía Profesional", 40, y);
    y += 18;
    doc.setFontSize(12);
    doc.text(
      "Estudiante de Ingeniería en Computación en el Instituto Tecnológico de Costa Rica. Con formación técnica en soporte informático y tecnologías de la información, cuento con experiencia en plataformas Microsoft, hardware y ofimática. Mis intereses profesionales se centran en el desarrollo web, la gestión de proyectos tecnológicos y la innovación digital.",
      40,
      y,
      { maxWidth: 520 }
    );
    y += 60;
    doc.text(
      "Mi objetivo es aplicar mis conocimientos en entornos profesionales, crecer constantemente en habilidades técnicas, colaborar en proyectos que generen impacto positivo y mantenerme en un aprendizaje continuo para destacar como futura ingeniera en el área tecnológica.",
      40,
      y,
      { maxWidth: 520 }
    );

    y += 60;
    doc.setFontSize(16);
    doc.text("Habilidades Técnicas", 40, y);
    y += 18;
    doc.setFontSize(12);
    doc.text(
      [
        "Idiomas: Español (Nativo), Inglés (Intermedio)",
        "Programación: Java, C#, Python, JavaScript, SQL",
        "Frameworks: .NET MVC, Node.js, React.js",
        "Bases de datos: MySQL, SQL Server, PostgreSQL",
        "Herramientas: Git/GitHub, Visual Studio",
      ],
      50,
      y
    );

    y += 80;
    doc.setFontSize(16);
    doc.text("Certificaciones y Formación", 40, y);
    y += 18;
    doc.setFontSize(12);
    doc.text(
      [
        "Colegio Técnico Profesional de Limón",
        "Técnico en Informática en Soporte",
        "Especialidad en hardware de computadoras",
        "",
        "Instituto Nacional de Aprendizaje (INA) Costa Rica",
        "Operadora de Tecnologías de Información y Comunicación",
        "Conocimiento en plataformas Microsoft y paquete Office",
      ],
      50,
      y
    );

    y += 100;
    doc.setFontSize(16);
    doc.text("Hobbies e Intereses", 40, y);
    y += 18;
    doc.setFontSize(12);
    doc.text(
      ["Hobbies: Running, Fotografía", "Intereses: Aprendizaje de idiomas"],
      50,
      y
    );

    y += 40;
    doc.setFontSize(16);
    doc.text("Redes Profesionales", 40, y);
    y += 18;
    doc.setFontSize(12);
    doc.text(
      [
        "LinkedIn: https://www.linkedin.com/in/estefani-valverde-6b0b55296/",
        "GitHub: https://github.com/Estefani05",
      ],
      50,
      y
    );

    doc.save("CV-Estefani.pdf");
  };

  return (
    <>
      <Head
        title="Perfil | Portafolio"
        jsonLd={jsonLd ?? undefined}
        favicon="/assets/favicon-profile-32.png"
      />
      <main className="max-w-5xl mx-auto px-4 py-8 flex flex-col gap-14">
        {/* Biografía */}
        <section>
          <h1 className="text-3xl font-bold text-brown-800 mb-4">
            Biografía Profesional
          </h1>
          <div className="bg-[#fefefe] shadow-md rounded-lg p-6 border-l-4 border-[#4d230f]">
            <p className="text-gray-700 leading-relaxed">
              Estudiante de <strong>Ingeniería en Computación</strong> en el
              <strong> Instituto Tecnológico de Costa Rica</strong>.
              Con formación técnica en soporte informático y tecnologías de la información,
              cuento con experiencia en plataformas Microsoft, hardware y ofimática.
              Mis intereses profesionales se centran en el <em>desarrollo web</em>,
              la <em>gestión de proyectos tecnológicos</em> y la <em>innovación digital</em>.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              Mi objetivo es aplicar mis conocimientos en entornos profesionales,
              crecer constantemente en habilidades técnicas, colaborar en proyectos
              que generen impacto positivo y mantenerme en un aprendizaje continuo
              para destacar como futura ingeniera en el área tecnológica.
            </p>
          </div>
        </section>

        {/* Fotografía */}
        <section>
          <h2 className="text-2xl font-semibold text-brown-700 mb-2">
            Fotografía
          </h2>
          <img
            src="/assets/foto.jpg"
            alt="Fotografía profesional"
            className="w-48 h-48 rounded-full object-cover shadow-md"
          />
        </section>

        {/* Habilidades */}
        <section>
          <h2 className="text-2xl font-semibold text-brown-700 mb-4">
            Habilidades Técnicas
          </h2>
          <div className="bg-[#fefefe] shadow-md rounded-lg p-6 border-l-4 border-[#34281d]">
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Idiomas:</strong> Español (Nativo), Inglés (Intermedio)</li>
              <li><strong>Programación:</strong> Java, C#, Python, JavaScript, SQL</li>
              <li><strong>Frameworks:</strong> .NET MVC, Node.js, React.js</li>
              <li><strong>Bases de datos:</strong> MySQL, SQL Server, PostgreSQL</li>
              <li><strong>Herramientas:</strong> Git/GitHub, Visual Studio</li>
            </ul>
          </div>
        </section>

        {/* Certificaciones */}
        <section>
          <h2 className="text-2xl font-semibold text-brown-700 mb-4">
            Certificaciones y Formación
          </h2>
          <div className="bg-[#fefefe] shadow-md rounded-lg p-6 border-l-4 border-[#4d230f] space-y-4">
            <div>
              <h3 className="font-bold text-lg">
                Colegio Técnico Profesional de Limón
              </h3>
              <p className="text-gray-700">Técnico en Informática en Soporte</p>
              <p className="text-sm text-gray-500">
                Especialidad en hardware de computadoras
              </p>
            </div>
            <hr className="border-t border-gray-200" />
            <div>
              <h3 className="font-bold text-lg">
                Instituto Nacional de Aprendizaje (INA) Costa Rica
              </h3>
              <p className="text-gray-700">
                Operadora de Tecnologías de Información y Comunicación
              </p>
              <p className="text-sm text-gray-500">
                Conocimiento en plataformas Microsoft y paquete Office
              </p>
            </div>
          </div>
        </section>

     

        {/* Redes profesionales */}
        <section>
          <h2 className="text-2xl font-semibold text-brown-700 mb-4">
            Redes Profesionales
          </h2>
          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/in/estefani-valverde-6b0b55296/"
              target="_blank"
              className="text-blue-600 hover:underline text-lg"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Estefani05"
              target="_blank"
              className="text-blue-600 hover:underline text-lg"
            >
              GitHub
            </a>
          </div>
        </section>


        {/* Videos explicativos */}
<section>
  <h2 className="text-2xl font-semibold text-brown-700 mb-4">
    Videos explicativos
  </h2>

  <div className="bg-[#fefefe] shadow-md rounded-lg p-6 border-l-4 border-[#4d230f] space-y-4">
    <div>
      <p className="font-semibold text-gray-800">
        Video explicativo del portafolio
      </p>
      <a
        href="https://youtu.be/yWSgD7BkYoc"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline break-all"
      >
        https://youtu.be/yWSgD7BkYoc
      </a>
    </div>

    <div>
      <p className="font-semibold text-gray-800">
        Cómo desplegar una web en Netlify
      </p>
      <a
        href="https://youtu.be/1qa4c6bg2ew"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline break-all"
      >
        https://youtu.be/1qa4c6bg2ew
      </a>
    </div>
  </div>
</section>



        {/* CV */}
        <section>
          <h2 className="text-2xl font-semibold text-brown-700 mb-4">
            Currículum en PDF
          </h2>
          <button
            onClick={handleDownloadCV}
            className="inline-block bg-[#4d230f] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-[#34281d] transition duration-300"
          >
            📄 Descargar CV
          </button>
        </section>
      </main>
    </>
  );
}
