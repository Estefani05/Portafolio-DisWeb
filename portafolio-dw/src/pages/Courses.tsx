import Head from "../seo/Head";

export default function Courses(){
  return (
    <>
      <Head title="Trabajos | Portafolio" />
      <main className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Trabajos por curso</h1>
        <p className="text-gray-700">Aquí listaremos cursos y trabajos desde /public/data/courses.json.</p>
      </main>
    </>
  );
}
