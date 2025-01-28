import apolloClientPkg from '@apollo/client';
const { ApolloClient, InMemoryCache } = apolloClientPkg;

const client = new ApolloClient({
    uri: 'https://admin.dziedzinskaart.com/graphql',
    cache: new InMemoryCache(),
});

export default client;
