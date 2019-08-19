/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type PredictionCard_prediction$ref: FragmentReference;
declare export opaque type PredictionCard_prediction$fragmentType: PredictionCard_prediction$ref;
export type PredictionCard_prediction = {|
  +id: any,
  +matchid: ?any,
  +score: string,
  +userByUserid: ?{|
    +id: any,
    +username: string,
  |},
  +$refType: PredictionCard_prediction$ref,
|};
export type PredictionCard_prediction$data = PredictionCard_prediction;
export type PredictionCard_prediction$key = {
  +$data?: PredictionCard_prediction$data,
  +$fragmentRefs: PredictionCard_prediction$ref,
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
  "name": "PredictionCard_prediction",
  "type": "Prediction",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    (v0/*: any*/),
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
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '2f8b19139ef701127cdafe38c178a6bf';
module.exports = node;
