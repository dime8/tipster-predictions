-- Revert tipsters:appschema from pg


BEGIN;
DROP SCHEMA tipsters;
-- XXX Add DDLs here.

COMMIT;
