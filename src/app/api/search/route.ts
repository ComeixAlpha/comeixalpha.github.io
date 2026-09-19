import { source, wikiSource } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';

export const revalidate = false;

const mergedSource = {
  ...source,
  getPages: () => [...source.getPages(), ...wikiSource.getPages()],
  getPageTree: (locale?: string) => {
    const docsTree = source.getPageTree(locale);
    const wikiTree = wikiSource.getPageTree(locale);

    return { ...docsTree, children: [...docsTree.children, ...wikiTree.children] };
  },
};

export const { staticGET: GET } = createFromSource(mergedSource);
