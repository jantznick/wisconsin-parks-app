-- CreateTable
CREATE TABLE "Park" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "activities" INTEGER[],
    "facilities" TEXT[],
    "rules" TEXT[],
    "isDogFriendly" BOOLEAN,
    "isAccessible" BOOLEAN,
    "image_from_listing" TEXT,
    "downloaded_image_path" TEXT,
    "info_url" TEXT,
    "recreation_url" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Park_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Coordinate" (
    "id" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,
    "parkId" TEXT NOT NULL,

    CONSTRAINT "Coordinate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Hours" (
    "id" TEXT NOT NULL,
    "open" TEXT,
    "close" TEXT,
    "text_description" TEXT,
    "parkId" TEXT NOT NULL,

    CONSTRAINT "Hours_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contact" (
    "id" TEXT NOT NULL,
    "phone" TEXT,
    "email" TEXT,
    "website" TEXT,
    "parkId" TEXT NOT NULL,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EntranceFee" (
    "id" TEXT NOT NULL,
    "daily" DOUBLE PRECISION,
    "annual" DOUBLE PRECISION,
    "text_description" TEXT,
    "parkId" TEXT NOT NULL,

    CONSTRAINT "EntranceFee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Parking" (
    "id" TEXT NOT NULL,
    "totalSpaces" INTEGER,
    "isFree" BOOLEAN,
    "parkId" TEXT NOT NULL,

    CONSTRAINT "Parking_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SeasonalInfo" (
    "id" TEXT NOT NULL,
    "bestTimeToVisit" TEXT,
    "seasonalClosures" TEXT[],
    "parkId" TEXT NOT NULL,

    CONSTRAINT "SeasonalInfo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Coordinate_parkId_key" ON "Coordinate"("parkId");

-- CreateIndex
CREATE UNIQUE INDEX "Hours_parkId_key" ON "Hours"("parkId");

-- CreateIndex
CREATE UNIQUE INDEX "Contact_parkId_key" ON "Contact"("parkId");

-- CreateIndex
CREATE UNIQUE INDEX "EntranceFee_parkId_key" ON "EntranceFee"("parkId");

-- CreateIndex
CREATE UNIQUE INDEX "Parking_parkId_key" ON "Parking"("parkId");

-- CreateIndex
CREATE UNIQUE INDEX "SeasonalInfo_parkId_key" ON "SeasonalInfo"("parkId");

-- AddForeignKey
ALTER TABLE "Coordinate" ADD CONSTRAINT "Coordinate_parkId_fkey" FOREIGN KEY ("parkId") REFERENCES "Park"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Hours" ADD CONSTRAINT "Hours_parkId_fkey" FOREIGN KEY ("parkId") REFERENCES "Park"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contact" ADD CONSTRAINT "Contact_parkId_fkey" FOREIGN KEY ("parkId") REFERENCES "Park"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EntranceFee" ADD CONSTRAINT "EntranceFee_parkId_fkey" FOREIGN KEY ("parkId") REFERENCES "Park"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Parking" ADD CONSTRAINT "Parking_parkId_fkey" FOREIGN KEY ("parkId") REFERENCES "Park"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SeasonalInfo" ADD CONSTRAINT "SeasonalInfo_parkId_fkey" FOREIGN KEY ("parkId") REFERENCES "Park"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
