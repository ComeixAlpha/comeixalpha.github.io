import { Provider } from "@/components/provider";
import "katex/dist/katex.min.css";
import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import "./global.css";

const inter = Inter({
  subsets: ["latin"],
});

// 主页署名用的衬线字体，通过 CSS 变量暴露（见首页的 font-cinzel 用法）
const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-cinzel",
});

// 让 OG 图片等绝对路径资源指向部署后的域名
export const metadata: Metadata = {
  metadataBase: new URL("https://comeixalpha.github.io"),
};

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.className} ${cinzel.variable}`} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
