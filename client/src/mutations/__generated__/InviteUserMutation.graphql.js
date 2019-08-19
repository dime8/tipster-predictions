/**
 * @flow
 * @relayHash f46318777cf4c168e297628d26c558f3
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type InviteUserInput = {|
  clientMutationId?: ?string,
  userId?: ?any,
  matchId?: ?any,
|};
export type InviteUserMutationVariables = {|
  input: InviteUserInput
|};
export type InviteUserMutationResponse = {|
  +inviteUser: ?{|
    +uuid: ?any
  |}
|};
export type InviteUserMutation = {|
  variables: InviteUserMutationVariables,
  response: InviteUserMutationResponse,
|};
*/


/*
mutation InviteUserMutation(
  $input: InviteUserInput!
) {
  inviteUser(input: $input) {
    uuid
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "InviteUserInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "inviteUser",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "InviteUserPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "uuid",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "InviteUserMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "InviteUserMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "InviteUserMutation",
    "id": null,
    "text": "mutation InviteUserMutation(\n  $input: InviteUserInput!\n) {\n  inviteUser(input: $input) {\n    uuid\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ee72e7bbee4855d14aa5af5e4132c0f3';
module.exports = node;
