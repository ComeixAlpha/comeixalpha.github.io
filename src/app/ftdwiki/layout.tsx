import { baseOptions } from "@/lib/layout.shared";
import { wikiSource } from "@/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/docs";

export default function Layout({ children }: LayoutProps<"/ftdwiki">) {
  return (
    <DocsLayout tree={wikiSource.getPageTree()} {...baseOptions()}>
      {children}
    </DocsLayout>
  );
}
