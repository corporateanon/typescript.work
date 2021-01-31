import { Session, signOut, signIn } from 'next-auth/client';
import { FC } from 'react';
import { createUseStyles } from 'react-jss';
import { Theme } from './theme';

const useStyles = createUseStyles<Theme>((theme) => ({
    root: {},
}));

export const AuthWidget: FC<{
    session?: Session;
}> = ({ session }) => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.root}>
                {session ? (
                    <>
                        <span
                            className="button button-clear"
                            onClick={() => signOut()}
                        >
                            Sign out
                        </span>
                    </>
                ) : (
                    <span
                        className="button button-clear"
                        onClick={() => signIn('auth0')}
                    >
                        Sign in
                    </span>
                )}
            </div>
        </>
    );

    return;
};
