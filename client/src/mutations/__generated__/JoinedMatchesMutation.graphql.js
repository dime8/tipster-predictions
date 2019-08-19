/**
 * @flow
 * @relayHash 2bf48a1df5abb9ea6e72404038389fdc
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateJoinedMatchInput = {|
  clientMutationId?: ?string,
  joinedMatch: JoinedMatchInput,
|};
export type JoinedMatchInput = {|
  id?: ?any,
  matchid: any,
  userid: any,
  joinedAt?: ?any,
  leftAt?: ?any,
|};
export type JoinedMatchesMutationVariables = {|
  input: CreateJoinedMatchInput
|};
export type JoinedMatchesMutationResponse = {|
  +createJoinedMatch: ?{|
    +joinedMatchEdge: ?{|
      +node: ?{|
        +id: any
      |}
    |}
  |}
|};
export type JoinedMatchesMutation = {|
  variables: JoinedMatchesMutationVariables,
  response: JoinedMatchesMutationResponse,
|};
*/


/*
mutation JoinedMatchesMutation(
  $input: CreateJoinedMatchInput!
) {
  createJoinedMatch(input: $input) {
    joinedMatchEdge {
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
    "type": "CreateJoinedMatchInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createJoinedMatch",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "CreateJoinedMatchPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "joinedMatchEdge",
        "storageKey": null,
        "args": null,
        "concreteType": "JoinedMatchesEdge",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "node",
            "storageKey": null,
            "args": null,
            "concreteType": "JoinedMatch",
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
    "name": "JoinedMatchesMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "JoinedMatchesMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "JoinedMatchesMutation",
    "id": null,
    "text": "mutation JoinedMatchesMutation(\n  $input: CreateJoinedMatchInput!\n) {\n  createJoinedMatch(input: $input) {\n    joinedMatchEdge {\n      node {\n        id\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e77bf5a8231a86edc2716ed70f150736';
module.exports = node;
