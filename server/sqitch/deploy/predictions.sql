-- Deploy tipsters:predictions to pg
-- requires: appschema
-- requires: users
-- requires: matches

BEGIN;

CREATE TABLE tipsters.predictions (
    ID        uuid        DEFAULT uuid_generate_v4(),
    matchID  uuid ,      
    userID  uuid   ,     
    score   TEXT NOT NULL,
    PRIMARY KEY (ID),
    FOREIGN KEY (matchID) REFERENCES tipsters.matches(ID) on delete cascade,
    FOREIGN KEY (userID) REFERENCES tipsters.users(ID) on delete cascade
);
-- XXX Add DDLs here.

COMMIT;
