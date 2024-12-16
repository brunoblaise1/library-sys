/* eslint-disable */
"use server"
import prisma from "@/app/utils/prisma"
import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { cookies } from 'next/headers'
import { createBookValidator } from "@/validators/zod";
import { borrowedValidator } from "@/validators/zod";

// const createBookValidator = z.object({
//       title: z.string(),
//       barcode: z.string(),
//       quantity: z.number(),
//       section: z.string(),
//       category: z.string()
// })
// const borrowedValidator = z.object({
//     student_name: z.string(),
//     student_class: z.string(),
//     teacher: z.string().optional(),
//     quantity: z.number(),
//     due: z.string(),
//     barcode: z.string()
// })
export async function createBook(FormData: FormData) {
    const cookieStore = await cookies()   
    const formDataObj ={
           title: FormData.get("title") as string,
            quantity: Number(FormData.get("quantity") as string),
            section:  FormData.get("section") as string,
            category: FormData.get("category") as string,
            barcode: FormData.get("barcode") as string 
    }
    const validator = createBookValidator.parse(formDataObj)
    const {title, quantity, section, category, barcode} = validator
try {
    await prisma.book.create({
        data: {
            title,
            quantity,
            section,
            category,
            barcode
        }
    }
    );  
} catch (error) {
    if(error instanceof Prisma.PrismaClientKnownRequestError){
        if(error.code == "P2002"){
            cookieStore.set("createBookF", "Already exist", {secure: true})
        }
    }
    cookieStore.set("createBookF", "Failed", {secure: true})
}
    revalidatePath("/")
    cookieStore.set("createBook", "Success", {secure:  true})
}
export async function borrowBook(FormData: FormData) {
    const formDataObj = {
         student_name: FormData.get("student_name") as string,
         student_class: FormData.get("student_class") as string,
         quantity: Number(FormData.get("b_quantity") as string),
         due: FormData.get("due") as string,
         teacher: FormData.get("teacher") as string,
         barcode: FormData.get("barcode") as string
    }
    const validator = borrowedValidator.parse(formDataObj)
    const {student_name, student_class, quantity, due, teacher, barcode} = validator
    const cookieStore = await cookies()
    try {
        const book = await prisma.book.findUnique({
            where: {
               barcode: FormData.get("barcode") as string 
          },
            select: {
                quantity: true,
                borrowed: true
            }
        })
        let count= book?.quantity as number
        let borrowed = 0
        let quantity = Number(FormData.get("b_quantity") as string)
        book?.borrowed.forEach((b: any) => {
           borrowed += b.quantity 
        })
        if (borrowed  > count || quantity > count || quantity <= 0 ) {
            cookieStore.set("BorrowedF", "The quanity is either tp big or the body aren't enoguh or you enter a number that is not valid") 
        } else {           
        await prisma.borrowed.create({
            data: {
                student_name,
                student_class,
                quantity,
                due,
                teacher,
                book:{
                   connect:{
                       barcode
                   }
                }
            }
        })   
        cookieStore.set("Borrowed", "Success", { secure: true })
        }
        // //let countBorrowed = borrowed?.quantity
        // /*
        // We get the book quantity and then check with countedborrowed 
        //  */    
    } catch (error) {
          if(error instanceof Prisma.PrismaClientKnownRequestError){
            if(error.code === "P2002"){
                cookieStore.set("BorrowedF", "Already exist")
            }
          }
        cookieStore.set("BorrowedF", "Failed")
        console.error(error)
    }
    revalidatePath("/borrowed")
}
export async function returnBook(FormData: FormData) {
    const cookieStore = await cookies()
    try {       
        const borrowed = await prisma.borrowed.findUnique(
         {
            where: {
                student_name: FormData.get("student_name") as string
            },
            select: {
                quantity: true
            }
         }
        ) 
        const quantity: number = borrowed?.quantity as number
           if( 1 < quantity){
               await prisma.borrowed.update({
                    where: {
                     student_name: FormData.get("student_name") as string
                    },
                    data: {
                        quantity: quantity - 1
                    }
                })
           }else{
              await prisma.borrowed.delete({
                where:{
                     student_name: FormData.get("student_name") as string
                }
              })
           }
    // const validator = create
    //   const {student_name}= createBookValidator.safeParse(FormData.get("student_name"))
   
    } catch (error) {
        console.log(error)
        cookieStore.set("ReturnedF", "Failed")
    }
    revalidatePath("/borrowed")
    cookieStore.set("Returned", "success")
}