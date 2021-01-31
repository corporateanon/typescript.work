import 'milligram';
import App from 'next/app';
import Head from 'next/head';
import 'normalize.css';
import { ThemeProvider } from 'react-jss';
import { theme } from '../components/theme';
import { Provider as AuthProvider } from 'next-auth/client';

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
                <AuthProvider session={pageProps.session}>
                    <ThemeProvider theme={theme}>
                        <Head>
                            <link
                                rel="icon"
                                type="image/png"
                                href="favicon.png"
                            />

                            <link
                                rel="stylesheet"
                                href="//fonts.googleapis.com/css?family=Roboto+Slab"
                            />
                        </Head>
                        <Component {...pageProps} />
                    </ThemeProvider>
                </AuthProvider>
            </>
        );
    }
}

export default MyApp;
