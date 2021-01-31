import { getDataFromTree } from '@apollo/react-ssr';
import { signIn, useSession } from 'next-auth/client';
import Head from 'next/head';
import Link from 'next/link';
import { FC, useCallback } from 'react';
import { AuthWidget } from '../components/AuthWidget';
import { ContentPage } from '../components/ContentPage';
import { CVView } from '../components/CVView';
import { ArrowLeft } from '../components/Icons';
import { NavBar } from '../components/NavBar';
import { useCV } from '../queries/useCV';
import { withApolloClient } from '../utils/withApollo';

const Page: FC = () => {
    const [session, sessionLoading] = useSession();

    const doSignIn = useCallback(() => {
        signIn('auth0');
    }, []);

    const { data, error } = useCV();

    return (
        <>
            <Head>
                <title>My Résumé</title>
                <meta
                    name="description"
                    content="View CV of a web developer online"
                />
            </Head>

            <NavBar>
                <Link href="/">
                    <a className="button button-clear">
                        <ArrowLeft /> Home
                    </a>
                </Link>
                <div className="float-right">
                    <AuthWidget session={session} />
                </div>
            </NavBar>
            <ContentPage bordered>
                <CVView
                    data={data}
                    onSignIn={doSignIn}
                    grantAccess={!!session}
                    sessionLoading={sessionLoading}
                />
            </ContentPage>
        </>
    );
};
export default withApolloClient(Page, { getDataFromTree });
