import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.enum(['Personal', 'Dev', 'Labs', 'AI Week']),
    draft: z.boolean().default(false),
    readingTime: z.string().optional(),
    author: z.string(),
    slug: z.string().optional(), 
  }),
});

export const collections = { blog };