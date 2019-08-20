-- Revert tipsters:register_user from pg

BEGIN;

DROP FUNCTION tipsters.register_user( text, text);

COMMIT;
