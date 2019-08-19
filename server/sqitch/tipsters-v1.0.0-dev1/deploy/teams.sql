-- Deploy tipsters:teams to pg
-- requires: appschema

BEGIN;

CREATE TABLE tipsters.teams (
    ID        uuid        DEFAULT uuid_generate_v4(),
    name  TEXT        NOT NULL,
    type  TEXT        NOT NULL,
    league TEXT       NOT NULL,
    PRIMARY KEY (ID)
);

-- XXX Add DDLs here.

COMMIT;
