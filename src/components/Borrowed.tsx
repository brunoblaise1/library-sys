/* eslint-disable */
import prisma from '@/app/utils/prisma'
import React from 'react'
import DataB from './DataB'
async function Borrowed() {
  const borrowed = await prisma.borrowed.findMany(
    {
        take: 10,
        include: {
            book: true
        }
    }
  )
  return (
    <div>
      <DataB borrowed={borrowed} />
    </div>
  )
}
export default Borrowed
