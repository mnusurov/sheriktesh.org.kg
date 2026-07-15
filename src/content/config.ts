import { defineCollection, z } from 'astro:content'

const news = defineCollection({
  schema: z.object({
    title: z.string(),
    lang: z.enum(['ru', 'en']),
    date: z.string(),
    image: z.string().optional(),
    author: z.string().optional(),
  })
})

const programs = defineCollection({
  schema: z.object({
    title: z.string(),
    lang: z.enum(['ru', 'en']),
    order: z.number(),
  })
})

const documents = defineCollection({
  schema: z.object({
    title: z.string(),
    lang: z.enum(['ru', 'en']),
    category: z.enum(['conventions', 'manuals', 'publications']),
    pdf: z.string(),
    cover: z.string().optional(),
    description: z.string().optional(),
  })
})

const galleries = defineCollection({
  schema: z.object({
    title: z.string(),
    lang: z.enum(['ru', 'en']),
    date: z.string().optional(),
    images: z.array(z.string()),
  })
})

export const collections = { news, programs, documents, galleries }
