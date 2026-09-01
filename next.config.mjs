import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  // 静态导出，用于部署到 GitHub Pages
  output: "export",
  reactStrictMode: true,
  // 静态站没有 /_next/image 优化服务，必须关闭图片优化，
  // 否则 next/image 会生成指向 /_next/image?url=... 的地址导致图片 404
  images: {
    unoptimized: true,
  },
};

export default withMDX(config);
