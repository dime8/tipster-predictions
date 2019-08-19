-- Revert tipsters:matches from pg

BEGIN;

DROP TABLE tipsters.matches CASCADE;
-- XXX Add DDLs here.

COMMIT;
