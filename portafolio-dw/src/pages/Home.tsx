import Head from "../seo/Head";

export default function Home(){
  return (
    <>
      <Head title="Inicio | Portafolio" />
      <main className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2 text-purple-700">¡Bienvenido!</h1>
        <p className="text-gray-700">
          Presentación breve del estudiante y propósito del portafolio.
        </p>
      </main>
    </>
  );
}
