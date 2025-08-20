/*
  Warnings:

  - The primary key for the `ParticipantPhoto` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Id` on the `ParticipantPhoto` table. All the data in the column will be lost.
  - Added the required column `groupId` to the `ExerciseRecord` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
CREATE SEQUENCE "public".exerciserecord_id_seq;
ALTER TABLE "public"."ExerciseRecord" ADD COLUMN     "groupId" INTEGER NOT NULL,
ALTER COLUMN "id" SET DEFAULT nextval('"public".exerciserecord_id_seq');
ALTER SEQUENCE "public".exerciserecord_id_seq OWNED BY "public"."ExerciseRecord"."id";

-- AlterTable
CREATE SEQUENCE "public".groupbadge_id_seq;
ALTER TABLE "public"."GroupBadge" ALTER COLUMN "id" SET DEFAULT nextval('"public".groupbadge_id_seq');
ALTER SEQUENCE "public".groupbadge_id_seq OWNED BY "public"."GroupBadge"."id";

-- AlterTable
CREATE SEQUENCE "public".groupphoto_id_seq;
ALTER TABLE "public"."GroupPhoto" ALTER COLUMN "id" SET DEFAULT nextval('"public".groupphoto_id_seq');
ALTER SEQUENCE "public".groupphoto_id_seq OWNED BY "public"."GroupPhoto"."id";

-- AlterTable
CREATE SEQUENCE "public".like_id_seq;
ALTER TABLE "public"."Like" ALTER COLUMN "id" SET DEFAULT nextval('"public".like_id_seq');
ALTER SEQUENCE "public".like_id_seq OWNED BY "public"."Like"."id";

-- AlterTable
CREATE SEQUENCE "public".participant_id_seq;
ALTER TABLE "public"."Participant" ALTER COLUMN "id" SET DEFAULT nextval('"public".participant_id_seq');
ALTER SEQUENCE "public".participant_id_seq OWNED BY "public"."Participant"."id";

-- AlterTable
ALTER TABLE "public"."ParticipantPhoto" DROP CONSTRAINT "ParticipantPhoto_pkey",
DROP COLUMN "Id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "ParticipantPhoto_pkey" PRIMARY KEY ("id");

-- AlterTable
CREATE SEQUENCE "public".tag_id_seq;
ALTER TABLE "public"."Tag" ALTER COLUMN "id" SET DEFAULT nextval('"public".tag_id_seq');
ALTER SEQUENCE "public".tag_id_seq OWNED BY "public"."Tag"."id";
