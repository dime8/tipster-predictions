/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type PredictionsDialog_predictions$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Matches_joinedMatches$ref: FragmentReference;
declare export opaque type Matches_joinedMatches$fragmentType: Matches_joinedMatches$ref;
export type Matches_joinedMatches = $ReadOnlyArray<{|
  +matchByMatchid: ?{|
    +id: any,
    +type: string,
    +league: string,
    +teamByHostid: ?{|
      +name: string
    |},
    +teamByGuestid: ?{|
      +name: string
    |},
    +predictionsByMatchid: {|
      +nodes: $ReadOnlyArray<?{|
        +id: any,
        +score: string,
        +userByUserid: ?{|
          +id: any,
          +username: string,
        |},
        +$fragmentRefs: PredictionsDialog_predictions$ref,
      |}>
    |},
    +userByUserid: ?{|
      +id: any,
      +username: string,
    |},
  |},
  +$refType: Matches_joinedMatches$ref,
|}>;
export type Matches_joinedMatches$data = Matches_joinedMatches;
export type Matches_joinedMatches$key = {
  +$data?: Matches_joinedMatches$data,
  +$fragmentRefs: Matches_joinedMatches$ref,
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "name",
    "args": null,
    "storageKey": null
  }
],
v2 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "userByUserid",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": false,
  "selections": [
    (v0/*: any*/),
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "username",
      "args": null,
      "storageKey": null
    }
  ]
};
return {
  "kind": "Fragment",
  "name": "Matches_joinedMatches",
  "type": "JoinedMatch",
  "metadata": {
    "plural": true
  },
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "matchByMatchid",
      "storageKey": null,
      "args": null,
      "concreteType": "Match",
      "plural": false,
      "selections": [
        (v0/*: any*/),
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
          "kind": "LinkedField",
          "alias": null,
          "name": "teamByHostid",
          "storageKey": null,
          "args": null,
          "concreteType": "Team",
          "plural": false,
          "selections": (v1/*: any*/)
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "teamByGuestid",
          "storageKey": null,
          "args": null,
          "concreteType": "Team",
          "plural": false,
          "selections": (v1/*: any*/)
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "predictionsByMatchid",
          "storageKey": "predictionsByMatchid(orderBy:\"USERID_ASC\")",
          "args": [
            {
              "kind": "Literal",
              "name": "orderBy",
              "value": "USERID_ASC"
            }
          ],
          "concreteType": "PredictionsConnection",
          "plural": false,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "nodes",
              "storageKey": null,
              "args": null,
              "concreteType": "Prediction",
              "plural": true,
              "selections": [
                (v0/*: any*/),
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "score",
                  "args": null,
                  "storageKey": null
                },
                (v2/*: any*/),
                {
                  "kind": "FragmentSpread",
                  "name": "PredictionsDialog_predictions",
                  "args": null
                }
              ]
            }
          ]
        },
        (v2/*: any*/)
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '139111bdc464587b31ddb7e580294b4d';
module.exports = node;
