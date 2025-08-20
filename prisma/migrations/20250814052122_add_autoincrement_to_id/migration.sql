-- AlterTable
CREATE SEQUENCE "public".group_id_seq;
ALTER TABLE "public"."Group" ALTER COLUMN "id" SET DEFAULT nextval('"public".group_id_seq');
ALTER SEQUENCE "public".group_id_seq OWNED BY "public"."Group"."id";
