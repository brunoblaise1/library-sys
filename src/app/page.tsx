/* eslint-disable */
import Table from "@/components/Table";
import NavBar from "../components/NavBar";
import VaulDrawer from "../components/ui/models";
export default function Home() {
  return (
//TODO: Add toaster, something to let people know the status of thier actions
    <>
    <NavBar/>
    <div className="p-4 m-2">
     <div >
    <h1 className="font-bold text-lg  text-left">Welcome back!</h1>
     <p className="text-slate-400">Here's a list you can sort and view any piece of information you need.</p>
     </div>
     <div className="grid gap-4 pt-5">
      <VaulDrawer title="Add a book" >
        <p className="text-gray-600 mb-2">
        To add a book you first nned to scan the book barcode or qrcode after that a form will appear to enter details
        </p>
    </VaulDrawer>   
   <VaulDrawer title="Borrow a book">
    <p className="text-gray-600 mb-2">
     Scan the book barcode to mark it as borrowed.
              </p>
    </VaulDrawer>
    <VaulDrawer title="Return a book" >
      <p className="text-gray-600 mb-2">
              Same procedure but hear the form is quite different from the add book form 
            </p>
    </VaulDrawer>
    <VaulDrawer title="Generate code" >
        <p className="text-gray-600 mb-2">
                New book or a book without code are added here generate a unique code here.
              </p>
     </VaulDrawer>
     </div>
     <div className="pt-4 pl-1">
      <Table/>
    </div>
  </div>
  </>
  );
}
