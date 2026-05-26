import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    section: z.enum(['Workflows', 'Tool Decisions', 'Systems']),
    urlSlug: z.string(),
    seo_keyword: z.string().optional(),
    meta_description: z.string().optional(),
    word_count_target: z.number().optional(),
    status: z.string().optional(),
    monetization: z.string().optional(),
    pubDate: z.coerce.date().optional(),
    order: z.number().optional(),
  }),
});

export const collections = { blog };
