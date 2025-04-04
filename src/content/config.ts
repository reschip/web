import { defineCollection, z} from "astro:content";

const blogs = defineCollection({
    schema: z.object({
        title: z.string(),
        author: z.string(),
        description: z.string()
    })
})


export const colelections = { blogs}