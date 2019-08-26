-- Revert tipsters:jwt_token from pg

BEGIN;

drop type tipsters.jwt_token;

COMMIT;
