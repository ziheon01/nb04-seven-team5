-- CreateTable
CREATE TABLE "public"."Timer" (
    "id" SERIAL NOT NULL,
    "participantId" INTEGER NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "isRunning" BOOLEAN NOT NULL DEFAULT true,
    "exerciseRecordId" INTEGER NOT NULL,

    CONSTRAINT "Timer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Timer_exerciseRecordId_key" ON "public"."Timer"("exerciseRecordId");

-- AddForeignKey
ALTER TABLE "public"."Timer" ADD CONSTRAINT "Timer_participantId_fkey" FOREIGN KEY ("participantId") REFERENCES "public"."Participant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Timer" ADD CONSTRAINT "Timer_exerciseRecordId_fkey" FOREIGN KEY ("exerciseRecordId") REFERENCES "public"."ExerciseRecord"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
