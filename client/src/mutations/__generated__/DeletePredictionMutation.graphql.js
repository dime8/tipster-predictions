/**
 * @flow
 * @relayHash cb28ad11f3c2bcd174b7da9494a761e3
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeletePredictionByIdInput = {|
  clientMutationId?: ?string,
  id: any,
|};
export type DeletePredictionMutationVariables = {|
  input: DeletePredictionByIdInput
|};
export type DeletePredictionMutationResponse = {|
  +deletePredictionById: ?{|
    +predictionEdge: ?{|
      +node: ?{|
        +id: any,
        +matchByMatchid: ?{|
          +id: any,
          +userByUserid: ?{|
            +id: any,
            +username: string,
          |},
        |},
      |}
    |}
  |}
|};
export type DeletePredictionMutation = {|
  variables: DeletePredictionMutationVariables,
  response: DeletePredictionMutationResponse,
|};
*/


/*
mutation DeletePredictionMutation(
  $input: DeletePredictionByIdInput!
) {
  deletePredictionById(input: $input) {
    predictionEdge {
      node {
        id
        matchByMatchid {
          id
          userByUserid {
            id
            username
          }
        }
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
    "type": "DeletePredictionByIdInput!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "deletePredictionById",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "DeletePredictionPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "predictionEdge",
        "storageKey": null,
        "args": null,
        "concreteType": "PredictionsEdge",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "node",
            "storageKey": null,
            "args": null,
            "concreteType": "Prediction",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "matchByMatchid",
                "storageKey": null,
                "args": null,
                "concreteType": "Match",
                "plural": false,
                "selections": [
                  (v1/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "userByUserid",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "User",
                    "plural": false,
                    "selections": [
                      (v1/*: any*/),
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "username",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  }
                ]
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
    "name": "DeletePredictionMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "DeletePredictionMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "DeletePredictionMutation",
    "id": null,
    "text": "mutation DeletePredictionMutation(\n  $input: DeletePredictionByIdInput!\n) {\n  deletePredictionById(input: $input) {\n    predictionEdge {\n      node {\n        id\n        matchByMatchid {\n          id\n          userByUserid {\n            id\n            username\n          }\n        }\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '01dd658dbfc048033fae553bc2047262';
module.exports = node;
