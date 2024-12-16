-- AlterTable
ALTER TABLE "Borrowed" ADD COLUMN     "quantity" TEXT,
ADD COLUMN     "student_class" TEXT,
ADD COLUMN     "teacher" TEXT,
ALTER COLUMN "student_name" DROP NOT NULL;
