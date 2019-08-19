/**
 * @flow
 * @relayHash d5c28de2e82032cd0e6b00ee65909f07
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Matches_joinedMatches$ref = any;
export type MatchesPageQueryVariables = {|
  id: any
|};
export type MatchesPageQueryResponse = {|
  +userById: ?{|
    +joinedMatchesByUserid: {|
      +nodes: $ReadOnlyArray<?{|
        +matchid: any,
        +matchByMatchid: ?{|
          +id: any
        |},
        +$fragmentRefs: Matches_joinedMatches$ref,
      |}>
    |}
  |}
|};
export type MatchesPageQuery = {|
  variables: MatchesPageQueryVariables,
  response: MatchesPageQueryResponse,
|};
*/


/*
query MatchesPageQuery(
  $id: UUID!
) {
  userById(id: $id) {
    joinedMatchesByUserid {
      nodes {
        matchid
        ...Matches_joinedMatches
        matchByMatchid {
          id
        }
      }
    }
  }
}

fragment Matches_joinedMatches on JoinedMatch {
  matchByMatchid {
    id
    type
    league
    teamByHostid {
      name
    }
    teamByGuestid {
      name
    }
    predictionsByMatchid(orderBy: USERID_ASC) {
      nodes {
        id
        score
        ...PredictionsDialog_predictions
        userByUserid {
          id
          username
        }
      }
    }
    userByUserid {
      id
      username
    }
  }
}

fragment PredictionsDialog_predictions on Prediction {
  id
  ...PredictionCard_prediction
}

fragment PredictionCard_prediction on Prediction {
  id
  matchid
  score
  userByUserid {
    id
    username
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
  "name": "matchid",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v4 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "name",
    "args": null,
    "storageKey": null
  }
],
v5 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "userByUserid",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": false,
  "selections": [
    (v3/*: any*/),
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "username",
      "args": null,
      "storageKey": null
    }
  ]
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "MatchesPageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "userById",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "joinedMatchesByUserid",
            "storageKey": null,
            "args": null,
            "concreteType": "JoinedMatchesConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "nodes",
                "storageKey": null,
                "args": null,
                "concreteType": "JoinedMatch",
                "plural": true,
                "selections": [
                  (v2/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "matchByMatchid",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Match",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/)
                    ]
                  },
                  {
                    "kind": "FragmentSpread",
                    "name": "Matches_joinedMatches",
                    "args": null
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "MatchesPageQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "userById",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "joinedMatchesByUserid",
            "storageKey": null,
            "args": null,
            "concreteType": "JoinedMatchesConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "nodes",
                "storageKey": null,
                "args": null,
                "concreteType": "JoinedMatch",
                "plural": true,
                "selections": [
                  (v2/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "matchByMatchid",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Match",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/),
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
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "predictionsByMatchid",
                        "storageKey": "predictionsByMatchid(orderBy:\"USERID_ASC\")",
                        "args": [
                          {
                            "kind": "Literal",
                            "name": "orderBy",
                            "value": "USERID_ASC"
                          }
                        ],
                        "concreteType": "PredictionsConnection",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "nodes",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Prediction",
                            "plural": true,
                            "selections": [
                              (v3/*: any*/),
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "score",
                                "args": null,
                                "storageKey": null
                              },
                              (v2/*: any*/),
                              (v5/*: any*/)
                            ]
                          }
                        ]
                      },
                      (v5/*: any*/)
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "MatchesPageQuery",
    "id": null,
    "text": "query MatchesPageQuery(\n  $id: UUID!\n) {\n  userById(id: $id) {\n    joinedMatchesByUserid {\n      nodes {\n        matchid\n        ...Matches_joinedMatches\n        matchByMatchid {\n          id\n        }\n      }\n    }\n  }\n}\n\nfragment Matches_joinedMatches on JoinedMatch {\n  matchByMatchid {\n    id\n    type\n    league\n    teamByHostid {\n      name\n    }\n    teamByGuestid {\n      name\n    }\n    predictionsByMatchid(orderBy: USERID_ASC) {\n      nodes {\n        id\n        score\n        ...PredictionsDialog_predictions\n        userByUserid {\n          id\n          username\n        }\n      }\n    }\n    userByUserid {\n      id\n      username\n    }\n  }\n}\n\nfragment PredictionsDialog_predictions on Prediction {\n  id\n  ...PredictionCard_prediction\n}\n\nfragment PredictionCard_prediction on Prediction {\n  id\n  matchid\n  score\n  userByUserid {\n    id\n    username\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ab8ed3e3368a97ab425a79d13f7fa863';
module.exports = node;
