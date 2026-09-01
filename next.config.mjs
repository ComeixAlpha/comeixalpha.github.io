import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  // 静态导出，用于部署到 GitHub Pages
  output: "export",
  reactStrictMode: true,
};

export default withMDX(config);
