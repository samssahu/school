const BASE_URL = "https://smtgayatridevi.edu.in";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
}

export function useSEO({ title, description, path = "/" }: SEOProps) {
  const url = `${BASE_URL}${path}`;
  const fullTitle = `${title} | Smt Gayatri Devi Sr.Sec Vidya Mandir`;

  if (typeof document === "undefined") return;

  document.title = fullTitle;

  setMeta("description", description);
  setMeta("og:title", fullTitle);
  setMeta("og:description", description);
  setMeta("og:url", url);
  setMeta("og:image", `${BASE_URL}/logo-full.png`);
  setMeta("twitter:title", fullTitle);
  setMeta("twitter:description", description);
  setMeta("twitter:image", `${BASE_URL}/logo-full.png`);

  setLink("canonical", url);
}

function setMeta(property: string, content: string) {
  let el = document.querySelector(
    `meta[property="${property}"], meta[name="${property}"]`,
  ) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    if (property.startsWith("og:")) {
      el.setAttribute("property", property);
    } else {
      el.setAttribute("name", property);
    }
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  let el = document.querySelector(
    `link[rel="${rel}"]`,
  ) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}
