/**
 * @flow
 * @relayHash 69f658b00d3efef1cdebe5e579f644e4
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
  allTeams(first: 5000) {
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

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 5000
  }
];
return {
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
        "storageKey": "allTeams(first:5000)",
        "args": (v0/*: any*/),
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
        "storageKey": "allTeams(first:5000)",
        "args": (v0/*: any*/),
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
    "text": "query CreateMatchesPageQuery {\n  allTeams(first: 5000) {\n    nodes {\n      ...CreateMatch_teams\n    }\n  }\n}\n\nfragment CreateMatch_teams on Team {\n  id\n  name\n  league\n  type\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '141ebcc612dfbbaf50c75c224b013d39';
module.exports = node;
