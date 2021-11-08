import { ApolloClient, InMemoryCache } from '@apollo/client';

export function createApolloClient(api: string) {
  const client = new ApolloClient({
    ssrMode: typeof window === 'undefined',
    uri: `${api ?? 'http://localhost:4000'}/graphql`,
    cache: new InMemoryCache(),
  });

  return client;
}
