/*
  Warnings:

  - Added the required column `Source` to the `Hazard` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Source` to the `Incident` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Hazard" ADD COLUMN     "Source" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Incident" ADD COLUMN     "Source" TEXT NOT NULL;
