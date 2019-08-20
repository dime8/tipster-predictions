-- Deploy tipsters:register_user to pg
-- requires: users
-- requires: appschema

BEGIN;

CREATE OR REPLACE FUNCTION tipsters.register_user(_username text, _password text)
RETURNS uuid AS $$ 

DECLARE userid uuid ;
DECLARE username_count INTEGER :=0;
    BEGIN
            SELECT count(*) INTO username_count FROM tipsters.users WHERE tipsters.users.username = _username;

            IF(username_count>0)
                            THEN RAISE EXCEPTION 'The username already exists. Please use a different username.';
                        END IF;


		 	IF(username_count <1) THEN
             INSERT INTO tipsters.users(username, password) VALUES (_username, _password) RETURNING id INTO userid;
             END IF;

             RETURN userid;

	END;
$$LANGUAGE plpgsql VOLATILE;

COMMIT;
