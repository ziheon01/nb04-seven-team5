-- AlterTable
ALTER TABLE "public"."Group" ADD COLUMN     "likeCount" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "public"."ParticipantPhoto" ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "participantphoto_id_seq";
