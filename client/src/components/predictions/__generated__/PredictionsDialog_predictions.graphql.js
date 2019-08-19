/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type PredictionCard_prediction$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type PredictionsDialog_predictions$ref: FragmentReference;
declare export opaque type PredictionsDialog_predictions$fragmentType: PredictionsDialog_predictions$ref;
export type PredictionsDialog_predictions = $ReadOnlyArray<{|
  +id: any,
  +$fragmentRefs: PredictionCard_prediction$ref,
  +$refType: PredictionsDialog_predictions$ref,
|}>;
export type PredictionsDialog_predictions$data = PredictionsDialog_predictions;
export type PredictionsDialog_predictions$key = {
  +$data?: PredictionsDialog_predictions$data,
  +$fragmentRefs: PredictionsDialog_predictions$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "PredictionsDialog_predictions",
  "type": "Prediction",
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
      "kind": "FragmentSpread",
      "name": "PredictionCard_prediction",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'ec406ce2d511b29fb58869cd9a3931a6';
module.exports = node;
