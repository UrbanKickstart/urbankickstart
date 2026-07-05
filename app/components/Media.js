"use client";

import { useState } from "react";
import press from "../data/press";
import fair from "../data/fair";
import PhotoGrid from "./PhotoGrid";

// Shows the outlet logo prominently; falls back to the outlet name in text
// if the logo image is missing or fails to load.
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
    <section id="media" className="section section-alt">
      <div className="wrap">
        <h2>In the media</h2>
        <div className="media-list">
          {items.map((p, i) => (
            <a
              key={i}
              className="media-item"
              href={p.url}
              target="_blank"
              rel="noreferrer"
            >
              <div className="media-logo-box">
                <Logo item={p} />
              </div>
              <div className="media-body">
                <span className="press-format">{p.format}</span>
                {p.description && <p>{p.description}</p>}
                {p.quote && <blockquote>“{p.quote}”</blockquote>}
                <span className="press-link">{p.linkText || "View"} →</span>
              </div>
            </a>
          ))}
        </div>
        <PhotoGrid items={fair} title="At the IamExpat Fair Amsterdam" />
      </div>
    </section>
  );
}
