import Image from "next/image";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import { about } from "@/data/content";
import { withBasePath } from "@/lib/paths";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={`container section ${styles.about}`} id="about" aria-labelledby="about-label">
      <div className={styles.photo}>
        <Image
          src={withBasePath("/images/sofie-about.jpg")}
          alt="Sofie Olsen sitting in front of a beige curtain"
          fill
          sizes="(max-width: 900px) 100vw, 672px"
          priority
        />
      </div>
      <div className={styles.copy}>
        <SectionLabel id="about-label">About</SectionLabel>
        <p className={styles.heading}>{about.heading}</p>
        <div className={styles.body}>
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className={styles.buttons}>
          <Button href="#skills" variant="outline">
            My skills
          </Button>
          <Button href="#contact" variant="outline">
            Get to know me
          </Button>
        </div>
      </div>
    </section>
  );
}
