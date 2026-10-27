import styles from "./Tag.module.css";

// size "sm" is used on project cards, "md" in the skills panel.
export default function Tag({ children, size = "sm" }) {
  return <span className={`${styles.tag} ${styles[size]}`}>{children}</span>;
}
