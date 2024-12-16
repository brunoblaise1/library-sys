/* eslint-disable */
import prisma from "@/app/utils/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest){
 const body = await req.json()
 const response = await prisma.book.create(
    {
        data:{
            title: body.title,
            barcode: body.barcode,
            quantity: body.quantity,
            section: body.section,
            category: body.category
        }
    }
 )
 return NextResponse.json({body, response})
}

export async function GET() {
    const books = await prisma.book.findMany();
     return NextResponse.json({
        books
     })
}

