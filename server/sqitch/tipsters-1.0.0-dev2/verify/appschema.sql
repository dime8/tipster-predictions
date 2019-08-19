-- Verify tipsters:appschema on pg


BEGIN;
SELECT pg_catalog.has_schema_privilege('tipsters', 'usage');
-- XXX Add verifications here.

ROLLBACK;
