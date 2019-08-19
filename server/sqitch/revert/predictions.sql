-- Revert tipsters:predictions from pg

BEGIN;

DROP TABLE tipsters.predictions CASCADE;
-- XXX Add DDLs here.

COMMIT;
