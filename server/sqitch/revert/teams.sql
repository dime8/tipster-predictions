-- Revert tipsters:teams from pg

BEGIN;

DROP TABLE tipsters.teams;
-- XXX Add DDLs here.

COMMIT;
