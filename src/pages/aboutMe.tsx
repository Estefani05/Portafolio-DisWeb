import Head from "../seo/Head";
import { useRef } from "react";
// npm i @emailjs/browser
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_j2rz6ug";     
const TEMPLATE_ID = "template_ymve6kn";  
const PUBLIC_KEY  = "fJ5qvEnasapPhNYKT";    

export default function AboutMe() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      alert("¡Gracias! Tu mensaje fue enviado.");
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      alert("Ocurrió un error al enviar el mensaje. Intenta de nuevo.");
    }
  };

  return (
    <>
      <Head title="Sobre mí | Portafolio" favicon="/assets/favicon-profile-32.png" />
      <main className="max-w-5xl mx-auto px-4 py-8 space-y-12">
        {/* Encabezado */}
        <section>
          <h1 className="text-3xl font-bold text-brown-800">Sobre mí</h1>
          <p className="mt-2 text-lg font-semibold" style={{ color: "var(--color-accent)" }}>
            Estefani Valverde
          </p>

          <div className="mt-4 bg-[#fefefe] shadow-md rounded-lg p-6 border-l-4 border-[#4d230f]">
            <p className="text-gray-700 leading-relaxed">
              Soy estudiante de <strong>Ingeniería en Computación</strong>. Me entusiasma el
              desarrollo web, aprender tecnologías nuevas y crear proyectos con buen diseño y
              utilidad real.
            </p>
          </div>
        </section>

        {/* Hobbies e Intereses */}
        <section>
          <h2 className="text-2xl font-bold text-brown-800 mb-6">Hobbies e Intereses</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Música clásica */}
            <article className="bg-[#fefefe] rounded-lg shadow-md p-8 border-l-4 border-[#4d230f]">
              <div className="text-5xl mb-4 text-center">🎼</div>
              <h3
                className="text-xl font-bold text-center mb-2"
                style={{ color: "var(--color-accent)" }}
              >
                Música clásica
              </h3>
              <p className="text-center text-gray-700">
                Disfruto escuchar y analizar obras de compositoras y compositores como Mozart y
                Beethoven. Me interesa la estructura, la armonía y cómo la música comunica emociones.
              </p>
            </article>

            {/* Series y Anime */}
            <article className="bg-[#fefefe] rounded-lg shadow-md p-8 border-l-4 border-[#4d230f]">
              <div className="text-5xl mb-4 text-center">📺</div>
              <h3
                className="text-xl font-bold text-center mb-2"
                style={{ color: "var(--color-accent)" }}
              >
                Series y Anime
              </h3>
              <p className="text-center text-gray-700">
                Soy amante al anime y a las series de guerras y ciencia ficción ya que me atraen las historias épicas y la construcción de mundos   .
              </p>
            </article>

            {/* Correr */}
            <article className="bg-[#fefefe] rounded-lg shadow-md p-8 border-l-4 border-[#4d230f]">
              <div className="text-5xl mb-4 text-center">🏃‍♀️</div>
              <h3
                className="text-xl font-bold text-center mb-2"
                style={{ color: "var(--color-accent)" }}
              >
                Correr
              </h3>
              <p className="text-center text-gray-700">
                Salir a correr me ayuda a despejar la mente, mantenerme activa y marcar metas
                personales.
              </p>
            </article>
          </div>
        </section>

        {/* Contacto */}
        <section>
          <h2 className="text-2xl font-bold text-brown-800 mb-6">Contacto</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Información */}
            <div className="bg-[#fefefe] shadow-md rounded-lg p-6 border-l-4 border-[#4d230f]">
              <p className="font-semibold mb-4" style={{ color: "var(--color-accent)" }}>
                Información de Contacto
              </p>
              <p className="text-gray-700 mb-6">
                Estoy abierta a colaborar y seguir aprendiendo en proyectos web.
              </p>

              <hr className="border-t border-gray-200 my-4" />

              <p className="mb-2">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:estefanitatiana05@gmail.com"
                  className="underline"
                  style={{ color: "var(--color-accent)" }}
                >
                  estefanitatiana05@gmail.com
                </a>
              </p>
              <p className="mb-2">
                <strong>Teléfono:</strong>{" "}
                <a href="tel:+50663115894" className="underline" style={{ color: "var(--color-accent)" }}>
                  +506 6311-5894
                </a>
              </p>
              <p className="mb-2">
                <strong>Ubicación:</strong> Limón, Costa Rica
              </p>
            </div>

            {/* Formulario que envía correo con EmailJS */}
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-[#fefefe] shadow-md rounded-lg p-6 border-l-4 border-[#4d230f]"
            >
              <div className="mb-4">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Nombre completo"
                  className="w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#4d230f]"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="user_email"
                  placeholder="Correo electrónico"
                  className="w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#4d230f]"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="subject"
                  placeholder="Asunto"
                  className="w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#4d230f]"
                  required
                />
              </div>
              <div className="mb-6">
                <textarea
                  rows={5}
                  name="message"
                  placeholder="Mensaje"
                  className="w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#4d230f]"
                  required
                />
              </div>

              {/* (opcional) si quieres forzar destinatario en el template */}
              <input type="hidden" name="to_email" value="estefanitatiana05@gmail.com" />

              <button
                type="submit"
                className="px-6 py-2 rounded shadow text-white"
                style={{ backgroundColor: "#4d230f" }}
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
