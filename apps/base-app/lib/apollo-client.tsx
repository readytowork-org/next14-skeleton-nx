'use client';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { ReactNode } from 'react';

export const Provider = ({ children }: { children: ReactNode }) => {
  const client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: new InMemoryCache()
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
