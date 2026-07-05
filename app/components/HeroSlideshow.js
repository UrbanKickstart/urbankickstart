"use client";

import { useState, useEffect } from "react";
import heroImages from "../data/heroImages";

// Tries several extensions so mixed-case iPhone exports still load.
function candidates(src) {
  const m = src.match(/^(.*)\.([^./]+)$/);
  if (!m) return [src];
  const base = m[1];
  const orig = m[2];
  const exts = ["jpg", "jpeg", "JPG", "JPEG", "png", "PNG", "webp"];
  const ordered = [orig, ...exts.filter((e) => e.toLowerCase() !== orig.toLowerCase())];
  return ordered.map((e) => `${base}.${e}`);
}

export default function HeroSlideshow() {
  const [srcs, setSrcs] = useState([]);
  const [idx, setIdx] = useState(0);

  // Preload each image (trying extension variants) and keep the ones that load.
  useEffect(() => {
    let active = true;
    const results = new Array(heroImages.length).fill(null);
    let remaining = heroImages.length;
    const done = () => {
      if (remaining === 0 && active) setSrcs(results.filter(Boolean));
    };
    heroImages.forEach((item, i) => {
      const list = candidates(item.src);
      let j = 0;
      const tryNext = () => {
        if (j >= list.length) {
          remaining--;
          done();
          return;
        }
        const im = new window.Image();
        im.onload = () => {
          results[i] = list[j];
          remaining--;
          done();
        };
        im.onerror = () => {
          j++;
          tryNext();
        };
        im.src = list[j];
      };
      tryNext();
    });
    return () => {
      active = false;
    };
  }, []);

  // Crossfade every 5 seconds.
  useEffect(() => {
    if (srcs.length <= 1) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % srcs.length), 5000);
    return () => clearInterval(t);
  }, [srcs]);

  return (
    <div className="hero-slides" aria-hidden="true">
      {srcs.map((src, i) => (
        <div
          key={src}
          className="hero-slide"
          style={{ backgroundImage: `url("${src}")`, opacity: i === idx ? 1 : 0 }}
        />
      ))}
      <div className="hero-overlay" />
    </div>
  );
}
