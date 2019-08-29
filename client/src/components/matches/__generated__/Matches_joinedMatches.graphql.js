/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type MatchCard_match$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Matches_joinedMatches$ref: FragmentReference;
declare export opaque type Matches_joinedMatches$fragmentType: Matches_joinedMatches$ref;
export type Matches_joinedMatches = $ReadOnlyArray<{|
  +matchByMatchid: ?{|
    +id: any,
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


const node/*: ReaderFragment*/ = {
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
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "id",
          "args": null,
          "storageKey": null
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
// prettier-ignore
(node/*: any*/).hash = '60dbda0dcc884ad2bfe285a20cbd3867';
module.exports = node;
