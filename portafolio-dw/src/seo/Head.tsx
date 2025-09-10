import { useEffect } from "react";

type HeadProps = { title?: string; jsonLd?: unknown };

export default function Head({ title, jsonLd }: HeadProps) {
  useEffect(() => {
    const prev = document.title;
    if (title) document.title = title;

    let script: HTMLScriptElement | null = null;
    if (jsonLd) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
    return () => {
      if (title) document.title = prev;
      if (script) document.head.removeChild(script);
    };
  }, [title, jsonLd]);

  return null;
}
