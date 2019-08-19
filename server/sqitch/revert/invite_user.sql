-- Revert tipsters:invite_user from pg

BEGIN;

DROP FUNCTION tipsters.invite_user(uuid, uuid);

COMMIT;
