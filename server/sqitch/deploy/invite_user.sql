-- Deploy tipsters:invite_user to pg
-- requires: invites
-- requires: appschema

BEGIN;

CREATE OR REPLACE FUNCTION tipsters.invite_user(user_id uuid, match_id uuid)
RETURNS uuid AS $$ 
DECLARE v_match_count integer :=0;
DECLARE v_user_count integer :=0;
DECLARE invite_id uuid;

		BEGIN
			SELECT count(*) INTO v_match_count FROM tipsters.matches WHERE tipsters.matches.id = match_id;
			SELECT count(*) INTO v_user_count FROM tipsters.users WHERE tipsters.users.id = user_id;
			
			IF(v_match_count<1)
				THEN RAISE EXCEPTION 'Match does not exist!!';
			END IF;
			
			IF(v_user_count<1)
				THEN RAISE EXCEPTION 'User does not exist!';
			END IF;
			
			IF(v_match_count>0 AND v_user_count>0) THEN
			INSERT INTO tipsters.invites(userid, matchid) VALUES (user_id, match_id) RETURNING id INTO invite_id;
			END IF;
		RETURN invite_id;
		END;
$$LANGUAGE plpgsql VOLATILE;

COMMIT;
