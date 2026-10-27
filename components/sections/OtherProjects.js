import Tile from "@/components/cards/Tile";
import SectionLabel from "@/components/ui/SectionLabel";
import { otherProjects } from "@/data/content";
import styles from "./OtherProjects.module.css";

export default function OtherProjects() {
  return (
    <section className={`container section ${styles.other}`} aria-labelledby="other-label">
      <div className={styles.tiles}>
        {otherProjects.items.map((item) => (
          <Tile key={item.label} image={item.image} />
        ))}
      </div>
      <div>
        <SectionLabel id="other-label">Other projects</SectionLabel>
        <p className={styles.heading}>{otherProjects.heading}</p>
        <ul className={styles.list}>
          {otherProjects.items.map((item) => (
            <li key={item.label}>
              {item.href ? <a href={item.href}>{item.label}</a> : <span>{item.label}</span>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
