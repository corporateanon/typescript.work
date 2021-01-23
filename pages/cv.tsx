import { FC, useCallback } from 'react';
import { ContentPage } from '../components/ContentPage';
import { CVView } from '../components/CVView';
import data from '../data/cv.yaml';
import { signIn, signOut, useSession } from 'next-auth/client';

const Page: FC = () => {
    const [session, loading] = useSession();
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

    return (
        <>
            {authLine}
            <ContentPage>
                <CVView
                    data={data}
                    onSignIn={doSignIn}
                    revealSecrets={!!session}
                />
            </ContentPage>
        </>
    );
};
export default Page;
