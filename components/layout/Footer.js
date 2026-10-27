import { site } from "@/data/content";
import { withBasePath } from "@/lib/paths";
import styles from "./Footer.module.css";

export default function Footer() {
  const links = [
    { label: "Contact", href: "#contact" },
    { label: "LinkedIn", href: site.linkedin },
    { label: "Github", href: site.github },
    { label: "Email", href: site.email && `mailto:${site.email}` },
    { label: "CV", href: site.cv && withBasePath(site.cv) },
  ].filter((link) => link.href);

  return (
    <footer className={`container ${styles.footer}`}>
      <p>
        <strong>{site.name}</strong> / {new Date().getFullYear()}
      </p>
      <ul className={styles.links}>
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
