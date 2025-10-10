import Head from "../seo/Head";
import "../styles/colors.css";
import { useState } from "react";

export default function Home(){
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

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

        {/* Nueva Sección de Recomendaciones */}
        <section className="mt-12 w-full">
          <h2 className="text-2xl font-bold text-brown-700 mb-4">⭐ Recomendaciones de Compañeros</h2>
          <p className="text-gray-700 mb-6">
            Deja aquí tu comentario o recomendación sobre mi desempeño, colaboración o habilidades. 
            ¡Tu opinión es muy valiosa!
          </p>

          {/* Caja de comentarios */}
          <div className="bg-[#fefefe] shadow-md rounded-lg p-6 border-l-4 border-[#4d230f]">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Escribe tu recomendación aquí..."
              className="w-full border border-gray-300 rounded-md p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-[#4d230f]"
              rows={3}
            ></textarea>
            <button
              onClick={handleAddComment}
              className="bg-[#4d230f] text-white px-5 py-2 rounded shadow hover:bg-[#34281d] transition"
            >
              Enviar recomendación
            </button>
          </div>

          {/* Lista de comentarios */}
          <div className="mt-6 space-y-4 text-left">
            {comments.length === 0 ? (
              <p className="text-gray-500">Aún no hay recomendaciones, sé el primero en dejar una.</p>
            ) : (
              comments.map((c, i) => (
                <div key={i} className="bg-white shadow-sm rounded-md p-4 border border-gray-200">
                  <p className="text-gray-700">{c}</p>
                </div>
              ))
            )}
          </div>
        </section>
      </main>
    </>
  );
}
