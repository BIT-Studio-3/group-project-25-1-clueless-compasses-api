/*
  Warnings:

  - You are about to drop the column `buildingNumber` on the `Incident` table. All the data in the column will be lost.
  - You are about to drop the column `street` on the `Incident` table. All the data in the column will be lost.
  - You are about to drop the column `suburb` on the `Incident` table. All the data in the column will be lost.
  - Added the required column `address` to the `Incident` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Incident" DROP COLUMN "buildingNumber",
DROP COLUMN "street",
DROP COLUMN "suburb",
ADD COLUMN     "address" TEXT NOT NULL;
