// GitHub Pages serves the site from /<repo-name>/ unless the repo is
// called <username>.github.io. The deploy workflow sets PAGES_BASE_PATH.
const basePath = process.env.PAGES_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  // Keeps Next.js from picking up a package-lock.json in a parent folder.
  turbopack: { root: import.meta.dirname },
};

export default nextConfig;
