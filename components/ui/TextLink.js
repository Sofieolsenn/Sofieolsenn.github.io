import styles from "./TextLink.module.css";

export default function TextLink({ href, children, ...props }) {
  return (
    <a className={styles.link} href={href} {...props}>
      {children}
    </a>
  );
}
