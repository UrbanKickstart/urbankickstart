"use client";

import { useState } from "react";

// Shows public/emma.jpg (or .jpeg). If it's not there yet, a simple
// initial-circle placeholder is shown instead of a broken image.
function swapExt(src) {
  if (/\.jpg$/i.test(src)) return src.replace(/\.jpg$/i, ".jpeg");
  if (/\.jpeg$/i.test(src)) return src.replace(/\.jpeg$/i, ".jpg");
  return null;
}

export default function AboutPhoto() {
  const [src, setSrc] = useState("/emma.jpg");
  const [triedAlt, setTriedAlt] = useState(false);
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <div className="about-photo-fallback">E</div>;
  }

  return (
    <img
      src={src}
      alt="Emma, founder of Urban Kickstart"
      onError={() => {
        const alt = swapExt(src);
        if (!triedAlt && alt) {
          setTriedAlt(true);
          setSrc(alt);
        } else {
          setFailed(true);
        }
      }}
    />
  );
}
