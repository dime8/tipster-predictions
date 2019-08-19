-- Verify tipsters:teams on pg

BEGIN;

SELECT name, type, league
  FROM tipsters.teams
 WHERE FALSE;
-- XXX Add verifications here.

ROLLBACK;
