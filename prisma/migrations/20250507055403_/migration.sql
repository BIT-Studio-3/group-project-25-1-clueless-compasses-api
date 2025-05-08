-- CreateTable
CREATE TABLE "Hazard" (
    "id" TEXT NOT NULL,
    "agency" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "severity" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "contactInfo" TEXT NOT NULL,
    "RelevantDetails" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Hazard_pkey" PRIMARY KEY ("id")
);
