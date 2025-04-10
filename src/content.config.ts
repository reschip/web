import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(), // Opcional; se usa si lo defines en el frontmatter.
    description: z.string(),
    pubDate: z.coerce.date(),
    draft: z.boolean().default(false),
    readingTime: z.string().optional(),
    author: z.string(),
    folder: z.string(), // Campo requerido para filtrar por carpeta.
  }),
});

export const collections = { blog };
