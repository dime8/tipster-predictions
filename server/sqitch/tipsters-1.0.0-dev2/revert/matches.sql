-- Revert tipsters:matches from pg

BEGIN;

DROP TABLE tipsters.matches;
-- XXX Add DDLs here.

COMMIT;
