"use client";

import { useState } from "react";
import { CONTACT_EMAIL } from "../data/site";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
      _subject: "New message via urbankickstart.com",
      _template: "table",
    };

    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/" + CONTACT_EMAIL,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="form-success">
        <p>Thank you — your message is on its way. I'll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        Name
        <input type="text" name="name" required />
      </label>
      <label>
        Email
        <input type="email" name="email" required />
      </label>
      <label>
        Message
        <textarea name="message" rows={5} required />
      </label>
      <button type="submit" className="btn" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
      {status === "error" && (
        <p className="form-error">
          Something went wrong. Please email me directly at {CONTACT_EMAIL}.
        </p>
      )}
    </form>
  );
}
