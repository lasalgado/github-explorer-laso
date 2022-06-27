import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const GRAPHQL_API_URL = process.env.REACT_APP_GITHUB_GRAPHQL_API_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;


const httpLink = createHttpLink({
    uri: GRAPHQL_API_URL,
});

const authLink = setContext((_, { headers }) => {
    const token = GITHUB_TOKEN;

    return {
        headers: {
            ...headers,
            authorization: GITHUB_TOKEN ? `Bearer ${token}` : "",
        }
    }
});

export const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

