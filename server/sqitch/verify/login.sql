-- Verify tipsters:login on pg

BEGIN;

SELECT has_function_privilege('tipsters.login(text, text)', 'execute');

ROLLBACK;
