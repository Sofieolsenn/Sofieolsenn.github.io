"use client";

import { useRef } from "react";
import styles from "./ProjectLink.module.css";

// A small "View site" button that stays in the bottom-right corner while you read
// the case study. With a `url` it opens the live site in a new tab; without one it
// opens a small dialog saying the site isn't published yet.
export default function ProjectLink({ url, label = "View site" }) {
  const dialogRef = useRef(null);
  const close = () => dialogRef.current?.close();
  const className = styles.sticky;
  const content = (
    <>
      {label}
      <ArrowIcon />
    </>
  );

  if (url) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" className={className}>
        {content}
      </a>
    );
  }

  return (
    <>
      <button
        type="button"
        className={className}
        aria-haspopup="dialog"
        onClick={() => dialogRef.current?.showModal()}
      >
        {content}
      </button>

      {/* Clicking outside the box (on the backdrop) or pressing Escape closes it */}
      <dialog
        ref={dialogRef}
        className={styles.dialog}
        aria-labelledby="project-link-title"
        onClick={(event) => event.target === dialogRef.current && close()}
      >
        <div className={styles.dialogBox}>
          <h2 id="project-link-title" className={styles.dialogTitle}>
            Coming soon
          </h2>
          <p className={styles.dialogText}>It has not been published yet by the client, but it&rsquo;s on its way!</p>
          <button type="button" className={styles.closeButton} onClick={close}>
            Close
          </button>
        </div>
      </dialog>
    </>
  );
}

// Arrow pointing up and to the right, drawn with the current text colour
function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17L17 7M8 7h9v9" />
    </svg>
  );
}
