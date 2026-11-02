import Image from "next/image";
import Link from "next/link";
import Tag from "@/components/ui/Tag";
import { withBasePath } from "@/lib/paths";
import styles from "./ProjectCard.module.css";

// Add `image` (a path in /public) to a project in data/content.js to show a
// cover image. With `href` the card links to that page (Link adds the base path).
export default function ProjectCard({ kind, title, tags = [], featured = false, image, href }) {
  const Wrapper = href ? Link : "article";

  return (
    <Wrapper className={`${styles.card} ${featured ? styles.featured : ""}`} href={href}>
      {image && (
        <Image className={styles.image} src={withBasePath(image)} alt="" fill sizes="(max-width: 800px) 100vw, 1274px" />
      )}
      <div className={styles.content}>
        <p className={styles.kind}>{kind}</p>
        <h3 className={styles.title}>{title}</h3>
        {tags.length > 0 && (
          <ul className={styles.tags} aria-label="Tools">
            {tags.map((tag) => (
              <li key={tag}>
                <Tag>{tag}</Tag>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Wrapper>
  );
}
