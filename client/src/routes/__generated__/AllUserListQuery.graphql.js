/**
 * @flow
 * @relayHash 11537f0dce0b96751aa061d7b2a18a3b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AllUserListQueryVariables = {||};
export type AllUserListQueryResponse = {|
  +allUsers: ?{|
    +edges: $ReadOnlyArray<{|
      +node: ?{|
        +id: any,
        +username: string,
        +password: string,
      |}
    |}>
  |}
|};
export type AllUserListQuery = {|
  variables: AllUserListQueryVariables,
  response: AllUserListQueryResponse,
|};
*/


/*
query AllUserListQuery {
  allUsers {
    edges {
      node {
        id
        username
        password
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "allUsers",
    "storageKey": null,
    "args": null,
    "concreteType": "UsersConnection",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "edges",
        "storageKey": null,
        "args": null,
        "concreteType": "UsersEdge",
        "plural": true,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "node",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
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
                "name": "username",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "password",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AllUserListQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "AllUserListQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "AllUserListQuery",
    "id": null,
    "text": "query AllUserListQuery {\n  allUsers {\n    edges {\n      node {\n        id\n        username\n        password\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '075562264da746c0001375a8674df72c';
module.exports = node;
