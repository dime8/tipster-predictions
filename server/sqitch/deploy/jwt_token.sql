-- Deploy tipsters:jwt_token to pg
-- requires: appschema

BEGIN;


CREATE TYPE tipsters.jwtToken AS (
	exp integer,
	name character varying,
	user_id uuid
);


COMMIT;


CREATE OR REPLACE FUNCTION tipsters.login(_username text, _password text)
RETURNS tipsters.jwtToken AS $$ 
DECLARE userid uuid ;
DECLARE username_count INTEGER :=0;
DECLARE password_count INTEGER :=0;
    BEGIN
            SELECT count(*) INTO username_count FROM tipsters.users WHERE tipsters.users.username = _username;
			SELECT count(*) INTO password_count FROM tipsters.users WHERE tipsters.users.password = _password;
			

           IF(username_count<1)
				THEN RAISE EXCEPTION 'User not found!';
			END IF;

             IF(password_count<1)
				THEN RAISE EXCEPTION 'Password not valid!';
			END IF;

		 	IF(username_count >0 AND password_count>0)
             THEN SELECT INTO userid tipsters.users.id FROM tipsters.users  WHERE tipsters.users.username = _username AND tipsters.users.password= _password;
                 RETURN (
                extract(epoch from now() + interval '7 days'),
                _username,
                userid
                )::jwtToken;
            ELSE
                RETURN null;

            END IF;


	END;
$$LANGUAGE plpgsql VOLATILE;