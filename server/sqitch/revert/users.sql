-- Revert tipsters:users from pg

BEGIN;

DROP TABLE tipsters.users;
-- XXX Add DDLs here.

COMMIT;
