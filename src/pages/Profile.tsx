import Head from "../seo/Head";
import { buildPersonJsonLd } from "../lib/jsonld";

export default function Profile() {
  const jsonLd = buildPersonJsonLd({
    description: "Estudiante de Ingeniería en Computación en el Instituto Tecnológico de Costa Rica, con experiencia en soporte informático y tecnologías de información, interesada en el desarrollo web y la innovación tecnológica.",
    links: {
      linkedin: "https://www.linkedin.com/in/estefani-valverde-6b0b55296/",
      github: "https://github.com/Estefani05"
    }
  });

  return (
    <>
      <Head title="Perfil | Portafolio" jsonLd={jsonLd} />
      <main className="max-w-5xl mx-auto px-4 py-8 flex flex-col gap-14">

        {/* Biografía */}
        <section>
          <h1 className="text-3xl font-bold text-brown-800 mb-4">Biografía Profesional</h1>
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
          <h2 className="text-2xl font-semibold text-brown-700 mb-2">Fotografía</h2>
          <img
            src="/assets/foto.jpg"
            alt="Fotografía profesional"
            className="w-48 h-48 rounded-full object-cover shadow-md"
          />
        </section>

        {/* Habilidades */}
        <section>
          <h2 className="text-2xl font-semibold text-brown-700 mb-4">Habilidades Técnicas</h2>
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
          <h2 className="text-2xl font-semibold text-brown-700 mb-4">Certificaciones y Formación</h2>
          <div className="bg-[#fefefe] shadow-md rounded-lg p-6 border-l-4 border-[#4d230f] space-y-4">
            <div>
              <h3 className="font-bold text-lg">Colegio Técnico Profesional de Limón</h3>
              <p className="text-gray-700">Técnico en Informática en Soporte</p>
              <p className="text-sm text-gray-500">Especialidad en hardware de computadoras</p>
            </div>
            <hr className="border-t border-gray-200" />
            <div>
              <h3 className="font-bold text-lg">Instituto Nacional de Aprendizaje (INA) Costa Rica</h3>
              <p className="text-gray-700">Operadora de Tecnologías de Información y Comunicación</p>
              <p className="text-sm text-gray-500">Conocimiento en plataformas Microsoft y paquete Office</p>
            </div>
          </div>
        </section>

        {/* Hobbies e Intereses */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-brown-700 mb-4">Hobbies e Intereses</h2>
          <div className="bg-[#fefefe] shadow-md rounded-lg p-6 border-l-4 border-[#2c170c] space-y-4">
            {/* Hobbies */}
            <div>
              <h3 className="font-bold text-lg">Hobbies</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>🏃 Running</li>
                <li>📸 Fotografía</li>
              </ul>
            </div>
            <hr className="border-t border-gray-200" />
            {/* Intereses */}
            <div>
              <h3 className="font-bold text-lg">Intereses</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>🌎 Aprendizaje de idiomas</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Redes profesionales */}
        <section>
          <h2 className="text-2xl font-semibold text-brown-700 mb-4">Redes Profesionales</h2>
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

        {/* CV */}
        <section>
          <h2 className="text-2xl font-semibold text-brown-700 mb-4">Currículum en PDF</h2>
          <a
            href="/assets/CV-Estefani.pdf"
            download="CV-Estefani.pdf"
            className="inline-block bg-[#4d230f] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-[#34281d] transition duration-300"
          >
            📄 Descargar CV
          </a>
        </section>
      </main>
    </>
  );
}

