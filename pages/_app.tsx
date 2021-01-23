import 'milligram';
import 'normalize.css';
import Head from 'next/head';
import App from 'next/app';
import { ThemeProvider } from 'react-jss';
import { theme } from '../components/theme';

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
                <ThemeProvider theme={theme}>
                    <Component {...pageProps} />
                </ThemeProvider>
            </>
        );
    }
}
