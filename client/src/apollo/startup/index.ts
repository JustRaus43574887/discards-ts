import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  HttpLink,
  ApolloLink,
} from "@apollo/client";
import OfflineLink from "apollo-link-offline";
import { setContext } from "@apollo/client/link/context";

const httpLink = new HttpLink({
  uri: "/graphql",
});

const offlineLink = new OfflineLink({
  storage: localStorage,
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      ...headers,
      authorization: token,
    },
  };
});

export const cache: InMemoryCache = new InMemoryCache();

export const client: ApolloClient<NormalizedCacheObject> =
  new ApolloClient<NormalizedCacheObject>({
    link: ApolloLink.from([authLink, offlineLink, httpLink]),
    cache,
    defaultOptions: {
      watchQuery: {
        fetchPolicy: "cache-and-network",
        errorPolicy: "all",
      },
      query: {
        fetchPolicy: "cache-first",
        errorPolicy: "all",
      },
      mutate: {
        errorPolicy: "all",
      },
    },
  });
