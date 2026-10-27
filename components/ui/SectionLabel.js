import styles from "./SectionLabel.module.css";

export default function SectionLabel({ children, as: Tag = "h2", id }) {
  return (
    <Tag className={styles.label} id={id}>
      {children}
    </Tag>
  );
}
