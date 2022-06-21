import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o03a8700jq01xifxir0cev/master',
    cache: new InMemoryCache()
})