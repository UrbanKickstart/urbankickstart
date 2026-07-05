"use client";

import { useState } from "react";

// Shows the Meetup logo at step 1. Drop the file at public/media/meetup.png
// (a transparent PNG). If it's missing, nothing is shown — no broken icon.
export default function MeetupLogo() {
  const [failed, setFailed] = useState(false);
  if (failed) return null;
  return (
    <img
      className="step-logo"
      src="/media/meetup.png"
      alt="Meetup"
      onError={() => setFailed(true)}
    />
  );
}
