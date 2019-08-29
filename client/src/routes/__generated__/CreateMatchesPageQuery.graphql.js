/**
 * @flow
 * @relayHash 5b33ba27f2f86e454ebc2554695c7a70
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type CreateMatch_matches$ref = any;
type CreateMatch_teams$ref = any;
export type CreateMatchesPageQueryVariables = {||};
export type CreateMatchesPageQueryResponse = {|
  +allTeams: ?{|
    +nodes: $ReadOnlyArray<?{|
      +$fragmentRefs: CreateMatch_teams$ref
    |}>
  |},
  +allMatches: ?{|
    +nodes: $ReadOnlyArray<?{|
      +$fragmentRefs: CreateMatch_matches$ref
    |}>
  |},
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
  allMatches {
    nodes {
      ...CreateMatch_matches
    }
  }
}

fragment CreateMatch_teams on Team {
  id
  name
  league
  type
}

fragment CreateMatch_matches on Match {
  id
  type
  league
  userid
  teamByHostid {
    id
    name
  }
  teamByGuestid {
    id
    name
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "league",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "type",
  "args": null,
  "storageKey": null
},
v4 = [
  (v0/*: any*/),
  (v1/*: any*/)
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
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allMatches",
        "storageKey": null,
        "args": null,
        "concreteType": "MatchesConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "nodes",
            "storageKey": null,
            "args": null,
            "concreteType": "Match",
            "plural": true,
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "CreateMatch_matches",
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
              (v0/*: any*/),
              (v1/*: any*/),
              (v2/*: any*/),
              (v3/*: any*/)
            ]
          }
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allMatches",
        "storageKey": null,
        "args": null,
        "concreteType": "MatchesConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "nodes",
            "storageKey": null,
            "args": null,
            "concreteType": "Match",
            "plural": true,
            "selections": [
              (v0/*: any*/),
              (v3/*: any*/),
              (v2/*: any*/),
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
                "selections": (v4/*: any*/)
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "teamByGuestid",
                "storageKey": null,
                "args": null,
                "concreteType": "Team",
                "plural": false,
                "selections": (v4/*: any*/)
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
    "text": "query CreateMatchesPageQuery {\n  allTeams {\n    nodes {\n      ...CreateMatch_teams\n    }\n  }\n  allMatches {\n    nodes {\n      ...CreateMatch_matches\n    }\n  }\n}\n\nfragment CreateMatch_teams on Team {\n  id\n  name\n  league\n  type\n}\n\nfragment CreateMatch_matches on Match {\n  id\n  type\n  league\n  userid\n  teamByHostid {\n    id\n    name\n  }\n  teamByGuestid {\n    id\n    name\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '789a074f875d3aaadf7079c173f864bc';
module.exports = node;
