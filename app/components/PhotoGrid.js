"use client";

import { useState } from "react";

// A reusable photo grid. Pass an array of { src, alt } via `items` and an
// optional `title`. Images that fail to load are skipped; if none load, the
// whole block (title included) disappears — so it always looks tidy.
//
// The image loader is forgiving about the file extension: if "/fair/1.jpg"
// isn't found, it also tries .jpeg, .JPG, .JPEG and .png (Vercel's servers are
// case-sensitive, unlike a Mac), so mixed-case iPhone exports still show up.
function candidates(src) {
  const m = src.match(/^(.*)\.([^./]+)$/);
  if (!m) return [src];
  const base = m[1];
  const orig = m[2];
  const exts = ["jpg", "jpeg", "JPG", "JPEG", "png", "PNG", "webp"];
  const ordered = [orig, ...exts.filter((e) => e.toLowerCase() !== orig.toLowerCase())];
  return ordered.map((e) => `${base}.${e}`);
}

function Img({ item, onFail }) {
  const list = candidates(item.src);
  const [i, setI] = useState(0);
  return (
    <img
      src={list[i]}
      alt={item.alt || ""}
      onError={() => {
        if (i + 1 < list.length) setI(i + 1);
        else onFail();
      }}
    />
  );
}

export default function PhotoGrid({ items, title }) {
  const [failed, setFailed] = useState({});

  if (!items || items.length === 0) return null;
  const visible = items.filter((it) => !failed[it.src]);
  if (visible.length === 0) return null;

  return (
    <>
      {title && <h3 className="subhead">{title}</h3>}
      <div className="gallery-grid">
        {items.map((img, i) =>
          failed[img.src] ? null : (
            <div key={i} className={"gallery-item" + (img.wide ? " wide" : "")}>
              <Img
                item={img}
                onFail={() => setFailed((f) => ({ ...f, [img.src]: true }))}
              />
            </div>
          )
        )}
      </div>
    </>
  );
}
