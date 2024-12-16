/* eslint-disable */
'use client';
import { ReactNode, useEffect, useState } from 'react';
import { Drawer } from 'vaul';
import BarcodeScannerComponent from 'react-qr-barcode-scanner'
import Barcode from 'react-barcode'
import { borrowBook, createBook, returnBook } from '@/action/actions';
import { useCookies } from 'next-client-cookies';
import { toast } from 'sonner';
import Sound from 'react-sound'
import { useWithSound } from '@/lib/useWithSound';

export default function VaulDrawer({children, title}: {
    children: ReactNode,
    title: string,
}) {
  // use to generate unique code
  const initialValues = {
    title: "",
    section: "",
    category: "",
    quantity: "",
    b_quantity: "",
    teacher: "",
    student_name: "",
    student_class: "",
    due: "",
  }
  // usestate for data createion of the book push method field
  const [data, setData] = useState(initialValues)
  const [code, setCode] = useState<string>("")
  //   setData( values => ({
  //     ...values,
  //     ...coder
  //   }) )
  //  console.log("Data", data.barcode)
  // used for to  add books
  const [barcode, setbarcode] = useState<string | null>(null)
  const downloadCode = () => {
    const canvas: any = document.getElementById("code")?.innerHTML
    const printAble: any = window.open("", "", "height=100, width=100")
    printAble.document.open()
    printAble.document.write(`
   <html>
   <head>
   <title> Barcode ${code}</title>
   </head>
   <body>
   <h1>Generate barcode:<h1/>
   ${canvas}
   </body>
   </html>
      `)
    printAble.document.close()
    printAble.print()
  }

  //handle inputs 
  const handleInput = (e: { target: { name: string; value: string; }; }) => {
    const { name, value } = e.target
    setData({
      ...data,
      [name]: value
    })
  }
  const cookies = useCookies()
  if (cookies.get("Returned") !== undefined) {
    toast.success(cookies.get("Returned"))
    cookies.remove("Returned")
  } else if (cookies.get("ReturnedF") !== undefined) {
    toast.error(cookies.get("ReturnedF"))
    cookies.remove("ReturnedF")
  } else if (cookies.get("Borrowed") !== undefined) {
    toast.success(cookies.get("Borrowed"))
    cookies.remove("Borrowed")
  } else if (cookies.get("BorrowedF") !== undefined) {
    toast.error(cookies.get("BorrowedF"))
    cookies.remove("BorrowedF")
  } else if (cookies.get("createBook") !== undefined) {
    toast.success(cookies.get("createBook"))
    cookies.remove("createBook")
  } else if (cookies.get("createBookF") !== undefined) {
    toast.error(cookies.get("createBookF"))
    cookies.remove("createBookF")
  }
  const { playSound: playSound } = useWithSound('/beep.wave')
  // playing the sund 
  if (barcode !== null) {
     playSound()
  }
  return (
    <Drawer.Root>
      <Drawer.Trigger >
        <div className="bg-slate-50 p-2 text-slate-400 rounded-xl hover:bg-slate-600 hover:text-slate-300">
      
      <a>{title}</a>
        </div>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-gray-100 flex flex-col rounded-t-[10px] mt-24 h-fit fixed bottom-0 left-0 right-0 outline-none">
          <div className="p-4 bg-white rounded-t-[10px] flex-1">
            <div aria-hidden className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-gray-300 mb-8" />
            <div className="max-w-md mx-auto">
              <Drawer.Title className="font-medium mb-4 text-gray-900">{title}</Drawer.Title>
             {children}
             {
        title === "Generate code" ? (
       <div className='grid'>
       {
        code.length !== 21 ? (
         <div className='grid gap-2 grid-cols-1'>
           <div id="code">
      <Barcode value={code} /> 
         </div> 
        <input placeholder='Create a  new unique code' onChange={(e)=>{
        setCode(e.target.value)
           }} className='border p-2 rounded-full'/>
          <button className='bg-black p-2 rounded-full text-white' onClick={()=> downloadCode()}>Download</button>
          </ div>
           ):(
           <h1 className='text-center'>Write a short code</h1>
          )}
          </div>
                ):title === "Return a book" ?(
               
             <form action={returnBook} className="grid gap-2">
    <div className='grid '>
      <label htmlFor="value" className='p-2'>Student Name:</label>
         <input type="text" id='value' name='student_name' value={data.student_name} className='border rounded-full p-2' onChange={handleInput} />
      </div>
       <button className='bg-black p-2 rounded-full text-white'>
             Return
       </button>
               </form>           
               ):(
                 <>
               {barcode === null ? (
                    <>
                     <BarcodeScannerComponent
                     width={500}
                     height={500}
                     onUpdate={(err: any, result: any) => {
                       if (result) setbarcode(result.getText());
                       else console.log(err)
                       }}
                   />
                 </>
               ):(
          <>
     {title === "Add a book"? (
     <form action={createBook} className='grid gap-2'>
        <div className='grid '>
            <input type="text" id='value' name="barcode"  value={barcode} className='border rounded-full p-2 hidden' onChange={(e)=> console.log(e.target.value)}/>
          </div>
        <div className='grid '>
          <label htmlFor="value" className='p-2'>Name:</label>
             <input type="text" id='value' name='title' value={data.title} className='border rounded-full p-2' onChange={handleInput} />
          </div>
        <div className='grid '>
          <label htmlFor="value" className='p-2'>Section:</label>
             <input type="text" id='value' name="section" value={data.section} className='border rounded-full p-2' onChange={handleInput}/>
        </div>
        <div className='grid '>
          <label htmlFor="value" className='p-2'>Category:</label>
          <input type="text" id='value' name="category" value={data.category} className='border rounded-full p-2' onChange={handleInput}/>
        </div>
        <div className='grid '>
          <label htmlFor="value" className='p-2'>Quantity:</label>
            <input type="text" id='value'  name="quantity" value={data.quantity} onChange={handleInput} className='border rounded-full p-2'/>
        </div>
        <button className='bg-black p-2 rounded-full text-white'>
             Create
       </button>
  </form>
    ):(
   <form action={borrowBook} className='grid gap-2'>
    <div className='grid '>
        <input type="text" id='value' name="barcode" value={barcode} className='border rounded-full p-2 hidden' onChange={(e) => console.log(e.target.value)} />
    </div>
    <div className='grid '>
      <label htmlFor="value" className='p-2'>Student Name:</label>
         <input type="text" id='value' name='student_name' value={data.student_name} className='border rounded-full p-2' onChange={handleInput} />
      </div>
      <div className='grid '>
        <label htmlFor="value" className='p-2'>Or Teacher Name:</label>
        <input type="text" id='value' name='teacher' value={data.teacher} className='border rounded-full p-2' onChange={handleInput} />
      </div>       
   <div className='grid '>
     <label htmlFor="value" className='p-2'>When returning it back:</label>
        <input type="text" id='value' name="due" value={data.due} className='border rounded-full p-2' onChange={handleInput}/>
   </div>
   <div className='grid '>
     <label htmlFor="value" className='p-2'>Class:</label>
     <input type="text" id='value' name="student_class" value={data.student_class} className='border rounded-full p-2' onChange={handleInput}/>
   </div>
   <div className='grid '>
     <label htmlFor="value" className='p-2'>Quantity:</label>
       <input type="text" id='value'  name="b_quantity" value={data.b_quantity} onChange={handleInput} className='border rounded-full p-2'/>
      </div>
        <button className='bg-black p-2 rounded-full text-white'>
                Create
            </button>
                <Sound url={'./beep.wav'} playStatus={'PLAYING'} />
              </form>
               )}
           </>      
              )}
              </>
              )}        
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}