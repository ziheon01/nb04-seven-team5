-- CreateTable
CREATE TABLE "public"."Rank" (
    "id" SERIAL NOT NULL,
    "groupId" INTEGER NOT NULL,

    CONSTRAINT "Rank_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Rank" ADD CONSTRAINT "Rank_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "public"."Group"("id") ON DELETE CASCADE ON UPDATE CASCADE;
