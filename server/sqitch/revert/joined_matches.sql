-- Revert tipsters:joined_matches from pg

BEGIN;

DROP TABLE tipsters.joined_matches CASCADE;

COMMIT;
