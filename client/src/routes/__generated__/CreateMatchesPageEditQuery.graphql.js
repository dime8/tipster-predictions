/**
 * @flow
 * @relayHash 14d280b789627d02fd7514a3c63feeee
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type CreateMatch_editMatch$ref = any;
type CreateMatch_teams$ref = any;
export type CreateMatchesPageEditQueryVariables = {|
  id: any
|};
export type CreateMatchesPageEditQueryResponse = {|
  +allTeams: ?{|
    +nodes: $ReadOnlyArray<?{|
      +$fragmentRefs: CreateMatch_teams$ref
    |}>
  |},
  +matchById: ?{|
    +id: any,
    +$fragmentRefs: CreateMatch_editMatch$ref,
  |},
|};
export type CreateMatchesPageEditQuery = {|
  variables: CreateMatchesPageEditQueryVariables,
  response: CreateMatchesPageEditQueryResponse,
|};
*/


/*
query CreateMatchesPageEditQuery(
  $id: UUID!
) {
  allTeams {
    nodes {
      ...CreateMatch_teams
    }
  }
  matchById(id: $id) {
    id
    ...CreateMatch_editMatch
  }
}

fragment CreateMatch_teams on Team {
  id
  name
  league
  type
}

fragment CreateMatch_editMatch on Match {
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
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "UUID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "league",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "type",
  "args": null,
  "storageKey": null
},
v6 = [
  (v2/*: any*/),
  (v3/*: any*/)
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CreateMatchesPageEditQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
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
        "name": "matchById",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Match",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "FragmentSpread",
            "name": "CreateMatch_editMatch",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateMatchesPageEditQuery",
    "argumentDefinitions": (v0/*: any*/),
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
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/)
            ]
          }
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "matchById",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Match",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v5/*: any*/),
          (v4/*: any*/),
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
            "selections": (v6/*: any*/)
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "teamByGuestid",
            "storageKey": null,
            "args": null,
            "concreteType": "Team",
            "plural": false,
            "selections": (v6/*: any*/)
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "CreateMatchesPageEditQuery",
    "id": null,
    "text": "query CreateMatchesPageEditQuery(\n  $id: UUID!\n) {\n  allTeams {\n    nodes {\n      ...CreateMatch_teams\n    }\n  }\n  matchById(id: $id) {\n    id\n    ...CreateMatch_editMatch\n  }\n}\n\nfragment CreateMatch_teams on Team {\n  id\n  name\n  league\n  type\n}\n\nfragment CreateMatch_editMatch on Match {\n  id\n  type\n  league\n  userid\n  teamByHostid {\n    id\n    name\n  }\n  teamByGuestid {\n    id\n    name\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd0114901af782208a574d7b2d4c1f35f';
module.exports = node;
