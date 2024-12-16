/* eslint-disable */
import { Prisma, PrismaClient} from "@prisma/client";

const prisma = new PrismaClient()
const initialBook: Prisma.BookCreateInput[] = [
    {
        title: "Phyiscis",
        barcode: "BR39",
        quantity: 3,
        section: "C 2",
        category: "Fiction",
},
{
    title: "Math",
    barcode: "BR51",
    quantity: 23,
    section: "D 2",
    category: "Science"
},
{
    title: "English",
    barcode: "BR50",
    quantity: 24,
    section: "E 2",
    category: "Science"
},]
const initialBorrowed: Prisma.BorrowedCreateInput[] =[
     {
         student_name: "Blaise",
         student_class: "S6MPC",
         quantity: 2,
         due: "2/13/2024",
         book:{
            connect:{
                barcode: "BR50"
            }
         }
     },
     {
        student_name: "Promise",
        student_class: "S6MPC",
        due: "3/4/2024",
        quantity: 2,
        book: {
            connect: {
                barcode: "BR50"
            }
        }
     }
]
async function main (){
  console.log(`Starting seeding...`)
  for (const book of initialBook){
    const newBook = await prisma.book.create({
        data:book
    })
    console.log(`Created post with ${newBook.id}`)
  }
  for (const borrowed of initialBorrowed){
    const newBook = await prisma.borrowed.create({
        data:borrowed
    })
    console.log(`Generating borrowed!..`)
}
  console.log(`Seeding finished!`)
}

main()
.then(async() =>{
      await prisma.$disconnect()
})
.catch(async (e: any)=>{
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})





