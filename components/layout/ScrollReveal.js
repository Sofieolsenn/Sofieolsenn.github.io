"use client";

import { useEffect } from "react";

// What fades in: each part of a front page section, each item inside an element
// marked `data-reveal-children` (e.g. the project cards, one by one), and any
// element marked `data-reveal` (used on the project pages).
const TARGETS =
  "main > section > :not([data-reveal-children]), main > section [data-reveal-children] > *, [data-reveal]";

// Hides the page content until it scrolls into view, then fades and
// slides it up. Content on the first screen fades in when the page opens.
// The hiding itself starts in a small script in the page head (see layout.js),
// so nothing flashes before this runs.
export default function ScrollReveal() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("reveal-ready");
    if (!root.classList.contains("js-reveal")) return undefined;

    // Elements sharing a `data-reveal-group` (e.g. the skill tabs and their panel)
    // always come in together, so one never shows up alone
    let observer;
    const reveal = (target, index) => {
      if (target.hasAttribute("data-revealed")) return;
      const group = target.getAttribute("data-reveal-group");
      const members = group ? [...document.querySelectorAll(`[data-reveal-group="${group}"]`)] : [target];
      members.forEach((member, offset) => {
        member.style.animationDelay = `${(index + offset) * 150}ms`;
        member.setAttribute("data-revealed", "");
        observer?.unobserve(member);
      });
    };
    // Content on the first screen, and anything inside `data-reveal-on-load`
    // (the projects on the front page), fades in right away, one after another
    const targets = [...document.querySelectorAll(TARGETS)];
    const onLoad = targets.filter(
      (target) => target.closest("[data-reveal-on-load]") || target.getBoundingClientRect().top < window.innerHeight * 0.85,
    );
    onLoad.forEach(reveal);

    observer = new IntersectionObserver(
      (entries) => {
        // Items that appear together come in one after another
        entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top || a.boundingClientRect.left - b.boundingClientRect.left)
          .forEach((entry, index) => reveal(entry.target, index));
      },
      { rootMargin: "0px 0px -15% 0px" },
    );
    targets.filter((target) => !onLoad.includes(target)).forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return null;
}
