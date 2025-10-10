// src/seo/Head.tsx
import { useEffect } from "react";

type HeadProps = {
  title?: string;
  favicon?: string;               // /public/... ruta al png
  jsonLd?: object | string;       // objeto o string JSON-LD
};

export default function Head({ title, favicon, jsonLd }: HeadProps) {
  // Título
  useEffect(() => {
    if (title) document.title = title;
  }, [title]);

  // Favicon
  useEffect(() => {
    if (!favicon) return;
    let link = document.querySelector<HTMLLinkElement>('link#app-favicon');
    if (!link) {
      link = document.createElement('link');
      link.id = 'app-favicon';
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.type = 'image/png';
    link.href = favicon;
  }, [favicon]);

  // JSON-LD
  useEffect(() => {
    // borra el anterior si existe
    const existing = document.querySelector<HTMLScriptElement>('script#app-jsonld');
    if (existing) existing.remove();

    if (jsonLd) {
      const script = document.createElement('script');
      script.id = 'app-jsonld';
      script.type = 'application/ld+json';
      script.text = typeof jsonLd === 'string' ? jsonLd : JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }

    // cleanup al desmontar
    return () => {
      const s = document.querySelector<HTMLScriptElement>('script#app-jsonld');
      if (s) s.remove();
    };
  }, [jsonLd]);

  return null;
}
