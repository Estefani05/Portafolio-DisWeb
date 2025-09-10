import Head from "../seo/Head";
import { buildPersonJsonLd } from "../lib/jsonld";

export default function Profile(){
  const jsonLd = buildPersonJsonLd({ name: "Tu Nombre", links: { linkedin: "", github: "" }});
  return (
    <>
      <Head title="Perfil | Portafolio" jsonLd={jsonLd} />
      <main className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-2">Perfil</h1>
        <p className="text-gray-700">Biografía, habilidades, links y JSON-LD.</p>
      </main>
    </>
  );
}
