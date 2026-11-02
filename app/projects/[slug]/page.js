import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProjectTemplate from "@/components/project/ProjectTemplate";
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
    description: project.summary,
    alternates: { canonical: `/projects/${slug}/` },
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = findProject(slug);
  if (!project) notFound();
  // The next project in the list, going back to the first after the last
  const nextProject = projects[(projects.indexOf(project) + 1) % projects.length];

  return (
    <>
      <Header onHome={false} />
      <main>
        <ProjectTemplate project={project} nextProject={nextProject} />
      </main>
      <Footer />
    </>
  );
}
