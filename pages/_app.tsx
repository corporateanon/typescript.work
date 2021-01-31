import 'milligram';
import App from 'next/app';
import Head from 'next/head';
import 'normalize.css';
import { ThemeProvider } from 'react-jss';
import { theme } from '../components/theme';

class MyApp extends App {
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

export default MyApp;
