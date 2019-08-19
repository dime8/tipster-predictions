/**
 * @flow
 * @relayHash 40e01eb39d6c227390427e3b85838a3f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteMatchByIdInput = {|
  clientMutationId?: ?string,
  id: any,
|};
export type DeleteMatchMutationVariables = {|
  input: DeleteMatchByIdInput
|};
export type DeleteMatchMutationResponse = {|
  +deleteMatchById: ?{|
    +matchEdge: ?{|
      +node: ?{|
        +id: any
      |}
    |}
  |}
|};
export type DeleteMatchMutation = {|
  variables: DeleteMatchMutationVariables,
  response: DeleteMatchMutationResponse,
|};
*/


/*
mutation DeleteMatchMutation(
  $input: DeleteMatchByIdInput!
) {
  deleteMatchById(input: $input) {
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
    "type": "DeleteMatchByIdInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "deleteMatchById",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "DeleteMatchPayload",
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
    "name": "DeleteMatchMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "DeleteMatchMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "DeleteMatchMutation",
    "id": null,
    "text": "mutation DeleteMatchMutation(\n  $input: DeleteMatchByIdInput!\n) {\n  deleteMatchById(input: $input) {\n    matchEdge {\n      node {\n        id\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9bb76a450d8e190c36af7fae7fd19e1f';
module.exports = node;
