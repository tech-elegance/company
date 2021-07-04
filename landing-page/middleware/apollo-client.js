import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "http://13.229.87.195/graphql",
    cache: new InMemoryCache(),
});

export default client;