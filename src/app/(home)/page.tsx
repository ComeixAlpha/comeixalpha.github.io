import Link from 'next/link';
import { docsRoute, wikiRoute } from '@/lib/shared';

export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-10 px-6 py-16">
      <h1
        className="text-center text-4xl font-bold tracking-[0.2em] text-fd-foreground sm:text-5xl"
        style={{ fontFamily: 'var(--font-cinzel)' }}
      >
        Hey it's ComeixAlpha
      </h1>

      <div className="grid w-full max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2">
        <Link
          href={docsRoute}
          className="rounded-xl border bg-fd-card p-6 transition-colors hover:border-fd-primary/60 hover:bg-fd-accent"
        >
          <p className="text-lg font-semibold text-fd-foreground">Colorify Docs</p>
          <p className="mt-1 text-sm text-fd-muted-foreground">
            Colorify 7 使用文档
          </p>
        </Link>

        <Link
          href={wikiRoute}
          className="rounded-xl border bg-fd-card p-6 transition-colors hover:border-fd-primary/60 hover:bg-fd-accent"
        >
          <p className="text-lg font-semibold text-fd-foreground">FTD Wiki</p>
          <p className="mt-1 text-sm text-fd-muted-foreground">
            《边境塔防》维基百科
          </p>
        </Link>
      </div>
    </div>
  );
}
