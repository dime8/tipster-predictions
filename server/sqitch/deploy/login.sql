-- Deploy tipsters:login to pg
-- requires: users
-- requires: appschema

BEGIN;

CREATE OR REPLACE FUNCTION tipsters.login(_username text, _password text)
returns tipsters.jwt_token as $$

DECLARE userid uuid;
DECLARE username_count INTEGER :=0;
DECLARE password_count INTEGER :=0;
    BEGIN


            SELECT count(*) INTO username_count FROM tipsters.users WHERE tipsters.users.username = _username;
			SELECT count(*) INTO password_count FROM tipsters.users WHERE tipsters.users.password = _password;
			select u.id into userid
            from tipsters.users as u
            where u.username = login._username and u.password = login._password;

           IF(username_count<1)
				THEN RAISE EXCEPTION 'User not found!';
			END IF;

             IF(password_count<1)
				THEN RAISE EXCEPTION 'Password not valid!';
			END IF;

		 	IF(username_count >0 AND password_count>0)
             THEN
            RETURN (
            'person_role',
            extract(epoch from now() + interval '7 days'),
            userid,
            _username
            )::tipsters.jwt_token;
            ELSE
            RETURN null;
            END IF;
             

	END;
$$LANGUAGE plpgsql VOLATILE;

COMMIT;
