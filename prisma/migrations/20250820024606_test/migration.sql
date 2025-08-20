-- CreateEnum
CREATE TYPE "public"."ExerciseType" AS ENUM ('running', 'cycling', 'swimming');

-- CreateTable
CREATE TABLE "public"."Group" (
    "id" SERIAL NOT NULL,
    "groupName" TEXT NOT NULL,
    "description" TEXT,
    "photoUrl" TEXT,
    "goalRep" INTEGER NOT NULL DEFAULT 0,
    "discordWebhookUrl" TEXT NOT NULL,
    "discordInviteUrl" TEXT NOT NULL,
    "ownerNickname" TEXT NOT NULL,
    "ownerPassword" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Group_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Participant" (
    "id" SERIAL NOT NULL,
    "groupId" INTEGER NOT NULL,
    "nickname" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "recordCount" INTEGER NOT NULL DEFAULT 0,
    "recordTime" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Participant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Like" (
    "id" SERIAL NOT NULL,
    "participantId" INTEGER NOT NULL,

    CONSTRAINT "Like_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ExerciseRecord" (
    "id" SERIAL NOT NULL,
    "groupId" INTEGER NOT NULL,
    "participantId" INTEGER NOT NULL,
    "exerciseType" "public"."ExerciseType" NOT NULL DEFAULT 'running',
    "description" TEXT NOT NULL,
    "time" INTEGER NOT NULL DEFAULT 0,
    "distance" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "ExerciseRecord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ParticipantPhoto" (
    "id" SERIAL NOT NULL,
    "exerciseRecordId" INTEGER NOT NULL,
    "photoUrl" TEXT NOT NULL,

    CONSTRAINT "ParticipantPhoto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."GroupPhoto" (
    "id" SERIAL NOT NULL,
    "photoUrl" TEXT NOT NULL,
    "groupId" INTEGER NOT NULL,

    CONSTRAINT "GroupPhoto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."GroupBadge" (
    "id" SERIAL NOT NULL,
    "groupId" INTEGER NOT NULL,
    "participantsOver10" BOOLEAN NOT NULL DEFAULT false,
    "recordsOver100" BOOLEAN NOT NULL DEFAULT false,
    "recommandationsOver100" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "GroupBadge_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Tag" (
    "id" SERIAL NOT NULL,
    "tagName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "groupId" INTEGER NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Group_groupName_key" ON "public"."Group"("groupName");

-- CreateIndex
CREATE UNIQUE INDEX "Group_discordWebhookUrl_key" ON "public"."Group"("discordWebhookUrl");

-- CreateIndex
CREATE UNIQUE INDEX "Group_discordInviteUrl_key" ON "public"."Group"("discordInviteUrl");

-- CreateIndex
CREATE UNIQUE INDEX "Group_ownerNickname_key" ON "public"."Group"("ownerNickname");

-- CreateIndex
CREATE UNIQUE INDEX "Participant_nickname_key" ON "public"."Participant"("nickname");

-- CreateIndex
CREATE UNIQUE INDEX "Participant_nickname_password_key" ON "public"."Participant"("nickname", "password");

-- CreateIndex
CREATE UNIQUE INDEX "Like_participantId_key" ON "public"."Like"("participantId");

-- CreateIndex
CREATE UNIQUE INDEX "ParticipantPhoto_photoUrl_key" ON "public"."ParticipantPhoto"("photoUrl");

-- CreateIndex
CREATE UNIQUE INDEX "GroupPhoto_groupId_key" ON "public"."GroupPhoto"("groupId");

-- CreateIndex
CREATE UNIQUE INDEX "GroupBadge_groupId_key" ON "public"."GroupBadge"("groupId");

-- AddForeignKey
ALTER TABLE "public"."Participant" ADD CONSTRAINT "Participant_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "public"."Group"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Like" ADD CONSTRAINT "Like_participantId_fkey" FOREIGN KEY ("participantId") REFERENCES "public"."Participant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ExerciseRecord" ADD CONSTRAINT "ExerciseRecord_participantId_fkey" FOREIGN KEY ("participantId") REFERENCES "public"."Participant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ParticipantPhoto" ADD CONSTRAINT "ParticipantPhoto_exerciseRecordId_fkey" FOREIGN KEY ("exerciseRecordId") REFERENCES "public"."ExerciseRecord"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."GroupPhoto" ADD CONSTRAINT "GroupPhoto_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "public"."Group"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."GroupBadge" ADD CONSTRAINT "GroupBadge_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "public"."Group"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Tag" ADD CONSTRAINT "Tag_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "public"."Group"("id") ON DELETE CASCADE ON UPDATE CASCADE;
