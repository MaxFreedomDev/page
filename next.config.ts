import type { NextConfig } from "next";

const repository = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isGitHubPages = process.env.GITHUB_PAGES === "true";
const isRootPagesSite = repository.endsWith(".github.io");
const basePath = isGitHubPages && !isRootPagesSite ? `/${repository}` : "";

const nextConfig: NextConfig = {
  ...(isGitHubPages ? { output: "export" as const } : {}),
  trailingSlash: isGitHubPages,
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
  ...(isGitHubPages
    ? { typescript: { tsconfigPath: "tsconfig.pages.json" } }
    : {}),
};

export default nextConfig;
