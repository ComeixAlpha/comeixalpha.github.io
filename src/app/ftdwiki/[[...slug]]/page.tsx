import { getMDXComponents } from "@/components/mdx";
import { wikiSource } from "@/lib/source";
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "fumadocs-ui/layouts/docs/page";
import { createRelativeLink } from "fumadocs-ui/mdx";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export default async function Page(props: PageProps<"/ftdwiki/[[...slug]]">) {
  const params = await props.params;
  const page = wikiSource.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription className="mb-0">
        {page.data.description}
      </DocsDescription>
      <DocsBody>
        <MDX
          components={getMDXComponents({
            // this allows you to link to other pages with relative file paths
            a: createRelativeLink(wikiSource, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  // `output: 'export'` 要求可选 catch-all 路由也能生成自身的根路径（/ftdwiki），
  // 这依赖内容根目录存在 content/ftdwiki/index.mdx（且被 meta.json 的 pages 收录）。
  // 缺了它构建会报：missing param "/ftdwiki/[[...slug]]" in "generateStaticParams()"。
  return wikiSource.generateParams();
}

export async function generateMetadata(
  props: PageProps<"/ftdwiki/[[...slug]]">,
): Promise<Metadata> {
  const params = await props.params;
  const page = wikiSource.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
