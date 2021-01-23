import { FC } from 'react';
import { createUseStyles } from 'react-jss';
import { CVProfile } from '../models/CV';
import { ContactLinkView } from './ContactLinkView';
import { Theme } from './theme';

const useStyles = createUseStyles<Theme>((theme) => ({
    pseudoLink: {
        cursor: 'pointer',
    },
}));

interface ProfileViewProps {
    data: CVProfile;
    revealSecrets: boolean;
    onSignIn: () => void;
}

export const ProfileView: FC<ProfileViewProps> = ({
    data,
    revealSecrets,
    onSignIn,
}) => {
    const classes = useStyles();
    return (
        <article>
            {revealSecrets ? (
                <h4>{data.name}</h4>
            ) : (
                <>
                    <h4>
                        Developer Name{' '}
                        <a onClick={onSignIn} className={classes.pseudoLink}>
                            Sign in to view details
                        </a>
                    </h4>
                </>
            )}
            <div>
                {revealSecrets ? (
                    <ul>
                        {data.contacts?.map((contactItem, i) => (
                            <li>
                                <ContactLinkView data={contactItem} key={i} />
                            </li>
                        ))}
                    </ul>
                ) : null}
            </div>
        </article>
    );
};
