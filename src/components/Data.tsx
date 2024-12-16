/* eslint-disable */
"use client"
import React, { useState } from 'react'
function Data({books}: {books:any}) {
    const [search, setSearch] = useState("")
    const filterBook = (books).filter((book: any)=>
         book.title.toLowerCase().includes(search.toLowerCase()) | book.barcode.toLowerCase().includes(search.toLowerCase()) | book.category.toLowerCase().includes(search.toLowerCase()) | book.section.toLowerCase().includes(search.toLowerCase())
        )
  return (
    <div className='grid gap-4'>
    <input type="text" placeholder="Search for a book"  className="border rounded-2xl border-slate-300 p-2" name="search" onChange={(e)=> setSearch(e.target.value)} value={search}/>
    <table className="w-full text-sm text-left text-gray-500 ">
        <thead>
          <tr>
            <th scope="col" className="p-4 bg-slate-50">Name</th>
            <th scope="col" className="p-4 bg-slate-50">Quantity</th>
            <th scope="col" className="p-4 bg-slate-50">Barcode</th>
            <th scope="col" className="p-4 bg-slate-50">Section</th>
            <th scope="col" className="p-4 bg-slate-50">Category</th>
          </tr>
        </thead>
        <tbody>   
         {
     filterBook.map((book:any) => (
        <tr className="border-b border-gray-200 odd:bg-white even:bg-gray-100" key={book.id}>
        <td className="p-4 ">
          <p>{book.title}</p>
          </td>
        <td className="p-4">
          <p>{book.quantity}</p>
          </td>
        <td className="p-4">
          <p>{book.barcode}</p>
          </td>
          <td className="p-4">
          <p>{book.section}</p>
          </td>
          <td className="p-4">
          <p>{book.category}</p>
          </td>
        </tr>
     ))
        }
         </tbody>
         </table>
    </div>
  )
}
export default Data