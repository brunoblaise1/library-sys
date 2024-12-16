import {z} from "zod"
export const createBookValidator = z.object({
      title: z.string(),
      barcode: z.string(),
      quantity: z.number(),
      section: z.string(),
      category: z.string()
})
export const borrowedValidator = z.object({
    student_name: z.string(),
    student_class: z.string(),
    teacher: z.string().optional(),
    quantity: z.number(),
    due: z.string(),
    barcode: z.string()
})
export type Book = z.infer<typeof createBookValidator>
export type Borrowed = z.infer<typeof borrowedValidator>
