-- Verify tipsters:register_user on pg

BEGIN;

SELECT has_function_privilege('tipsters.register_user(text, text)', 'execute');

ROLLBACK;
