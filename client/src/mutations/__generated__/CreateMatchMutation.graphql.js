/**
 * @flow
 * @relayHash f5d8de2229949e2955a7fdd52f0c0be6
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateMatchInput = {|
  clientMutationId?: ?string,
  match: MatchInput,
|};
export type MatchInput = {|
  id?: ?any,
  type: string,
  league: string,
  userid?: ?any,
  hostid?: ?any,
  guestid?: ?any,
|};
export type CreateMatchMutationVariables = {|
  input: CreateMatchInput
|};
export type CreateMatchMutationResponse = {|
  +createMatch: ?{|
    +matchEdge: ?{|
      +node: ?{|
        +id: any,
        +hostid: ?any,
        +guestid: ?any,
        +type: string,
        +league: string,
        +userid: ?any,
      |}
    |}
  |}
|};
export type CreateMatchMutation = {|
  variables: CreateMatchMutationVariables,
  response: CreateMatchMutationResponse,
|};
*/


/*
mutation CreateMatchMutation(
  $input: CreateMatchInput!
) {
  createMatch(input: $input) {
    matchEdge {
      node {
        id
        hostid
        guestid
        type
        league
        userid
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
    "type": "CreateMatchInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createMatch",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "CreateMatchPayload",
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
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "hostid",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "guestid",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "type",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "league",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "userid",
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
    "name": "CreateMatchMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateMatchMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "CreateMatchMutation",
    "id": null,
    "text": "mutation CreateMatchMutation(\n  $input: CreateMatchInput!\n) {\n  createMatch(input: $input) {\n    matchEdge {\n      node {\n        id\n        hostid\n        guestid\n        type\n        league\n        userid\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd31c26ed3d1e583d194299d403e427ef';
module.exports = node;
