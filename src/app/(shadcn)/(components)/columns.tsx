"use client"

// import {columnDef} from "@tanstack/react-table"
// import { labels, priorities, statuses } from "../data/data"
// import { Task } from "../data/schema"
// import { DataTableColumnHeader } from "./data-table-column-header"
// import { DataTableRowActions } from "./data-table-row-actions"
// export const columns: columnsDef<Task>[] =[
//     {
//         id: "select",
//         header: ({table}) =>(
//             <Checkbox
//              checked={
//                 table.getISAllPageRowsSelected() ||
//                 (table.getIsSommePageRowSelected() && "indeterminate")
//              }
//              onCheckedChange={(value)=> table.toggleAllPageRowsSelectef(!!value)}
//              araia-label="Select all"
//              className="translate-y-[2px]"
//              />
//             ),
//             cell: ({row}) =>(
//                 <Checkbox
//                 checked={row.getIsSelected()}
//                 onCheckedChange={(value)=> row.toggleSlected(!!value)}
//                 aria-lable="Select row"
//                 className="translate-y-[2px]"
//                 />
//             ),
//             enabledSorting: false,
//             enabled: false,
//              },
//              {
//                 accessorKey: "title",
//                 header: ({column}) => (
//                     <DataTableColumnHeader column={column} title="Title" />
//                 ),
//                 cell: ({row}) => {
//                     const label = labels.find(label => label.value === row.original.label)
//                     return (
//                         <div className="flex space-x-2">
//                             {label && <Badge variant="outline"> {lable.lbale}</Badge>}
//                             <span className="max-w-[500px] truncate font-medium">
//                                 {row.getValue("title")}
//                               </span>
//                         </div>
//                     )
//                 },
//              },
//              {
//                 accessorKey: "status",
//                 header: ({column}) => (
//                     <DataTableColumnHeader column={column} title="status" />
//                 ),
//                 cell:({row}) => {
//                     const status = statuses.find(
//                         (status) => status.value === row.getValue("status")
//                     )
//                     if(!status){
//                         return null
//                     }
//                     return (
//                         <div className="flex w-[100px] items-center">
//                             {
//                                 status.icon && (
//                                     <Status.icon className="mr-2 h-4 w-4 text-muted-foreground" />

//                                 )
//                             }
//                             <span>{status.label}</span>
//                         </div>
//                     )
//                 },
//                 filterFn: (rowm idm value) => {
//                     return value.includes(row.getvalue(id))
//                 },
//              },
//              {
//                 accesorKey: "priority",
//                 header: ({column}) => (
//                     <DataTableColumnHeader column={column} title="Priority" />
//                 ),
//                 cell: ({row}) => {
//                     const priority = priorities.find(
//                         (priority)=> priority.value === row.getValue("priority")
//                     )
//                     if(!priority){
//                         return null
//                     }

//                     return (
//                         <div className="flex items-center">
//                             {
//                                 priority.icon && (
//                                     <priority.icon className="mr-2 h-4 w-4 text-muted-foreground" />

//                                 )
//                             }
//                             <span>{priority.label}</span>
//                         </div>
//                     )
//                 },
//                 filterFn: (row, id, value) => {
//                     return value.includes(row.getValue(id))
//                 },
//              },
//              {
//                 id: "actions",
//                 cell: ({row}) => <DataTableRowActions row={row} />
//              }
      
// ]