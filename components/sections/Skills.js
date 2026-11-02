"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import Slideshow from "@/components/ui/Slideshow";
import Tag from "@/components/ui/Tag";
import { skillGroups, skillsIntro, skillsText } from "@/data/content";
import { withBasePath } from "@/lib/paths";
import styles from "./Skills.module.css";

// Line icons for the skill categories (24x24, drawn with the current text colour)
const ICONS = {
  code: <path d="M8 7l-5 5 5 5M16 7l5 5-5 5M13.5 5l-3 14" />,
  rocket: (
    <path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2.1-.1-2.9a2.2 2.2 0 0 0-2.9-.1zM12 15l-3-3a22 22 0 0 1 2-3.9A12.9 12.9 0 0 1 22 2c0 2.7-.8 7.5-6 11a22.4 22.4 0 0 1-4 2zM9 12H4s.6-3 2-4c1.6-1.1 5 0 5 0M12 15v5s3-.6 4-2c1.1-1.6 0-5 0-5" />
  ),
  heart: <path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.2a4.3 4.3 0 0 1 7.5 2.6C19.5 15.4 12 20 12 20z" />,
};

// Badge with a tick, shown on the main skill tabs
function Badge() {
  return (
    <svg
      className={styles.badge}
      viewBox="0 0 24 24"
      width="14"
      height="14"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function Icon({ name }) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {ICONS[name]}
    </svg>
  );
}

export default function Skills() {
  const [group, setGroup] = useState(0);
  const [active, setActive] = useState(0);
  const tabsRef = useRef(null);
  const skills = skillGroups[group].skills;
  const skill = skills[active];
  // Only tabs marked `picture` (or with their own pictures) get a picture box.
  // The other tabs show their tags next to the text instead, with no line.
  const hasPicture = Boolean(skill.picture || skill.image || skill.slideshow);
  const layout = hasPicture ? "" : skill.tags ? styles.side : styles.textOnly;

  // Links like href="#hobbies" open that category and scroll to it. The address
  // is then set back to #skills, so the same link works again on the next click.
  useEffect(() => {
    function openFromHash() {
      const index = skillGroups.findIndex((item) => item.link && `#${item.link}` === window.location.hash);
      if (index === -1) return;
      selectGroup(index);
      window.history.replaceState(null, "", "#skills");
    }
    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, []);

  function selectGroup(index) {
    setGroup(index);
    setActive(0);
    // Scroll so the tabs sit 40% down the screen: the tabs and the start of
    // the panel are in view, and the category options stay in reach above them
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const tabsTop = tabsRef.current.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: tabsTop - window.innerHeight * 0.4, behavior: reduceMotion ? "auto" : "smooth" });
  }

  return (
    <section className="container section" id="skills" aria-labelledby="skills-label">
      <div className={styles.top}>
        <div className={styles.header}>
          <SectionLabel id="skills-label">Skills</SectionLabel>
          <p className={styles.sectionIntro}>{skillsIntro}</p>
          <p className={styles.sectionText}>{skillsText}</p>
        </div>

        <div className={styles.groups} role="radiogroup" aria-labelledby="skill-areas-title">
          <p className={styles.groupsTitle} id="skill-areas-title">
            Select a skill category
          </p>
          {skillGroups.map((item, index) => (
            <button
              key={item.label}
              type="button"
              role="radio"
              aria-checked={index === group}
              className={`${styles.group} ${index === group ? styles.activeGroup : ""}`}
              onClick={() => selectGroup(index)}
            >
              <span className={styles.radio} aria-hidden="true">
                <Icon name={item.icon} />
              </span>
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div ref={tabsRef} className={styles.tabs} role="tablist" aria-label="Skill categories">
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
            {item.featured && <Badge />}
            {item.tab}
          </button>
        ))}
      </div>

      <div className={`${styles.panel} ${layout}`} role="tabpanel" id="skill-panel" aria-labelledby={`skill-tab-${active}`}>
        <div className={styles.text}>
          <h3 className={styles.heading}>{skill.heading}</h3>
          {skill.intro && <p className={styles.intro}>{skill.intro}</p>}
          {skill.detail && <p className={styles.detail}>{skill.detail}</p>}
          {skill.more && <p className={styles.detail}>{skill.more}</p>}
          {skill.link && (
            <Button href={skill.link.href} variant="outline" target="_blank" rel="noopener noreferrer">
              {skill.link.label}
            </Button>
          )}
        </div>

        {hasPicture && (
          <div className={`${styles.skillImage} ${skill.slideshow ? styles.portrait : ""}`}>
            {skill.slideshow && <Slideshow images={skill.slideshow} sizes="(max-width: 900px) 100vw, 420px" />}
            {skill.image && (
              <Image src={withBasePath(skill.image.src)} alt={skill.image.alt} fill sizes="(max-width: 900px) 100vw, 420px" />
            )}
          </div>
        )}

        {skill.tags && (
          <div className={styles.tagArea}>
            <p className={styles.tagsTitle}>{skill.tagsHeading || "Specific skills"}</p>
            <ul className={styles.tags}>
              {skill.tags.map((tag) => (
                <li key={tag}>
                  <Tag size="md">{tag}</Tag>
                </li>
              ))}
            </ul>
          </div>
        )}

        {skill.galleries?.map((gallery, galleryIndex) => (
          <div key={galleryIndex} className={styles.gallery}>
            {gallery.heading && <h4 className={styles.tagsTitle}>{gallery.heading}</h4>}
            <ul className={`${styles.photos} ${gallery.shape === "portrait" ? styles.portraitPhotos : ""}`}>
              {gallery.photos.map((photo, index) => (
                <li key={index} className={styles.post}>
                  <div className={styles.photo}>
                    {photo.src && (
                      <Image
                        src={withBasePath(photo.src)}
                        alt={photo.alt}
                        fill
                        sizes="(max-width: 900px) 50vw, 400px"
                        style={photo.focus ? { objectPosition: photo.focus } : undefined}
                      />
                    )}
                  </div>
                  {photo.caption && <p className={styles.caption}>{photo.caption}</p>}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
