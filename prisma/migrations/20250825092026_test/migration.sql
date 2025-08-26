/*
  Warnings:

  - You are about to drop the `Rank` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Rank" DROP CONSTRAINT "Rank_groupId_fkey";

-- DropTable
DROP TABLE "public"."Rank";
