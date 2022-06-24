import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ozyxfz1c4i01xx33xf6v6r/master',
  cache: new InMemoryCache()
})