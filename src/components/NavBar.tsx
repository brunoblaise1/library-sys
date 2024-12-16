/* eslint-disable */
import prisma from '@/app/utils/prisma'
import React, { FC } from 'react'
 const   NavBar: FC = async ()=> {
  const books = await prisma.book.findMany({select:{quantity:  true}})
  const categoryBook = await prisma.book.findMany({select:{category: true}})
 const category = categoryBook.filter((obj, index, self)=> index === self.findIndex(t => t.category === obj.category )
 ).length
  const barcode = await prisma.book.count()
  let sumBooks = 0
  books.map((b: any)=> sumBooks += b.quantity)
  const borrowed = await prisma.borrowed.findMany(
    {
      select:{
        quantity:  true
      }
    }
  )
  let sumBorrowed = 0
  borrowed.map((b: any)=> sumBorrowed += b.quantity)
  return (
    <>
<div className='grid grid-cols-2 gap-2 p-2 m-2  text-sm'>
<div className='bg-[#EDEEFC] p-4 rounded-2xl'>
<h1 className=' font-bold '>Total of Books</h1>
<p className=' font-extralight text-slate-600'>{sumBooks}</p>
       </div>
       <div className='bg-[#EDEEFC] p-4 rounded-2xl'>
        <h1 className='text-sm font-bold '>Total of borrowed</h1>
        <p className=' font-extralight text-slate-600'>{sumBorrowed}</p>
       </div>
       <div className='bg-[#EDEEFC] p-4 rounded-2xl'>
       <h1 className='text-sm font-bold '>Total of Category</h1>
       <p className=' font-extralight text-slate-600'>{category}</p>
       </div>
       <div className='bg-[#EDEEFC] p-4 rounded-2xl'>
       <h1 className='text-sm font-bold '>Total of created codes</h1>
       <p className=' font-extralight text-slate-600'>{barcode}</p>
       </div>
    </div>
    </>
  )
}
export default NavBar
