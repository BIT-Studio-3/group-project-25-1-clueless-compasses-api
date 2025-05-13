-- CreateTable
CREATE TABLE "IncidentLog" (
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

    CONSTRAINT "IncidentLog_pkey" PRIMARY KEY ("id")
);
