"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { site } from "@/data/content";
import styles from "./ContactForm.module.css";

// GitHub Pages has no server, so the form opens the visitor's email app
// with the message filled in. Set `email` in data/content.js.
export default function ContactForm() {
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (!site.email) {
      setError("The contact form is not set up yet.");
      return;
    }
    const data = new FormData(event.currentTarget);
    const subject = data.get("reason") || "Hello from your portfolio";
    const body = `${data.get("message")}\n\n${data.get("name")}\n${data.get("email")}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.panel}>
        <div className={styles.row}>
          <label className={styles.field}>
            <span className="visually-hidden">Name</span>
            <input name="name" placeholder="Name" autoComplete="name" required />
          </label>
          <label className={styles.field}>
            <span className="visually-hidden">Email</span>
            <input name="email" type="email" placeholder="Email" autoComplete="email" required />
          </label>
        </div>
        <label className={styles.field}>
          <span className="visually-hidden">Why are you reaching out</span>
          <input name="reason" placeholder="Why are you reaching out" />
        </label>
        <label className={styles.field}>
          <span className="visually-hidden">Message</span>
          <textarea name="message" rows={5} placeholder="Write an additional message ..." />
        </label>
      </div>
      <Button type="submit">Send message</Button>
      {error && (
        <p className={styles.error} role="status">
          {error}
        </p>
      )}
    </form>
  );
}
