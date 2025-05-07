/*
  Warnings:

  - You are about to drop the `IncidentLog` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "IncidentLog";

-- CreateTable
CREATE TABLE "Incident" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "cause" TEXT NOT NULL,
    "suburb" TEXT NOT NULL,
    "street" TEXT,
    "buildingNumber" TEXT,
    "recordedAt" TIMESTAMP(3) NOT NULL,
    "photoUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Incident_pkey" PRIMARY KEY ("id")
);
