import React from "react";
import ReactDOM from "react-dom";
import { App } from "./app";
import { ApolloProvider } from "@apollo/client";
import { createGlobalStyle } from "styled-components";
import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { getToken } from "./app/utils";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

const httpLink = createHttpLink({
  uri: "http://localhost:4000/api",
});

const authLink = setContext((_, { headers }) => {
  const token = getToken();
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <GlobalStyle />
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
