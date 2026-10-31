"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import Tag from "@/components/ui/Tag";
import { skillGroups, skillsIntro } from "@/data/content";
import { withBasePath } from "@/lib/paths";
import styles from "./Skills.module.css";

export default function Skills() {
  const [group, setGroup] = useState(0);
  const [active, setActive] = useState(0);
  const skills = skillGroups[group].skills;
  const skill = skills[active];

  function selectGroup(index) {
    setGroup(index);
    setActive(0);
  }

  return (
    <section className="container section" id="skills" aria-labelledby="skills-label">
      <div className={styles.header}>
        <SectionLabel id="skills-label">Skills</SectionLabel>
        <p className={styles.sectionIntro}>{skillsIntro}</p>
      </div>

      <div className={styles.groups} role="group" aria-label="Skill areas">
        {skillGroups.map((item, index) => (
          <button
            key={item.label}
            type="button"
            aria-pressed={index === group}
            className={`${styles.group} ${index === group ? styles.activeGroup : ""}`}
            onClick={() => selectGroup(index)}
          >
            {item.label}
          </button>
        ))}
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
          {skill.intro && <p className={styles.intro}>{skill.intro}</p>}
          {skill.detail && <p className={styles.detail}>{skill.detail}</p>}
        </div>

        {skill.drawings && (
          <div className={styles.drawings}>
            <div className={styles.drawingImage}>
              {skill.drawings.src && (
                <Image src={withBasePath(skill.drawings.src)} alt={skill.drawings.alt} fill sizes="(max-width: 900px) 100vw, 480px" />
              )}
            </div>
            <div className={styles.drawingsText}>
              {skill.drawings.text.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {skill.drawings.instagram && (
                <Button href={skill.drawings.instagram} variant="outline" target="_blank" rel="noopener noreferrer">
                  See my drawings on Instagram ↗
                </Button>
              )}
            </div>
          </div>
        )}

        {skill.photos ? (
          <ul className={styles.photos}>
            {skill.photos.map((photo, index) => (
              <li key={index} className={styles.post}>
                <div className={styles.photo}>
                  {photo.src && (
                    <Image src={withBasePath(photo.src)} alt={photo.alt} fill sizes="(max-width: 900px) 50vw, 400px" />
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
