/*
  Warnings:

  - The values [running,cycling,swimming] on the enum `ExerciseType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "public"."ExerciseType_new" AS ENUM ('run', 'swim', 'bike');
ALTER TABLE "public"."ExerciseRecord" ALTER COLUMN "exerciseType" DROP DEFAULT;
ALTER TABLE "public"."ExerciseRecord" ALTER COLUMN "exerciseType" TYPE "public"."ExerciseType_new" USING ("exerciseType"::text::"public"."ExerciseType_new");
ALTER TYPE "public"."ExerciseType" RENAME TO "ExerciseType_old";
ALTER TYPE "public"."ExerciseType_new" RENAME TO "ExerciseType";
DROP TYPE "public"."ExerciseType_old";
ALTER TABLE "public"."ExerciseRecord" ALTER COLUMN "exerciseType" SET DEFAULT 'run';
COMMIT;

-- AlterTable
ALTER TABLE "public"."ExerciseRecord" ALTER COLUMN "exerciseType" SET DEFAULT 'run';
