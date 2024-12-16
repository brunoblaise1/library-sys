/*
  Warnings:

  - A unique constraint covering the columns `[student_name]` on the table `Borrowed` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[teacher]` on the table `Borrowed` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Borrowed_student_name_key" ON "Borrowed"("student_name");

-- CreateIndex
CREATE UNIQUE INDEX "Borrowed_teacher_key" ON "Borrowed"("teacher");
