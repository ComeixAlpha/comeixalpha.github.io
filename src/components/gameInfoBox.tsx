import React from "react";

export type GameInfoType = "tower" | "monster" | "hero" | "ally" | "magic";

export type GameInfoTypeInput =
  | GameInfoType
  | "塔"
  | "怪物"
  | "英雄"
  | "友军"
  | "魔法";

export interface AttributeItem {
  label: string;
  value: React.ReactNode;
}

export interface GameInfoBoxProps {
  title: string;
  subtitle?: string;
  image?: string;
  imageSize?: number;
  type?: GameInfoTypeInput;
  attributes: AttributeItem[];
  lore?: string;
  /**
   * 这张卡片对应的正文。
   */
  children?: React.ReactNode;
}

interface TypeStyle {
  border: string;
  text: string;
}

const typeStyles: Record<GameInfoType, TypeStyle> = {
  // 塔：橙
  tower: {
    border: "border-amber-500/80 shadow-amber-950/40",
    text: "text-amber-400",
  },
  // 怪物：红
  monster: {
    border: "border-rose-600/80 shadow-rose-950/50",
    text: "text-rose-400",
  },
  // 英雄：蓝
  hero: {
    border: "border-sky-500/70",
    text: "text-sky-400",
  },
  // 友军：白
  ally: {
    border: "border-white/60",
    text: "text-white",
  },
  // 魔法：紫
  magic: {
    border: "border-purple-500/70 shadow-purple-950/30",
    text: "text-purple-400",
  },
};

const defaultStyle: TypeStyle = {
  border: "border-zinc-700",
  text: "text-zinc-200",
};

const typeAliases: Record<string, GameInfoType> = {
  塔: "tower",
  怪物: "monster",
  英雄: "hero",
  友军: "ally",
  魔法: "magic",
};

export function GameInfoBox({
  title,
  subtitle,
  image,
  imageSize = 128,
  type: gameType,
  attributes = [],
  lore,
  children,
}: GameInfoBoxProps) {
  const currentStyle =
    (gameType &&
      typeStyles[typeAliases[gameType] ?? (gameType as GameInfoType)]) ||
    defaultStyle;

  const card = (
    <aside
      className={`not-prose w-full rounded-lg border-2 bg-zinc-950/90 p-4 shadow-xl backdrop-blur ${
        children ? "" : "my-4 sm:float-right sm:ml-6 sm:mb-6 sm:w-80"
      } ${currentStyle.border}`}
    >
      {/* 标题栏 */}
      <div className="border-b border-zinc-800 pb-2 text-center">
        <h3
          className={`text-xl font-extrabold tracking-wide ${currentStyle.text}`}
        >
          {title}
        </h3>
        {subtitle && <p className="mt-0.5 text-xs text-zinc-400">{subtitle}</p>}
      </div>

      {/* 物品/实体图片槽位（固定边长，居中显示） */}
      {image && (
        <div className="my-3 flex items-center justify-center rounded border border-zinc-800/80 bg-zinc-900/60 p-4 shadow-inner">
          <img
            src={image}
            alt={title}
            width={imageSize}
            height={imageSize}
            style={{ width: imageSize, height: imageSize }}
            className="block shrink-0 object-contain [image-rendering:pixelated]"
          />
        </div>
      )}

      {/* 属性键值列表 */}
      <dl className="divide-y divide-zinc-800/60 text-xs">
        {attributes.map((attr, index) => (
          <div key={index} className="flex justify-between py-1.5">
            <dt className="font-medium text-zinc-400">{attr.label}</dt>
            <dd className="font-semibold text-zinc-200 text-right">
              {attr.value}
            </dd>
          </div>
        ))}
      </dl>

      {/* Minecraft 经典 Lore 框 */}
      {lore && (
        <div className="mt-3 rounded border border-zinc-800/70 bg-black/40 p-2.5 text-center text-xs italic text-purple-300/90">
          "{lore}"
        </div>
      )}
    </aside>
  );

  if (!children) return card;
  
  return (
    <section className="@container my-6">
      <div className="grid items-start gap-6 @3xl:grid-cols-[minmax(0,1fr)_20rem]">
        <div className="@3xl:col-start-2 @3xl:row-start-1">{card}</div>
        <div className="min-w-0 @3xl:col-start-1 @3xl:row-start-1 [&>*:first-child]:mt-0">
          {children}
        </div>
      </div>
    </section>
  );
}
