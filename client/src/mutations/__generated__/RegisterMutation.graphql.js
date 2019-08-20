/**
 * @flow
 * @relayHash ca15fdb2afe2d95ce37d66740e9037ca
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RegisterUserInput = {|
  clientMutationId?: ?string,
  _username?: ?string,
  _password?: ?string,
|};
export type RegisterMutationVariables = {|
  input: RegisterUserInput
|};
export type RegisterMutationResponse = {|
  +registerUser: ?{|
    +uuid: ?any
  |}
|};
export type RegisterMutation = {|
  variables: RegisterMutationVariables,
  response: RegisterMutationResponse,
|};
*/


/*
mutation RegisterMutation(
  $input: RegisterUserInput!
) {
  registerUser(input: $input) {
    uuid
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "RegisterUserInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "registerUser",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "RegisterUserPayload",
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
    "name": "RegisterMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "RegisterMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "RegisterMutation",
    "id": null,
    "text": "mutation RegisterMutation(\n  $input: RegisterUserInput!\n) {\n  registerUser(input: $input) {\n    uuid\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '7dd1702845522286d0e9206fab71e47a';
module.exports = node;
