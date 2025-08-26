/*
  Warnings:

  - A unique constraint covering the columns `[groupId,participantId]` on the table `Like` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `groupId` to the `Like` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "public"."Like_participantId_key";

-- AlterTable
ALTER TABLE "public"."ExerciseRecord" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "public"."Like" ADD COLUMN     "groupId" INTEGER NOT NULL;

-- AlterTable
CREATE SEQUENCE "public".participantphoto_id_seq;
ALTER TABLE "public"."ParticipantPhoto" ALTER COLUMN "id" SET DEFAULT nextval('"public".participantphoto_id_seq');
ALTER SEQUENCE "public".participantphoto_id_seq OWNED BY "public"."ParticipantPhoto"."id";

-- CreateIndex
CREATE UNIQUE INDEX "Like_groupId_participantId_key" ON "public"."Like"("groupId", "participantId");

-- AddForeignKey
ALTER TABLE "public"."Like" ADD CONSTRAINT "Like_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "public"."Group"("id") ON DELETE CASCADE ON UPDATE CASCADE;
