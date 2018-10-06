import Vue from "vue";
import VueApollo from "vue-apollo";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { GRAPHQL_ENDPOINT } from "./config";
import { ApolloLink } from "apollo-link";

const httpLink = new HttpLink({
  // You should use an absolute URL here
  uri: GRAPHQL_ENDPOINT
});

const authLink = new ApolloLink((operation, forward) => {
  // Retrieve the authorization token from local storage.
  const token = localStorage.getItem("token");

  // Use the setContext method to set the HTTP headers.
  operation.setContext({
    headers: {
      authorization: token ? `JWT ${token}` : ""
    }
  });

  // Call the next link in the middleware chain.
  return forward(operation);
});

// Create the apollo client
export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink), // Chain it with the HttpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

// Install the vue plugin
Vue.use(VueApollo);

export default apolloProvider;
