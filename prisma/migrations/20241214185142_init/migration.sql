/*
  Warnings:

  - The `quantity` column on the `Borrowed` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Borrowed" DROP COLUMN "quantity",
ADD COLUMN     "quantity" INTEGER;
