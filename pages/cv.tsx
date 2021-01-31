import { getDataFromTree } from '@apollo/react-ssr';
import { signIn, signOut, useSession } from 'next-auth/client';
import Head from 'next/head';
import { FC, useCallback } from 'react';
import { ContentPage } from '../components/ContentPage';
import { CVView } from '../components/CVView';
import { useCV } from '../queries/useCV';
import { withApolloClient } from '../utils/withApollo';

const Page: FC = () => {
    const [session, sessionLoading] = useSession();
    const authLine = (
        <>
            {session && (
                <div className="float-right">
                    {session.user.name ?? session.user.email}{' '}
                    <button className="button-clear" onClick={() => signOut()}>
                        Sign out
                    </button>
                </div>
            )}
        </>
    );

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

            {authLine}
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
