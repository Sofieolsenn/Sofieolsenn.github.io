import Button from "@/components/ui/Button";
import { hero, site } from "@/data/content";
import { withBasePath } from "@/lib/paths";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={`container ${styles.hero}`} id="top">
      <h1 className={styles.heading}>
        <span className={styles.greeting}>{hero.greeting}</span> {hero.text}
      </h1>
      <div className={styles.buttons}>
        <Button href="#projects">View projects</Button>
        {site.cv && (
          <Button href={withBasePath(site.cv)} variant="outline" download>
            Download CV
          </Button>
        )}
      </div>
    </section>
  );
}
