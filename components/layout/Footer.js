import { site } from "@/data/content";
import { withBasePath } from "@/lib/paths";
import styles from "./Footer.module.css";

// `compact` drops the large space above the footer, for pages that already
// end with their own spacing (like the project pages)
export default function Footer({ compact = false }) {
  const links = [
    { label: site.email, href: site.email && `mailto:${site.email}` },
    { label: "LinkedIn", href: site.linkedin },
    { label: "Github", href: site.github },
    { label: "CV", href: site.cv && withBasePath(site.cv) },
  ].filter((link) => link.href);

  return (
    <footer className={`container ${styles.footer} ${compact ? styles.compact : ""}`}>
      <p>
        <strong>{site.name}</strong> / {new Date().getFullYear()}
      </p>
      <ul className={styles.links}>
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
