import Head from 'next/head';
import { useSession } from 'next-auth/client';
import { FC } from 'react';
import { createUseStyles } from 'react-jss';
import { Card } from '../components/Card';
import { ContentPage } from '../components/ContentPage';
import { Theme } from '../components/theme';

const useStyles = createUseStyles<Theme>((theme) => ({
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    col: {
        flex: 1,
        maxWidth: 300,
    },
}));

const Page: FC = () => {
    const classes = useStyles();
    const [session, loading] = useSession();

    return (
        <>
            <Head>
                <title>Node.js, React, TypeScript developer</title>
            </Head>
            <ContentPage>
                <div className={classes.row}>
                    <div className={classes.col}>
                        <Card
                            href="/cv"
                            secondaryText="and contacts"
                            supportingText="Summary of my experience in TypeScript, Node.js, React.js and other technologies"
                            title="My Résumé"
                            image="/resume.jpg"
                            imageWidth={880}
                            imageHeight={542}
                        />
                    </div>
                </div>
            </ContentPage>
        </>
    );
};
export default Page;
