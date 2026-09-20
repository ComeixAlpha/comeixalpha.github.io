import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import { Accordion, Accordions } from "./accordion";
import { Achievement, AchievementList } from "./achievement";
import { Banner } from "./banner";
import { Step, Steps } from 'fumadocs-ui/components/steps';
import { CodeBlock, Pre } from 'fumadocs-ui/components/codeblock';

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    Accordion,
    Accordions,
    Achievement,
    AchievementList,
    Banner,
    Step,
    Steps,
    CodeBlock,
    Pre,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
