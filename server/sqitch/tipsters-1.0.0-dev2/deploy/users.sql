-- Deploy tipsters:users to pg
-- requires: appschema

BEGIN;

SET client_min_messages = 'warning';

CREATE TABLE tipsters.users (
    ID        uuid        DEFAULT uuid_generate_v4(),
    username  TEXT        NOT NULL,
    password  TEXT        NOT NULL,
    PRIMARY KEY (ID)
);

-- XXX Add DDLs here.

COMMIT;
