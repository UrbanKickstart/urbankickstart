"use client";

import { useState, useEffect } from "react";
import heroImages from "../data/heroImages";

function candidates(src) {
  const m = src.match(/^(.*)\.([^./]+)$/);
  if (!m) return [src];
  const base = m[1];
  const orig = m[2];
  const exts = ["jpg", "jpeg", "JPG", "JPEG", "png", "PNG", "webp"];
  const ordered = [orig, ...exts.filter((e) => e.toLowerCase() !== orig.toLowerCase())];
  return ordered.map((e) => `${base}.${e}`);
}

// A single large Amsterdam photo, scattered between the content sections.
// `n` is the index into public hero photos; `variant` is a placement class
// (ed-b, ed-c, ...). Renders nothing if that photo isn't there yet.
export default function EditorialPhoto({ n, variant }) {
  const [src, setSrc] = useState(null);

  useEffect(() => {
    const item = heroImages[n];
    if (!item) return;
    let active = true;
    const list = candidates(item.src);
    let j = 0;
    const tryNext = () => {
      if (j >= list.length) return;
      const im = new window.Image();
      im.onload = () => {
        if (active) setSrc(list[j]);
      };
      im.onerror = () => {
        j++;
        tryNext();
      };
      im.src = list[j];
    };
    tryNext();
    return () => {
      active = false;
    };
  }, [n]);

  if (!src) return null;
  return (
    <figure className={"ed-photo " + variant}>
      <img src={src} alt="Amsterdam" />
    </figure>
  );
}
