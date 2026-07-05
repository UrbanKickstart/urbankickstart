"use client";

import { useState, useEffect } from "react";
import press from "../data/press";
import fair from "../data/fair";
import PhotoGrid from "./PhotoGrid";

function candidates(src) {
  const m = src.match(/^(.*)\.([^./]+)$/);
  if (!m) return [src];
  const base = m[1];
  const orig = m[2];
  const exts = ["jpg", "jpeg", "JPG", "JPEG", "png", "PNG", "webp"];
  const ordered = [orig, ...exts.filter((e) => e.toLowerCase() !== orig.toLowerCase())];
  return ordered.map((e) => `${base}.${e}`);
}

function MediaSquare({ item, idx }) {
  const [bg, setBg] = useState(null);

  useEffect(() => {
    if (!item.image) return;
    let active = true;
    const list = candidates(item.image);
    let j = 0;
    const tryNext = () => {
      if (j >= list.length) return;
      const im = new window.Image();
      im.onload = () => {
        if (active) setBg(list[j]);
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
  }, [item.image]);

  return (
    <a
      className={"media-square v" + (idx % 3)}
      href={item.url}
      target="_blank"
      rel="noreferrer"
      style={bg ? { backgroundImage: `url("${bg}")` } : undefined}
    >
      {!bg && (
        <span className="ms-fallback">
          <span className="press-outlet">{item.outlet}</span>
        </span>
      )}
      <span className="media-square-overlay">
        {item.description && <span className="mso-text">{item.description}</span>}
        <span className="media-square-btn">{item.linkText || "View"} →</span>
      </span>
    </a>
  );
}

export default function Media() {
  const items = press.filter((p) => p.url && p.url !== "#");
  if (items.length === 0) return null;

  return (
    <section id="media" className="section section-alt">
      <div className="wrap">
        <h2>In the media</h2>
        <div className="media-squares">
          {items.map((p, i) => (
            <MediaSquare key={i} item={p} idx={i} />
          ))}
        </div>
        <PhotoGrid items={fair} title="At the IamExpat Fair Amsterdam" />
      </div>
    </section>
  );
}
