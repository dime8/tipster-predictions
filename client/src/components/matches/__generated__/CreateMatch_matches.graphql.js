/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type CreateMatch_matches$ref: FragmentReference;
declare export opaque type CreateMatch_matches$fragmentType: CreateMatch_matches$ref;
export type CreateMatch_matches = $ReadOnlyArray<{|
  +id: any,
  +type: string,
  +league: string,
  +userid: ?any,
  +teamByHostid: ?{|
    +id: any,
    +name: string,
  |},
  +teamByGuestid: ?{|
    +id: any,
    +name: string,
  |},
  +$refType: CreateMatch_matches$ref,
|}>;
export type CreateMatch_matches$data = CreateMatch_matches;
export type CreateMatch_matches$key = {
  +$data?: CreateMatch_matches$data,
  +$fragmentRefs: CreateMatch_matches$ref,
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
  (v0/*: any*/),
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "name",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Fragment",
  "name": "CreateMatch_matches",
  "type": "Match",
  "metadata": {
    "plural": true
  },
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
      "kind": "ScalarField",
      "alias": null,
      "name": "userid",
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
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'cba89594cc326a7dbc05fbe578d73baf';
module.exports = node;
