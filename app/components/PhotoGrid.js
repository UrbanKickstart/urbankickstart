"use client";

import { useState } from "react";

// A reusable photo grid. Pass an array of { src, alt, wide } via `items`
// and an optional `title`. Images that fail to load are skipped, and if none
// load the whole block (title included) disappears — so it always looks tidy.
function swapExt(src) {
  if (/\.jpg$/i.test(src)) return src.replace(/\.jpg$/i, ".jpeg");
  if (/\.jpeg$/i.test(src)) return src.replace(/\.jpeg$/i, ".jpg");
  return null;
}

function Img({ item, onFail }) {
  const [src, setSrc] = useState(item.src);
  const [triedAlt, setTriedAlt] = useState(false);

  return (
    <img
      src={src}
      alt={item.alt || ""}
      onError={() => {
        const alt = swapExt(src);
        if (!triedAlt && alt) {
          setTriedAlt(true);
          setSrc(alt);
        } else {
          onFail();
        }
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
                onFail={() =>
                  setFailed((f) => ({ ...f, [img.src]: true }))
                }
              />
            </div>
          )
        )}
      </div>
    </>
  );
}
