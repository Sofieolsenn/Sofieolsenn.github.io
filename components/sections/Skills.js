"use client";

import { useState } from "react";
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import Tag from "@/components/ui/Tag";
import { skills, skillsIntro } from "@/data/content";
import { withBasePath } from "@/lib/paths";
import styles from "./Skills.module.css";

export default function Skills() {
  const [active, setActive] = useState(0);
  const skill = skills[active];

  return (
    <section className="container section" id="skills" aria-labelledby="skills-label">
      <div className={styles.header}>
        <SectionLabel id="skills-label">Skills</SectionLabel>
        <p className={styles.sectionIntro}>{skillsIntro}</p>
      </div>

      <div className={styles.tabs} role="tablist" aria-label="Skill categories">
        {skills.map((item, index) => (
          <button
            key={item.tab}
            type="button"
            role="tab"
            id={`skill-tab-${index}`}
            aria-selected={index === active}
            aria-controls="skill-panel"
            className={`${styles.tab} ${index === active ? styles.activeTab : ""}`}
            onClick={() => setActive(index)}
          >
            {item.tab}
          </button>
        ))}
      </div>

      <div
        className={`${styles.panel} ${skill.photos ? styles.photoPanel : ""}`}
        role="tabpanel" id="skill-panel" aria-labelledby={`skill-tab-${active}`}>
        <div className={styles.text}>
          <h3 className={styles.heading}>{skill.heading}</h3>
          <p className={styles.intro}>{skill.intro}</p>
          {skill.detail && <p className={styles.detail}>{skill.detail}</p>}
        </div>

        {skill.photos ? (
          <ul className={styles.photos}>
            {skill.photos.map((photo, index) => (
              <li key={index} className={styles.post}>
                <div className={styles.photo}>
                  {photo.src && (
                    <Image src={withBasePath(photo.src)} alt={photo.alt} fill sizes="(max-width: 900px) 50vw, 270px" />
                  )}
                </div>
                {photo.caption && <p className={styles.caption}>{photo.caption}</p>}
              </li>
            ))}
          </ul>
        ) : (
          <ul className={styles.tags}>
            {skill.tags.map((tag) => (
              <li key={tag}>
                <Tag size="md">{tag}</Tag>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
