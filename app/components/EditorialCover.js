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

// Top of the page: one large photo bleeding off the top-left, with the title
// text sitting in the white space beside it. (More photos are scattered down
// the page via <EditorialPhoto />.)
export default function EditorialCover() {
  const [src, setSrc] = useState(null);

  useEffect(() => {
    const item = heroImages[0];
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
  }, []);

  return (
    <section className="editorial editorial-top">
      {src && (
        <figure className="ed-photo ed-a">
          <img src={src} alt="Amsterdam" />
        </figure>
      )}
      <div className="ed-intro">
        <h1>
          Get to know <span className="font-display">the real</span> Amsterdam.
        </h1>
        <p className="ed-topics">
          History · Trends · Neighborhoods · Culture · Subcultures · Yearly &
          Occasional Events · Places · Courses · Memberships
        </p>
        <a className="btn btn-ghost" href="#how">
          How it works
        </a>
      </div>
    </section>
  );
}
