-- Verify tipsters:accept_invite on pg

BEGIN;

SELECT has_function_privilege('tipsters.accept_invite(uuid, uuid)', 'execute');

ROLLBACK;
