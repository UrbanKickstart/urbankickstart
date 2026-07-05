"use client";

import { useState } from "react";
import gallery from "../data/gallery";

// Tries the given src; if it 404s, automatically retries the other common
// JPEG extension (.jpg <-> .jpeg) before giving up and hiding the tile.
function swapExt(src) {
  if (/\.jpg$/i.test(src)) return src.replace(/\.jpg$/i, ".jpeg");
  if (/\.jpeg$/i.test(src)) return src.replace(/\.jpeg$/i, ".jpg");
  return null;
}

function GalleryImg({ img, onFail }) {
  const [src, setSrc] = useState(img.src);
  const [triedAlt, setTriedAlt] = useState(false);

  function handleError() {
    const alt = swapExt(src);
    if (!triedAlt && alt) {
      setTriedAlt(true);
      setSrc(alt);
    } else {
      onFail();
    }
  }

  return (
    <img src={src} alt={img.alt || "Amsterdam"} onError={handleError} />
  );
}

export default function Gallery() {
  const [failed, setFailed] = useState({});

  if (gallery.length === 0) return null;

  const visible = gallery.filter((g) => !failed[g.src]);
  if (visible.length === 0) return null;

  return (
    <section className="section">
      <div className="wrap">
        <h2>Impressions of Amsterdam</h2>
        <p className="section-intro">
          A glimpse of the city you're moving to.
        </p>
        <div className="gallery-grid">
          {gallery.map((img, i) =>
            failed[img.src] ? null : (
              <div
                key={i}
                className={"gallery-item" + (img.wide ? " wide" : "")}
              >
                <GalleryImg
                  img={img}
                  onFail={() =>
                    setFailed((f) => ({ ...f, [img.src]: true }))
                  }
                />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
