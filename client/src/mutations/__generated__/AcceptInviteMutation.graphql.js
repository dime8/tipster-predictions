/**
 * @flow
 * @relayHash 204db5b74c95f18bce83673d25002846
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AcceptInviteInput = {|
  clientMutationId?: ?string,
  inviteId?: ?any,
  currentuserid?: ?any,
|};
export type AcceptInviteMutationVariables = {|
  input: AcceptInviteInput
|};
export type AcceptInviteMutationResponse = {|
  +acceptInvite: ?{|
    +uuid: ?any
  |}
|};
export type AcceptInviteMutation = {|
  variables: AcceptInviteMutationVariables,
  response: AcceptInviteMutationResponse,
|};
*/


/*
mutation AcceptInviteMutation(
  $input: AcceptInviteInput!
) {
  acceptInvite(input: $input) {
    uuid
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "AcceptInviteInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "acceptInvite",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "AcceptInvitePayload",
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
    "name": "AcceptInviteMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "AcceptInviteMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "AcceptInviteMutation",
    "id": null,
    "text": "mutation AcceptInviteMutation(\n  $input: AcceptInviteInput!\n) {\n  acceptInvite(input: $input) {\n    uuid\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'be3fb0a664da0456212e07fce51787a1';
module.exports = node;
