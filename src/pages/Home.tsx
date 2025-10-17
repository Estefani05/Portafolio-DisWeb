import Head from "../seo/Head";
import Giscus from "@giscus/react";

export default function Home() {
  return (
    <>
      <Head title="Inicio | Portafolio" favicon="/assets/favicon-home-32.png" />
      <main className="max-w-5xl mx-auto px-4 py-8 flex flex-col items-center text-center">
        <h1 className="text-3xl font-bold mb-2" style={{ color: "var(--color-accent)" }}>
          ¡Bienvenidos a mi portafolio personal.!
        </h1>

        <p style={{ color: "var(--color-primary)" }}>
          Soy una estudiante dedicada, trabajadora y honesta, con gran interés en seguir aprendiendo y adaptándome a nuevas tecnologías. Este espacio ha sido creado para mostrar mi desarrollo académico, mis proyectos y mis habilidades, con el propósito de compartir mi crecimiento profesional y personal.
        </p>
        <p className="mt-4" style={{ color: "var(--color-secondary)" }}>
          El objetivo de este portafolio es ofrecer a profesores, compañeros y futuros empleadores una visión clara de mi perfil como estudiante, resaltando mi compromiso, valores y capacidad de aprendizaje continuo.
        </p>
        <p className="mt-8 italic text-lg" style={{ color: "var(--color-accent)" }}>
          Aprender es crecer cada día, y crecer es compartir lo aprendido.
        </p>

        {/* ⭐ Recomendaciones persistentes con Giscus (GitHub Discussions) */}
        <section className="mt-12 w-full">
          <h2 className="text-2xl font-bold text-brown-700 mb-4">⭐ Recomendaciones de Compañeros</h2>
          <p className="text-gray-700 mb-6">
            Deja aquí tu comentario o recomendación sobre mi desempeño, colaboración o habilidades. ¡Tu opinión es muy valiosa!
          </p>

          <div className="bg-[#fefefe] shadow-md rounded-lg p-6 border-l-4 border-[#4d230f]">
            <Giscus
              repo="Estefani05/Portafolio-DisWeb"
              repoId="R_kgDOPnJW6w"
              category="Recomendaciones"
              categoryId="DIC_kwDOPnJW684Cwxk9"
              mapping="specific"
              term="recomendaciones-home"
              strict="1"
              reactionsEnabled="1"
              emitMetadata="0"
              inputPosition="bottom"
              theme="preferred_color_scheme"
              lang="es"
              loading="lazy"
            />
          </div>

          <p className="text-xs text-gray-400 mt-3">
            *Los comentarios se almacenan en GitHub Discussions (públicos y persistentes). Requiere iniciar sesión con GitHub.
          </p>
        </section>
      </main>
    </>
  );
}
