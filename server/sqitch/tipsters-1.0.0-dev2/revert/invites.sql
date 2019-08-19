-- Revert tipsters:invites from pg

BEGIN;

-- XXX Add DDLs here.
DROP TABLE tipsters.invites;

COMMIT;
