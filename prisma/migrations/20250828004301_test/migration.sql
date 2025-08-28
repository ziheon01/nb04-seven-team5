/*
  Warnings:

  - You are about to drop the `Participant` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."ExerciseRecord" DROP CONSTRAINT "ExerciseRecord_participantId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Like" DROP CONSTRAINT "Like_participantId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Participant" DROP CONSTRAINT "Participant_groupId_fkey";

-- DropTable
DROP TABLE "public"."Participant";

-- CreateTable
CREATE TABLE "public"."Participants" (
    "id" SERIAL NOT NULL,
    "groupId" INTEGER NOT NULL,
    "nickname" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "recordCount" INTEGER NOT NULL DEFAULT 0,
    "recordTime" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Participants_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Participants_nickname_key" ON "public"."Participants"("nickname");

-- CreateIndex
CREATE UNIQUE INDEX "Participants_nickname_password_key" ON "public"."Participants"("nickname", "password");

-- AddForeignKey
ALTER TABLE "public"."Participants" ADD CONSTRAINT "Participants_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "public"."Group"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Like" ADD CONSTRAINT "Like_participantId_fkey" FOREIGN KEY ("participantId") REFERENCES "public"."Participants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ExerciseRecord" ADD CONSTRAINT "ExerciseRecord_participantId_fkey" FOREIGN KEY ("participantId") REFERENCES "public"."Participants"("id") ON DELETE CASCADE ON UPDATE CASCADE;
