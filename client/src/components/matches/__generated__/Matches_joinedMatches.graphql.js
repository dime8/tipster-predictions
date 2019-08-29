/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type MatchCard_match$ref = any;
type PredictionsDialog_predictions$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Matches_joinedMatches$ref: FragmentReference;
declare export opaque type Matches_joinedMatches$fragmentType: Matches_joinedMatches$ref;
export type Matches_joinedMatches = $ReadOnlyArray<{|
  +matchByMatchid: ?{|
    +id: any,
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
    +$fragmentRefs: MatchCard_match$ref,
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
                {
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
                },
                {
                  "kind": "FragmentSpread",
                  "name": "PredictionsDialog_predictions",
                  "args": null
                }
              ]
            }
          ]
        },
        {
          "kind": "FragmentSpread",
          "name": "MatchCard_match",
          "args": null
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e4a72f1113baa39e64f177778032e252';
module.exports = node;
