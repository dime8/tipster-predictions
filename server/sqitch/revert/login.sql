-- Revert tipsters:login from pg

BEGIN;

DROP FUNCTION tipsters.login( text, text);

COMMIT;
