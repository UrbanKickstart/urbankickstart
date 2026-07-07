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
          Your kickstart in <span className="font-display">Amsterdam</span>
        </h1>
        <p className="ed-lead">This is for you if you:</p>
        <ul className="checklist">
          <li className="check done">
            <svg className="ci" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="11" fill="var(--accent)" />
              <path
                d="M7 12.5l3.2 3.2L17 9"
                fill="none"
                stroke="#fff"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="label">Expat / remote job — started</span>
          </li>
          <li className="check done">
            <svg className="ci" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="11" fill="var(--accent)" />
              <path
                d="M7 12.5l3.2 3.2L17 9"
                fill="none"
                stroke="#fff"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="label">An apartment — sorted</span>
          </li>
          <li className="check open">
            <svg className="ci" viewBox="0 0 24 24" aria-hidden="true">
              <circle
                cx="12"
                cy="12"
                r="10.5"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="2"
                strokeDasharray="3 3"
              />
            </svg>
            <span className="label">Feeling at home — not yet</span>
          </li>
        </ul>
        <a className="btn btn-ghost" href="#how">
          How it works
        </a>
      </div>
    </section>
  );
}
