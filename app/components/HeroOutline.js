"use client";

import { useState } from "react";

// White Amsterdam outline overlaid on the hero.
// Drop a TRANSPARENT-background outline of Amsterdam in public/ as
// amsterdam-outline.svg (preferred) or amsterdam-outline.png. The CSS turns
// any dark line pure white. If the file is missing, nothing shows.
const SOURCES = ["/amsterdam-outline.svg", "/amsterdam-outline.png"];

export default function HeroOutline() {
  const [idx, setIdx] = useState(0);
  const [failed, setFailed] = useState(false);
  if (failed) return null;
  return (
    <img
      className="hero-outline"
      src={SOURCES[idx]}
      alt=""
      aria-hidden="true"
      onError={() => {
        if (idx + 1 < SOURCES.length) setIdx(idx + 1);
        else setFailed(true);
      }}
    />
  );
}
