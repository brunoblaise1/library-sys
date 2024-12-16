/* eslint-disable */
"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import * as XLSX from 'xlsx'
function DataB({borrowed}: {borrowed: any}) {
    const [search, setSearch] = useState("")
       const narrowBook = borrowed.filter((borrower: any)=> 
            borrower.student_name.toLowerCase().includes(search.toLowerCase()) | borrower.student_class.toLowerCase().includes(search.toLowerCase()) | borrower.book.title.toLowerCase().includes(search.toLowerCase()) | borrower.book.barcode.toLowerCase().includes(search.toLowerCase()) | borrower.book.category.toLowerCase().includes(search.toLowerCase()) | borrower.book.section.toLowerCase().includes(search.toLowerCase()) 
  )
  const [exportData, SetExportData]  = useState(borrowed)
    //    borrower.book.title.toLowerCase().includes(search.toLowerCase()) | borrower.book.barcode.toLowerCase().includes(search.toLowerCase()) | borrower.book.category.toLowerCase().includes(search.toLowerCase()) | borrower.book.section.toLowerCase().includes(search.toLowerCase())
    //    const borrowedFilter = narrowBook.filter((b:any )=> b.borrowed.filter((field: any)=> field.student_name.toLowerCase().includes(search.toLowerCase())))
//    const r = realB.filter((b: any)=>
//     b.student_name.toLowerCase().includes("blaise"))
//    const n = [...narrowBook, r]
//    console.log(n)
//   useEffect(()=>{
//     console.log( borrowedFilter.map((c: any)=> {
//         c.borrowed.filter((b: any)=>{
//             return b.student_name.toLowerCase().includes("blaise")
//         })
//     }))
  //   },[search])
  //TODO: can't borrow when books are done
  const GetBorrowedExport = () => {
    const dataToExport = exportData.map((b: any) => ({
      name: b.student_name,
      grade: b.student_class,
      quantity: b.quantity,
      title: b.book.title,
      dueDate: b.due,
      BorrowedDate: String(b.book.createdAt).substring(3, 15)
    }), )
    const workBook = XLSX.utils.book_new()
    const worksheet = XLSX.utils?.json_to_sheet(dataToExport)
    XLSX.utils.book_append_sheet(workBook, worksheet, "Borrowed Books")
    XLSX.writeFile(workBook, `${"borrowed"}.xlsx`)
    /*   
due: "2/13/2024"
id: "cm4qn796v0003hmb8myb4nj6p"
quantity: 1
student_class: "S6MPC"
student_name: "Blaise"
teacher: null
    */
  }
  return (
    <div className='grid gap-4 m-4'>
         <div className='w-[30rem] p-2'>
 <h1 className="font-bold text-lg  text-left">Welcome back!</h1>
 <p className="text-slate-400">Here's a list you can sort and view any piece of information you need.</p>
 </div>
 <div className='bg-slate-50 p-2 text-slate-400 rounded-xl hover:bg-slate-600 cursor-pointer hover:text-slate-300'>
  <Link href='/'>Home</Link>
      </div>
       <div className='bg-slate-50 p-2 text-slate-400 rounded-xl hover:bg-slate-600 cursor-pointer hover:text-slate-300'>
  <button onClick={()=> GetBorrowedExport()}>Download</button>
 </div>
    <input type="text" placeholder="Search for a book"  className="border rounded-2xl border-slate-300 p-2" name="search" onChange={(e)=> setSearch(e.target.value)} value={search}/>
<table className="w-full text-sm text-left text-gray-500 ">
        <thead>
          <tr>
            <th scope="col" className="p-4 bg-slate-50">Name</th>
            <th scope="col" className="p-4 bg-slate-50">Quantity Borrowed</th>
            <th scope="col" className="p-4 bg-slate-50">Borrower name</th>
            <th scope="col" className="p-4 bg-slate-50">Borrower class</th>
            <th scope="col" className="p-4 bg-slate-50">Due Date</th>
            <th scope="col" className="p-4 bg-slate-50">Borrowed Date</th>
          </tr>
        </thead>
        <tbody>   
         {
        narrowBook.map((borrower:any) => (        
        <tr className="border-b border-gray-200 odd:bg-white even:bg-gray-100" key={borrower.id}>
             <td className="p-4 ">
             <p>{borrower.book.title}</p>
             </td>
        <td className="p-4">
          <p>{borrower.quantity}</p>
          </td>
        <td className="p-4">
          <p>  
            {borrower.student_name}
           </p>
          </td>
          <td className="p-4">
            {
                 <p>{borrower.student_class}</p>
            }
          </td>
          <td className="p-4">
             <p>{borrower.due}</p>
          </td>    
            <td className="p-4">
             <p>{String(borrower.createdAt).substring(3,15)}</p> 
          </td>      
        </tr>
     ))
        }
         </tbody>
         </table>
    </div>
  )
}
export default DataB
