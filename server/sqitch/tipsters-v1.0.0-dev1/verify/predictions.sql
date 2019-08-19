-- Verify tipsters:predictions on pg

BEGIN;

SELECT matchID, userID, score
  FROM tipsters.predictions
 WHERE FALSE;
-- XXX Add verifications here.

ROLLBACK;
