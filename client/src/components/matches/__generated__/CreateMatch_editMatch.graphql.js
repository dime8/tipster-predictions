/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type CreateMatch_editMatch$ref: FragmentReference;
declare export opaque type CreateMatch_editMatch$fragmentType: CreateMatch_editMatch$ref;
export type CreateMatch_editMatch = {|
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
  +$refType: CreateMatch_editMatch$ref,
|};
export type CreateMatch_editMatch$data = CreateMatch_editMatch;
export type CreateMatch_editMatch$key = {
  +$data?: CreateMatch_editMatch$data,
  +$fragmentRefs: CreateMatch_editMatch$ref,
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
  "name": "CreateMatch_editMatch",
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
(node/*: any*/).hash = '69070dc04f69c7d47001fc255d5f298b';
module.exports = node;
