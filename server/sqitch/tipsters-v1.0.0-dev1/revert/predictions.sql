-- Revert tipsters:predictions from pg

BEGIN;

DROP TABLE tipsters.predictions;
-- XXX Add DDLs here.

COMMIT;
