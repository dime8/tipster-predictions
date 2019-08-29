/**
 * @flow
 * @relayHash 6df4c2d3b4f77df1dc6930be117c445a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateMatchByIdInput = {|
  clientMutationId?: ?string,
  matchPatch: MatchPatch,
  id: any,
|};
export type MatchPatch = {|
  id?: ?any,
  type?: ?string,
  league?: ?string,
  userid?: ?any,
  hostid?: ?any,
  guestid?: ?any,
|};
export type UpdateMatchMutationVariables = {|
  input: UpdateMatchByIdInput
|};
export type UpdateMatchMutationResponse = {|
  +updateMatchById: ?{|
    +matchEdge: ?{|
      +node: ?{|
        +id: any
      |}
    |}
  |}
|};
export type UpdateMatchMutation = {|
  variables: UpdateMatchMutationVariables,
  response: UpdateMatchMutationResponse,
|};
*/


/*
mutation UpdateMatchMutation(
  $input: UpdateMatchByIdInput!
) {
  updateMatchById(input: $input) {
    matchEdge {
      node {
        id
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "UpdateMatchByIdInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "updateMatchById",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UpdateMatchPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "matchEdge",
        "storageKey": null,
        "args": null,
        "concreteType": "MatchesEdge",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "node",
            "storageKey": null,
            "args": null,
            "concreteType": "Match",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "id",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "UpdateMatchMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdateMatchMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "UpdateMatchMutation",
    "id": null,
    "text": "mutation UpdateMatchMutation(\n  $input: UpdateMatchByIdInput!\n) {\n  updateMatchById(input: $input) {\n    matchEdge {\n      node {\n        id\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '918144b0da076b07f638773a624d89e3';
module.exports = node;
