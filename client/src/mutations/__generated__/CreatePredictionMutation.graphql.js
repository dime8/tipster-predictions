/**
 * @flow
 * @relayHash e3d824f52c4462a0473e4a24d8f58a40
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreatePredictionInput = {|
  clientMutationId?: ?string,
  prediction: PredictionInput,
|};
export type PredictionInput = {|
  id?: ?any,
  matchid?: ?any,
  userid?: ?any,
  score: string,
|};
export type CreatePredictionMutationVariables = {|
  input: CreatePredictionInput
|};
export type CreatePredictionMutationResponse = {|
  +createPrediction: ?{|
    +predictionEdge: ?{|
      +node: ?{|
        +id: any,
        +matchid: ?any,
        +userid: ?any,
        +score: string,
        +userByUserid: ?{|
          +id: any,
          +username: string,
        |},
      |}
    |}
  |}
|};
export type CreatePredictionMutation = {|
  variables: CreatePredictionMutationVariables,
  response: CreatePredictionMutationResponse,
|};
*/


/*
mutation CreatePredictionMutation(
  $input: CreatePredictionInput!
) {
  createPrediction(input: $input) {
    predictionEdge {
      node {
        id
        matchid
        userid
        score
        userByUserid {
          id
          username
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
    "type": "CreatePredictionInput!",
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
    "name": "createPrediction",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "CreatePredictionPayload",
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
                "kind": "ScalarField",
                "alias": null,
                "name": "matchid",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "userid",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "score",
                "args": null,
                "storageKey": null
              },
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
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CreatePredictionMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "CreatePredictionMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "CreatePredictionMutation",
    "id": null,
    "text": "mutation CreatePredictionMutation(\n  $input: CreatePredictionInput!\n) {\n  createPrediction(input: $input) {\n    predictionEdge {\n      node {\n        id\n        matchid\n        userid\n        score\n        userByUserid {\n          id\n          username\n        }\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'db11398537055c7d513efcdaa0b14564';
module.exports = node;
