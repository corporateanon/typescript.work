import 'milligram';
import 'normalize.css';
import Head from 'next/head';
import App from 'next/app';
import { ThemeProvider } from 'react-jss';
import { theme } from '../components/theme';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
    uri: `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE}/environments/${process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT}`,
    headers: {
        authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN}`,
    },
    cache: new InMemoryCache(),
});

export default class MyApp extends App {
    componentDidMount() {
        const style = document.getElementById('server-side-styles');

        if (style) {
            style.parentNode.removeChild(style);
        }
    }
    render() {
        const { Component, pageProps } = this.props;
        return (
            <>
                <Head>
                    <link
                        rel="stylesheet"
                        href="//fonts.googleapis.com/css?family=Roboto+Slab"
                    />
                </Head>
                <ApolloProvider client={apolloClient}>
                    <ThemeProvider theme={theme}>
                        <Component {...pageProps} />
                    </ThemeProvider>
                </ApolloProvider>
            </>
        );
    }
}
