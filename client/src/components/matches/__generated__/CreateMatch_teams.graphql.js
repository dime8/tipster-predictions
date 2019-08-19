/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type CreateMatch_teams$ref: FragmentReference;
declare export opaque type CreateMatch_teams$fragmentType: CreateMatch_teams$ref;
export type CreateMatch_teams = $ReadOnlyArray<{|
  +id: any,
  +name: string,
  +league: string,
  +type: string,
  +$refType: CreateMatch_teams$ref,
|}>;
export type CreateMatch_teams$data = CreateMatch_teams;
export type CreateMatch_teams$key = {
  +$data?: CreateMatch_teams$data,
  +$fragmentRefs: CreateMatch_teams$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "CreateMatch_teams",
  "type": "Team",
  "metadata": {
    "plural": true
  },
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
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
      "name": "type",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '47002bbbdb472a31afbce2135dfeb64f';
module.exports = node;
