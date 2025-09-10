export function buildPersonJsonLd(p: {name:string; links?:{linkedin?:string;github?:string}}){
  return {
    "@context":"https://schema.org",
    "@type":"Person",
    name:p.name,
    sameAs:[p.links?.linkedin, p.links?.github].filter(Boolean)
  };
}
