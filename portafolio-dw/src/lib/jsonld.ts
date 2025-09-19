export function buildPersonJsonLd({ description, links }: {
  description?: string;
  links?: { linkedin?: string; github?: string };
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Estefani Valverde",
    description,
    image: "/assets/foto.jpg",
    sameAs: [links?.linkedin, links?.github].filter(Boolean)
  };
}
