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

const documentItem = z.object({
  pdf: z.string(),
  cover: z.string().optional(),
  description: z.string().optional(),
})

const documents = defineCollection({
  schema: z.object({
    title: z.string(),
    lang: z.enum(['ru', 'en']),
    category: z.enum(['conventions', 'manuals', 'publications']),
    docs: z.array(documentItem),
  })
})

const galleries = defineCollection({
  schema: z.object({
    title: z.string(),
    lang: z.enum(['ru', 'en']),
    order: z.number(),
    date: z.string().optional(),
    images: z.array(z.string()),
  })
})

export const collections = { news, programs, documents, galleries }
