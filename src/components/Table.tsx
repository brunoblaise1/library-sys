/* eslint-disable */
import prisma from '@/app/utils/prisma'
import React, { FC} from 'react'
import Data from './Data'
import Link from 'next/link'
// const filterBook = (await books).filter((book)=>
//  book.title.toLowerCase().includes(result.toLowerCase())
// )
// <input type="text" placeholder="Search for a book"  className="border rounded-2xl border-slate-300 p-2" name="search" onChange={(e)=> setSearch(e.target.value)} value={search}/>
const Table:FC = async ()=> {
const books = prisma.book.findMany({take: 10,})
const category = (await books).filter((obj, index, self) => index === self.findIndex((t) => t.category === obj.category))
  return (
    <>
    <div className='grid grid-cols-4 gap-1 pb-4 text-center'> 
      {
        category.map(book =>(
          <div className='bg-[#FFF4EC] p-2  rounded-full text-[#B95000]
       ' key={book.id}>
        <a href="#" >{book.category}</a>
       </div>
        ))
      }
       <div className='bg-[#FFF4EC] p-2  rounded-full text-[#B95000] 
         cursor-pointer'>
        <Link href="/borrowed">Borrowed</Link>
       </div>
    </div>
     <Data books={(await books)}/>
      {/* <tr className="border-b border-gray-200 text-sm odd:bg-white even:bg-gray-100">
      <td className="p-4 bg-orange-100"> 
        <p>Math</p>
        </td>
      <td className="p-4">
        <p>Borrowed</p>
        </td>
      <td className="p-4">
        <p>Promise Mugiraneza</p>
        </td>
        <td className="p-4">
        <p>Senoir 6 MPC</p>
        </td>
      </tr> */}
  <div>
  </div>
  </>
  )
}
export default Table
//TODO: addd zod and zustand and intregate with dizzle and shadcn
//TODO: deploying error server errors  problem I think was environwmnt