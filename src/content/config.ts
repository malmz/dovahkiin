import { defineCollection, z } from 'astro:content';

const songs = defineCollection({
	type: 'content',
	schema: z.object({
		name: z.string(),
		wide: z.boolean().default(false),
		text: z.string().optional(),
		music: z.string().optional(),
		melody: z.string().optional(),
		from: z.string().optional(),
		misc: z.string().optional(),
	})
})

export const collections = { songs };
