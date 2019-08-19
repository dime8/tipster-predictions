-- Deploy tipsters:accept_invite to pg
-- requires: invites
-- requires: appschema

BEGIN;

CREATE OR REPLACE FUNCTION tipsters.accept_invite(invite_id uuid, currentUserId uuid)
RETURNS uuid AS $$ 

 
DECLARE v_invite_count integer :=0;
DECLARE matchid uuid;
DECLARE userid uuid;
DECLARE v_user_count integer :=0;
DECLARE idInvite uuid ;
DECLARE v_accepted_count integer :=0;
DECLARE acceptedInvite boolean :=true;
DECLARE expiresIn TIMESTAMP;
DECLARE currentTime TIMESTAMP := now()::timestamp;
    BEGIN
            SELECT count(*) INTO v_invite_count FROM tipsters.invites WHERE tipsters.invites.id = invite_id;
			SELECT count(*) INTO v_accepted_count 
			FROM tipsters.invites 
			WHERE tipsters.invites.accepted = acceptedInvite AND tipsters.invites.id = invite_id;
			SELECT tipsters.invites.userid INTO userid FROM tipsters.invites WHERE tipsters.invites.id = invite_id;
			SELECT tipsters.invites.matchid INTO matchid FROM tipsters.invites WHERE tipsters.invites.id = invite_id;
			SELECT tipsters.invites.expiresin INTO expiresIn FROM tipsters.invites WHERE tipsters.invites.id = invite_id;
			
			IF(userid != currentUserId)
				THEN RAISE EXCEPTION '-------Invite is not for this user!-------';
			END IF;

			IF(v_invite_count<1)
				THEN RAISE EXCEPTION '-------Invite does not exist!-------';
			END IF;
			
			IF(expiresIn<currentTime)
				THEN RAISE EXCEPTION '-------Invite is expired!-------';
				END IF;

            IF(v_accepted_count>0)
				THEN RAISE EXCEPTION '-------Invite is already used!-------';
			END IF;
			
		

           IF(v_accepted_count<1 AND v_invite_count>0 AND expiresIn>=currentTime AND userid=currentUserId)
				THEN UPDATE tipsters.invites SET accepted = acceptedInvite WHERE  id=invite_id ;
			END IF;

		 	RETURN matchid;

	END;



$$LANGUAGE plpgsql VOLATILE;

COMMIT;
