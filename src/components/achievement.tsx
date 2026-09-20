"use client";

import { useState, type ReactNode } from "react";

export type AchievementRarity = "common" | "uncommon" | "rare" | "epic" | "legendary";

export interface AchievementItem {
  icon: string;
  name: string;
  en: string;
  rarity: AchievementRarity;
  mystery?: boolean | string;
  children?: ReactNode;
}

const rarityStyles: Record<AchievementRarity, { text: string; label: string }> = {
  common: { text: "text-green-400", label: "普通" },
  uncommon: { text: "text-cyan-400", label: "罕见" },
  rare: { text: "text-yellow-400", label: "稀有" },
  epic: { text: "text-purple-400", label: "史诗" },
  legendary: { text: "text-amber-400", label: "传说" },
};

/** 模糊描述的样式，鼠标悬停或触屏点击后淡出。 */
const revealClasses =
  "blur-sm opacity-60 select-none transition duration-300 group-hover:blur-none group-hover:opacity-100";

export function AchievementList({ children }: { children: ReactNode }) {
  return <div className="not-prose my-6 flex flex-col gap-4">{children}</div>;
}

/**
 * 单条成就：左侧图标，右侧从上到下依次为译名、稀有度、描述。
 *
 * 隐藏成就的描述默认被高斯模糊遮住
 * - 桌面端：鼠标悬停文字块即可看清
 * - 触屏端：点击文字块切换显示
 */
export function Achievement({ icon, name, en, rarity, mystery, children }: AchievementItem) {
  const style = rarityStyles[rarity];
  const hidden = !!mystery && mystery !== "false";
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="flex items-start gap-4">
      <img
        src={icon}
        alt={name}
        width={48}
        height={48}
        className="size-12 shrink-0 object-contain [image-rendering:pixelated]"
      />

      <div
        className={`group w-fit min-w-0 ${hidden ? "cursor-pointer" : ""}`}
        role={hidden ? "button" : undefined}
        tabIndex={hidden ? 0 : undefined}
        aria-expanded={hidden ? revealed : undefined}
        onClick={hidden ? () => setRevealed(v => !v) : undefined}
        onKeyDown={
          hidden
            ? event => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setRevealed(v => !v);
                }
              }
            : undefined
        }
      >
        <p className="text-base font-semibold text-zinc-100">
          {name}
          <span className="ml-2 text-sm font-normal text-zinc-500">{en}</span>
        </p>

        <p className={`mt-0.5 text-sm font-medium ${style.text}`}>{style.label}</p>

        {children && (
          <div
            className={`mt-1 w-fit text-base leading-snug text-zinc-300 ${
              hidden
                ? `${revealClasses} ${revealed ? "blur-none opacity-100" : ""}`
                : ""
            }`}
          >
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
