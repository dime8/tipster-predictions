const { Environment, Network, RecordSource, Store } = require("relay-runtime");

// 2
const store = new Store(new RecordSource());

// 3
const network = Network.create((operation, variables) => {
  // 4
  const token = localStorage.getItem("token");
  console.log("Toooooooooooo", localStorage.getItem("token"));
  return fetch("http://localhost:5000/graphql", {
    method: "POST",

    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: token ? `Bearer ${token}` : ""
    },
    body: JSON.stringify({
      query: operation.text,
      variables
    })
  }).then(response => {
    return response.json();
  });
});

// 5
const environment = new Environment({
  network,
  store
});

// 6
export default environment;
