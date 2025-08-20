/*
  Warnings:

  - You are about to drop the column `discordWebHookURl` on the `Group` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[discordWebhookUrl]` on the table `Group` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `discordWebhookUrl` to the `Group` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "public"."Group_discordWebHookURl_key";

-- AlterTable
ALTER TABLE "public"."Group" DROP COLUMN "discordWebHookURl",
ADD COLUMN     "discordWebhookUrl" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Group_discordWebhookUrl_key" ON "public"."Group"("discordWebhookUrl");
