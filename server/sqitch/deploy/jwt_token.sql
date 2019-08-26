-- Deploy tipsters:jwt_token to pg
-- requires: appschema

BEGIN;

create type tipsters.jwt_token as (
  role text,
  exp integer,
  userid uuid,
  username varchar
);

COMMIT;
