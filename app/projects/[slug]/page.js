import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProjectTemplate from "@/components/project/ProjectTemplate";
import ScrollToTop from "@/components/project/ScrollToTop";
import { projects, site } from "@/data/content";

// One static page per project in data/content.js. Unknown slugs give a 404,
// which a static export needs (no pages can be made on request).
export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

function findProject(slug) {
  return projects.find((project) => project.slug === slug);
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = findProject(slug);
  if (!project) return {};

  return {
    title: `${project.title} | ${site.name}`,
    description: project.comingSoon ? `${project.title}: case study coming soon.` : project.summary,
    alternates: { canonical: `/projects/${slug}/` },
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = findProject(slug);
  if (!project) notFound();
  // The previous and next project in the list, wrapping around at the ends
  const index = projects.indexOf(project);
  const previousProject = projects[(index - 1 + projects.length) % projects.length];
  const nextProject = projects[(index + 1) % projects.length];

  return (
    <>
      <ScrollToTop key={slug} />
      <Header onHome={false} />
      <main>
        <ProjectTemplate project={project} previousProject={previousProject} nextProject={nextProject} />
      </main>
      <Footer compact />
    </>
  );
}
