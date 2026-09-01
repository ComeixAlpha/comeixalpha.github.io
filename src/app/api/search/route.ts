import { source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';

// 静态导出模式下需要在构建时预渲染搜索索引
export const revalidate = false;

export const { staticGET: GET } = createFromSource(source);
