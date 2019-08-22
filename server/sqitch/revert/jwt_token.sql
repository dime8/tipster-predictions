-- Revert tipsters:jwt_token from pg

BEGIN;

DROP TYPE tipsters.jwtToken;

COMMIT;
