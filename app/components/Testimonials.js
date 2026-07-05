"use client";

import { useState, useEffect } from "react";
import testimonials from "../data/testimonials";
import experiences from "../data/experiences";

function candidates(src) {
  const m = src.match(/^(.*)\.([^./]+)$/);
  if (!m) return [src];
  const base = m[1];
  const orig = m[2];
  const exts = ["jpg", "jpeg", "JPG", "JPEG", "png", "PNG", "webp"];
  const ordered = [orig, ...exts.filter((e) => e.toLowerCase() !== orig.toLowerCase())];
  return ordered.map((e) => `${base}.${e}`);
}

function Tile({ item }) {
  if (item.type === "photo") {
    return (
      <div className="mtile mtile-photo">
        <img src={item.src} alt="A moment from a mini meetup" />
      </div>
    );
  }
  return (
    <div className="mtile mtile-quote">
      <blockquote>“{item.quote}”</blockquote>
      <span className="mtile-name">— {item.name}</span>
    </div>
  );
}

export default function Testimonials() {
  const [photos, setPhotos] = useState([]);
  const [i, setI] = useState(0);

  // Preload the "moments" photos and keep the ones that actually load.
  useEffect(() => {
    let active = true;
    const results = new Array(experiences.length).fill(null);
    let remaining = experiences.length;
    if (remaining === 0) return;
    const done = () => {
      if (remaining === 0 && active) setPhotos(results.filter(Boolean));
    };
    experiences.forEach((item, k) => {
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
          results[k] = list[j];
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

  // Start with a photo, then spread the remaining photos across the quotes.
  const items = [];
  const Q = testimonials.length;
  if (photos.length > 0) items.push({ type: "photo", src: photos[0] });
  const rest = photos.slice(1);
  const P = rest.length;
  let pi = 0;
  for (let k = 0; k < Q; k++) {
    items.push({ type: "quote", quote: testimonials[k].quote, name: testimonials[k].name });
    while (pi < P && Math.floor(((pi + 1) * Q) / (P + 1)) === k + 1) {
      items.push({ type: "photo", src: rest[pi] });
      pi++;
    }
  }
  while (pi < P) {
    items.push({ type: "photo", src: rest[pi] });
    pi++;
  }
  const count = items.length;

  useEffect(() => {
    if (count <= 2) return;
    const t = setInterval(() => setI((x) => (x + 1) % count), 5000);
    return () => clearInterval(t);
  }, [count]);

  if (count === 0) return null;

  const view = [items[i % count], items[(i + 1) % count]];

  return (
    <div className="mixed-carousel">
      <button
        className="carousel-arrow left"
        onClick={() => setI((x) => (x - 1 + count) % count)}
        aria-label="Previous"
      >
        ‹
      </button>
      <div className="mixed-track">
        {view.map((it, idx) => (
          <Tile key={i + "-" + idx} item={it} />
        ))}
      </div>
      <button
        className="carousel-arrow right"
        onClick={() => setI((x) => (x + 1) % count)}
        aria-label="Next"
      >
        ›
      </button>
    </div>
  );
}
