/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type PredictionsDialog_predictions$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type MatchCard_match$ref: FragmentReference;
declare export opaque type MatchCard_match$fragmentType: MatchCard_match$ref;
export type MatchCard_match = {|
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
  +$refType: MatchCard_match$ref,
|};
export type MatchCard_match$data = MatchCard_match;
export type MatchCard_match$key = {
  +$data?: MatchCard_match$data,
  +$fragmentRefs: MatchCard_match$ref,
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
  "name": "MatchCard_match",
  "type": "Match",
  "metadata": null,
  "argumentDefinitions": [],
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
};
})();
// prettier-ignore
(node/*: any*/).hash = '8faf922cd9cafc8a45f6018c52f82934';
module.exports = node;
