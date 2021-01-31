import withApollo from 'next-with-apollo';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

export const withApolloClient = withApollo(
    ({ initialState }) => {
        return new ApolloClient({
            uri: `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE}/environments/${process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT}`,
            headers: {
                authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN}`,
            },
            cache: new InMemoryCache().restore(initialState || {}),
        });
    },
    {
        render: ({ Page, props }) => {
            return (
                <ApolloProvider client={props.apollo}>
                    <Page {...props} />
                </ApolloProvider>
            );
        },
    }
);
