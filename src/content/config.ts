import { defineCollection, z } from 'astro:content'

const news = defineCollection({
  schema: z.object({
    title: z.string(),
    lang: z.enum(['ru', 'en']),
    date: z.string(),
    image: z.string().optional(),
    description: z.string().optional(),
    author: z.string().optional(),
  })
})

const programs = defineCollection({
  schema: z.object({
    title: z.string(),
    lang: z.enum(['ru', 'en']),
    order: z.number(),
    description: z.string().optional(),
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

const partners = defineCollection({
  schema: z.object({
    title: z.string(),
    lang: z.enum(['ru', 'en']),
  })
})

const about = defineCollection({
  schema: z.object({
    title: z.string(),
    lang: z.enum(['ru', 'en']),
  })
})

const contact = defineCollection({
  schema: z.object({
    title: z.string(),
    lang: z.enum(['ru', 'en']),
  })
})

const staff = defineCollection({
  schema: z.object({
    title: z.string(),
    lang: z.enum(['ru', 'en']),
    role: z.string(),
    photo: z.string(),
    order: z.number(),
  })
})

const homepage = defineCollection({
  schema: z.object({
    block_type: z.enum(['hero', 'about', 'history', 'activities']),
    title: z.string(),
    lang: z.enum(['ru', 'en']),
    order: z.number(),
  })
})

export const collections = { news, programs, documents, galleries, partners, about, contact, staff, homepage }
