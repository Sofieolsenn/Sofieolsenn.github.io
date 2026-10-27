"use client";

import { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import Tag from "@/components/ui/Tag";
import { skills } from "@/data/content";
import styles from "./Skills.module.css";

export default function Skills() {
  const [active, setActive] = useState(0);
  const skill = skills[active];

  return (
    <section className="container section" id="skills" aria-labelledby="skills-label">
      <SectionLabel id="skills-label">Skills</SectionLabel>

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

      <div className={styles.panel} role="tabpanel" id="skill-panel" aria-labelledby={`skill-tab-${active}`}>
        <div className={styles.text}>
          <h3 className={styles.heading}>{skill.heading}</h3>
          <p className={styles.intro}>{skill.intro}</p>
          <p className={styles.detail}>{skill.detail}</p>
        </div>

        <ul className={styles.tags}>
          {skill.tags.map((tag) => (
            <li key={tag}>
              <Tag size="md">{tag}</Tag>
            </li>
          ))}
        </ul>

        {skill.relatedProject && (
          <a className={styles.related} href="#projects">
            <span className={styles.relatedLabel}>View related projects</span>
            <span className={styles.relatedTitle}>{skill.relatedProject}</span>
          </a>
        )}
      </div>
    </section>
  );
}
