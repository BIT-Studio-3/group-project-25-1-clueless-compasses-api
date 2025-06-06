/*
  Warnings:

  - You are about to drop the column `RelevantDetails` on the `Hazard` table. All the data in the column will be lost.
  - You are about to drop the column `Source` on the `Hazard` table. All the data in the column will be lost.
  - You are about to drop the column `Source` on the `Incident` table. All the data in the column will be lost.
  - Added the required column `relevantDetails` to the `Hazard` table without a default value. This is not possible if the table is not empty.
  - Added the required column `source` to the `Hazard` table without a default value. This is not possible if the table is not empty.
  - Added the required column `source` to the `Incident` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Hazard" DROP COLUMN "RelevantDetails",
DROP COLUMN "Source",
ADD COLUMN     "relevantDetails" TEXT NOT NULL,
ADD COLUMN     "source" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Incident" DROP COLUMN "Source",
ADD COLUMN     "source" TEXT NOT NULL,
ALTER COLUMN "address" DROP NOT NULL;
