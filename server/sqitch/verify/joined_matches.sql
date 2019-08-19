-- Verify tipsters:joined_matches on pg

BEGIN;

SELECT id, matchid, userid, joined_at, left_at FROM tipsters.joined_matches WHERE false;

ROLLBACK;
