"use client"
import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

// import { DataTablePagination } from "./data-table-pagination"
// import { DataTableToolbar } from "./data-table-toolbar"


interface DataTableProps<TData, TValue>{
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}

// export function DataTable<TData, TValue>({
//     columns,
//     data
// }: DataTableProps<TData, TValue>){
//     const [rowSelection, setRowSelection] = React.useState({})
//     const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
//     // const [columnFilters, setColumnFilters] = React.useState<columnFiltersState>(
//     //     []
//     // )
//     const [sorting, setSorting] = React.useState<SortingState>([])

//     const table = useReactTable({
//         data,
//         columns,
//         state: {
//             sorting,
//             columnVisibility,
//             rowelection,
//             columnFilters,
//         },
//         enableRowSelection: true,
//         onRowSelectionChange: setRowSelection,
//         onSortingChange: setSorting,onColumnFiltersChange: setColumnFilters,
//         onColumnVisibityChange: setColumnVisibility,
//         getCoreRowModel: getCoreRowMOdel(),
//         getFilterRowModel: getFilteredRowModel(),
//         getPaginationRowModel: getPaginationRowModel(),
 
//   })
// }

