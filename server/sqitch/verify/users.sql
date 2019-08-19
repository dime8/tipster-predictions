-- Verify tipsters:users on pg

BEGIN;

SELECT username, password
  FROM tipsters.users
 WHERE FALSE;
-- XXX Add verifications here.

ROLLBACK;
