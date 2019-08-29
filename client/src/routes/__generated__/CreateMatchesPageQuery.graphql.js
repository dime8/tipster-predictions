/**
 * @flow
 * @relayHash bc0ec374461c83cb7a7cd46a12fc3973
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type CreateMatch_teams$ref = any;
export type CreateMatchesPageQueryVariables = {||};
export type CreateMatchesPageQueryResponse = {|
  +allTeams: ?{|
    +nodes: $ReadOnlyArray<?{|
      +$fragmentRefs: CreateMatch_teams$ref
    |}>
  |}
|};
export type CreateMatchesPageQuery = {|
  variables: CreateMatchesPageQueryVariables,
  response: CreateMatchesPageQueryResponse,
|};
*/


/*
query CreateMatchesPageQuery {
  allTeams {
    nodes {
      ...CreateMatch_teams
    }
  }
}

fragment CreateMatch_teams on Team {
  id
  name
  league
  type
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CreateMatchesPageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allTeams",
        "storageKey": null,
        "args": null,
        "concreteType": "TeamsConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "nodes",
            "storageKey": null,
            "args": null,
            "concreteType": "Team",
            "plural": true,
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "CreateMatch_teams",
                "args": null
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateMatchesPageQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allTeams",
        "storageKey": null,
        "args": null,
        "concreteType": "TeamsConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "nodes",
            "storageKey": null,
            "args": null,
            "concreteType": "Team",
            "plural": true,
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
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "CreateMatchesPageQuery",
    "id": null,
    "text": "query CreateMatchesPageQuery {\n  allTeams {\n    nodes {\n      ...CreateMatch_teams\n    }\n  }\n}\n\nfragment CreateMatch_teams on Team {\n  id\n  name\n  league\n  type\n}\n",
    "metadata": {}
  }
};
// prettier-ignore
(node/*: any*/).hash = 'c0356cde613fbb3022ce4f9146228ee0';
module.exports = node;
