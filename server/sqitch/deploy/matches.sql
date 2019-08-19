-- Deploy tipsters:matches to pg
-- requires: appschema
-- requires: users
-- requires: teams

BEGIN;

CREATE TABLE tipsters.matches (
    ID        uuid        DEFAULT uuid_generate_v4(),
    type  TEXT        NOT NULL,
    league  TEXT        NOT NULL,
    userID  uuid ,  
    hostID  uuid ,      
    guestID  uuid ,       
    PRIMARY KEY (ID),
    FOREIGN KEY (userID) REFERENCES tipsters.users(ID) on delete cascade,
    FOREIGN KEY (hostID) REFERENCES tipsters.teams(ID) on delete cascade,
    FOREIGN KEY (guestID) REFERENCES tipsters.teams(ID) on delete cascade

);

-- XXX Add DDLs here.

COMMIT;
