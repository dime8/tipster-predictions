-- Deploy tipsters:invites to pg
-- requires: appschema
-- requires: users
-- requires: matches

BEGIN;

-- XXX Add DDLs here.

CREATE TABLE tipsters.invites (
    id uuid DEFAULT uuid_generate_v4 (),
    userid uuid,
    matchid uuid,
    accepted BOOLEAN,
    expiresIn TIMESTAMP DEFAULT NOW() + INTERVAL '24 hours',
    PRIMARY KEY (id),
    FOREIGN KEY (userid) REFERENCES tipsters.users(id) on delete cascade,
    FOREIGN KEY (matchid) REFERENCES  tipsters.matches(id) on delete cascade
);

COMMIT;
