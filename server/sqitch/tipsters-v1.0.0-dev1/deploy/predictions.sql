-- Deploy tipsters:predictions to pg
-- requires: appschema
-- requires: users
-- requires: matches

BEGIN;

CREATE TABLE tipsters.predictions (
    ID        uuid        DEFAULT uuid_generate_v4(),
    matchID  uuid        NOT NULL REFERENCES tipsters.matches(ID),
    userID  uuid        NOT NULL REFERENCES tipsters.users(ID),
    score   TEXT NOT NULL,
    PRIMARY KEY (ID)
);
-- XXX Add DDLs here.

COMMIT;
