import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title:       z.string(),
    description: z.string(),
    pubDate:     z.coerce.date(),
    author:      z.string().default('Integraw Team'),
    tags:        z.array(z.string()).default([]),
    image:       z.string().optional(),
    draft:       z.boolean().default(false),
  }),
});

const portfolio = defineCollection({
  type: 'content',
  schema: z.object({
    title:       z.string(),
    description: z.string(),
    client:      z.string(),
    tech:        z.array(z.string()),
    url:         z.string().optional(),
    image:       z.string().optional(),
    featured:    z.boolean().default(false),
    order:       z.number().default(99),
  }),
});

export const collections = { blog, portfolio };
