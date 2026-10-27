"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { site } from "@/data/content";
import styles from "./ContactForm.module.css";

// GitHub Pages has no server, so messages are sent through Web3Forms,
// which forwards them to the email registered with the access key.
const MESSAGES = {
  sending: "Sending...",
  success: "Thanks! Your message has been sent. I’ll get back to you soon.",
  error: "Something went wrong. Please try again, or email me directly at ",
};

export default function ContactForm() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    setStatus("sending");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...data,
          access_key: site.web3formsKey,
          subject: data.reason ? `Portfolio: ${data.reason}` : "New message from your portfolio",
          from_name: data.name,
        }),
      });
      const result = await response.json();
      if (!result.success) throw new Error(result.message);
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
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
          <textarea name="message" rows={5} placeholder="Write an additional message ..." required />
        </label>
        {/* Spam trap: hidden from people, bots tick it and get filtered out */}
        <input type="checkbox" name="botcheck" className="visually-hidden" tabIndex={-1} autoComplete="off" />
      </div>
      <Button type="submit" disabled={status === "sending"}>
        {status === "sending" ? MESSAGES.sending : "Send message"}
      </Button>
      <p className={styles.status} role="status">
        {status === "success" && MESSAGES.success}
        {status === "error" && (
          <>
            {MESSAGES.error}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </>
        )}
      </p>
    </form>
  );
}
