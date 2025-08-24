-- AlterTable
CREATE SEQUENCE "public".participantphoto_id_seq;
ALTER TABLE "public"."ParticipantPhoto" ALTER COLUMN "id" SET DEFAULT nextval('"public".participantphoto_id_seq');
ALTER SEQUENCE "public".participantphoto_id_seq OWNED BY "public"."ParticipantPhoto"."id";
