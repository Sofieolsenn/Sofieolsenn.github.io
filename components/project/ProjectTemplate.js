import Link from "next/link";
import Tag from "@/components/ui/Tag";
import styles from "./ProjectTemplate.module.css";

// Reusable layout for a single project page. Kept deliberately plain so it can
// be designed later: title, role, description and tags, plus a way back.
export default function ProjectTemplate({ title, kind, role, description, tags = [] }) {
  return (
    <article className={`container ${styles.project}`}>
      <Link className={styles.back} href="/#projects">
        ← All projects
      </Link>

      {kind && <p className={styles.kind}>{kind}</p>}
      <h1 className={styles.title}>{title}</h1>

      {role && (
        <p className={styles.role}>
          <span className={styles.label}>Role</span> {role}
        </p>
      )}

      {description && <p className={styles.description}>{description}</p>}

      {tags.length > 0 && (
        <ul className={styles.tags} aria-label="Tools">
          {tags.map((tag) => (
            <li key={tag}>
              <Tag size="md">{tag}</Tag>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
