"use client";

import { useState } from "react";
import gallery from "../data/gallery";

// Forgiving about file extension (tries .jpg/.jpeg/.JPG/.JPEG/.png), so
// mixed-case iPhone exports still load on Vercel's case-sensitive servers.
function candidates(src) {
  const m = src.match(/^(.*)\.([^./]+)$/);
  if (!m) return [src];
  const base = m[1];
  const orig = m[2];
  const exts = ["jpg", "jpeg", "JPG", "JPEG", "png", "PNG", "webp"];
  const ordered = [orig, ...exts.filter((e) => e.toLowerCase() !== orig.toLowerCase())];
  return ordered.map((e) => `${base}.${e}`);
}

function Thumb({ item, onFail, onOpen }) {
  const list = candidates(item.src);
  const [i, setI] = useState(0);
  return (
    <img
      src={list[i]}
      alt={item.alt || ""}
      loading="lazy"
      onClick={() => onOpen(list[i])}
      onError={() => {
        if (i + 1 < list.length) setI(i + 1);
        else onFail();
      }}
    />
  );
}

export default function Gallery() {
  const [failed, setFailed] = useState({});
  const [open, setOpen] = useState(null);

  if (gallery.length === 0) return null;
  const visible = gallery.filter((g) => !failed[g.src]);
  if (visible.length === 0) return null;

  return (
    <section className="section">
      <div className="wrap">
        <h2>Impressions of Amsterdam</h2>
        <p className="section-intro">
          A glimpse of the city you're moving to. Tap any photo to enlarge.
        </p>
        <div className="gallery-grid gallery-grid--small">
          {gallery.map((img, i) =>
            failed[img.src] ? null : (
              <div key={i} className="gallery-item gallery-item--clickable">
                <Thumb
                  item={img}
                  onFail={() => setFailed((f) => ({ ...f, [img.src]: true }))}
                  onOpen={setOpen}
                />
              </div>
            )
          )}
        </div>
      </div>

      {open && (
        <div className="lightbox" onClick={() => setOpen(null)}>
          <img src={open} alt="" />
        </div>
      )}
    </section>
  );
}
