-- Revert tipsters:accept_invite from pg

BEGIN;

DROP FUNCTION tipsters.accept_invite( uuid, uuid);

COMMIT;
