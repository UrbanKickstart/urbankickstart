"use client";

import { useState, useEffect, useCallback } from "react";
import testimonials from "../data/testimonials";

const COLORS = ["#7a3a5a", "#3d1a2c", "#5c2b44"];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [failed, setFailed] = useState({});
  const count = testimonials.length;

  const go = useCallback(
    (next) => setIndex((i) => (next + count) % count),
    [count]
  );

  // Auto-advance every 7 seconds.
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % count), 7000);
    return () => clearInterval(id);
  }, [count]);

  if (count === 0) return null;

  const t = testimonials[index];
  const showImg = t.photo && !failed[t.photo];
  const initial = t.name.charAt(0).toUpperCase();
  const color = COLORS[index % COLORS.length];

  return (
    <div className="carousel">
      <button
        className="carousel-arrow left"
        onClick={() => go(index - 1)}
        aria-label="Previous"
      >
        ‹
      </button>

      <figure className="quote-card" key={index}>
        <div className="avatar" style={{ background: color }}>
          {showImg && (
            <img
              src={t.photo}
              alt={t.name}
              onError={() =>
                setFailed((f) => ({ ...f, [t.photo]: true }))
              }
            />
          )}
          {!showImg && <span>{initial}</span>}
        </div>
        <blockquote>“{t.quote}”</blockquote>
        <figcaption>— {t.name}</figcaption>
      </figure>

      <button
        className="carousel-arrow right"
        onClick={() => go(index + 1)}
        aria-label="Next"
      >
        ›
      </button>

      <div className="dots">
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={"dot" + (i === index ? " active" : "")}
            onClick={() => setIndex(i)}
            aria-label={"Show testimonial " + (i + 1)}
          />
        ))}
      </div>
    </div>
  );
}
