-- Deploy tipsters:joined_matches to pg
-- requires: users
-- requires: matches
-- requires: appschema

BEGIN;

CREATE TABLE tipsters.joined_matches (
    id uuid DEFAULT uuid_generate_v4 () NOT NULL,
    matchid uuid NOT NULL,
    userid uuid NOT NULL,
    joined_at TIMESTAMP,
    left_at TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (userid) REFERENCES tipsters.users(id) on delete cascade,
    FOREIGN KEY (matchid) REFERENCES tipsters.matches(id) on delete cascade
);


COMMIT;
