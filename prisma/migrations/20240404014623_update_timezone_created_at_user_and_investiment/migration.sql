-- AlterTable
ALTER TABLE "investiments" ALTER COLUMN "created_at" SET DEFAULT timezone('UTC'::text, now()) - interval '3 hours';

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT timezone('UTC'::text, now()) - interval '3 hours';
