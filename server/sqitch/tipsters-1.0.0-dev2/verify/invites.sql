-- Verify tipsters:invites on pg

BEGIN;

-- XXX Add verifications here.
SELECT id,
      userid,
    matchid,
    accepted,
    expiresIn
  FROM tipsters.invites
 WHERE FALSE;

ROLLBACK;
