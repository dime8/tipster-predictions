-- Verify tipsters:invite_user on pg

BEGIN;

SELECT has_function_privilege('tipsters.invite_user(uuid, uuid)', 'execute');

ROLLBACK;
