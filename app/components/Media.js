"use client";

import { useState } from "react";
import press from "../data/press";

// Shows the outlet logo; falls back to the outlet name in text if the logo
// image is missing or fails to load.
function Logo({ item }) {
  const [failed, setFailed] = useState(false);
  if (!item.logo || failed) {
    return <span className="press-outlet">{item.outlet}</span>;
  }
  return (
    <img
      className="press-logo"
      src={item.logo}
      alt={item.outlet}
      onError={() => setFailed(true)}
    />
  );
}

export default function Media() {
  const items = press.filter((p) => p.url && p.url !== "#");
  if (items.length === 0) return null;

  return (
    <section id="media" className="section">
      <div className="wrap">
        <h2>In the media</h2>
        <div className="press-grid">
          {items.map((p, i) => (
            <a
              key={i}
              className="press-card"
              href={p.url}
              target="_blank"
              rel="noreferrer"
            >
              <span className="press-logo-wrap">
                <Logo item={p} />
              </span>
              <span className="press-format">{p.format}</span>
              {p.quote && <blockquote>“{p.quote}”</blockquote>}
              <span className="press-link">{p.linkText || "View"} →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
