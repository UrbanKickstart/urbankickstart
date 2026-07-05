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

const TILES = 8; // 4×2 on desktop, 2×4 on mobile

function rotate(arr, n) {
  if (arr.length === 0) return arr;
  const k = ((n % arr.length) + arr.length) % arr.length;
  return arr.slice(k).concat(arr.slice(0, k));
}

// One tile: crossfades through its own list of photos, on its own timer.
function Tile({ imgs, interval, delay }) {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    if (imgs.length <= 1) return;
    let iv;
    const to = setTimeout(() => {
      setIdx((i) => (i + 1) % imgs.length);
      iv = setInterval(() => setIdx((i) => (i + 1) % imgs.length), interval);
    }, delay);
    return () => {
      clearTimeout(to);
      clearInterval(iv);
    };
  }, [imgs, interval, delay]);

  return (
    <div className="hero-tile">
      {imgs.map((src, i) => (
        <div
          key={src + i}
          className="hero-tile-img"
          style={{ backgroundImage: `url("${src}")`, opacity: i === idx ? 1 : 0 }}
        />
      ))}
    </div>
  );
}

export default function HeroSlideshow() {
  const [srcs, setSrcs] = useState([]);

  // Preload each image (trying extension variants); keep the ones that load.
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

  if (srcs.length === 0) {
    return (
      <div className="hero-mosaic" aria-hidden="true">
        <div className="hero-overlay" />
      </div>
    );
  }

  const tiles = [];
  for (let i = 0; i < TILES; i++) {
    // Each tile gets the full pool, rotated to a different starting photo,
    // and its own timing, so they change at different moments.
    tiles.push({
      imgs: rotate(srcs, i),
      interval: 3200 + ((i * 370) % 2200),
      delay: i * 450,
    });
  }

  return (
    <div className="hero-mosaic" aria-hidden="true">
      {tiles.map((t, i) => (
        <Tile key={i} imgs={t.imgs} interval={t.interval} delay={t.delay} />
      ))}
      <div className="hero-overlay" />
    </div>
  );
}
