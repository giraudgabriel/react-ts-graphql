import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
const URI = 'https://graphqlzero.almansi.me/api';

const client = new ApolloClient({
  uri: URI,
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
