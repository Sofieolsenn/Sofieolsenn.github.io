import { nav } from "@/data/content";
import { withBasePath } from "@/lib/paths";
import styles from "./Header.module.css";

// On other pages than the home page, the links point back to the home page
// sections (e.g. /#about) instead of to the current page.
export default function Header({ onHome = true }) {
  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Main">
        {nav.map((item, index) => (
          <a
            key={item.href}
            href={onHome ? item.href : `${withBasePath("/")}${item.href}`}
            className={onHome && index === 0 ? styles.active : undefined}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
