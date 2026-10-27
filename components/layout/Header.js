import { nav } from "@/data/content";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Main">
        {nav.map((item, index) => (
          <a key={item.href} href={item.href} className={index === 0 ? styles.active : undefined}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
