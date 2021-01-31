import { FC } from 'react';
import { createUseStyles } from 'react-jss';
import {
    ContactEmail,
    ContactGithub,
    ContactLinkedin,
    ContactPhone,
    ContactSkype,
    ContactTelegram,
    CVContactItem,
} from '../models/Contact';
import { GetCV_cvCollection_items_profile } from '../queries/__generated__/GetCV';
import { ContactLinkView } from './ContactLinkView';
import { Person } from './Icons';
import { Theme } from './theme';

const profileToContactsList = (
    profile: GetCV_cvCollection_items_profile
): CVContactItem[] => {
    return [
        ...(profile.email?.map(
            (address): ContactEmail => ({ type: 'email', address })
        ) ?? []),
        ...(profile.phone?.map(
            (number): ContactPhone => ({ type: 'phone', number })
        ) ?? []),
        ...(profile.telegram?.map(
            (username): ContactTelegram => ({ type: 'telegram', username })
        ) ?? []),
        ...(profile.skype?.map(
            (username): ContactSkype => ({ type: 'skype', username })
        ) ?? []),
        ...(profile.gitHub?.map(
            (username): ContactGithub => ({ type: 'github', username })
        ) ?? []),
        profile?.linkedIn
            ? ({
                  type: 'linkedin',
                  username: profile.linkedIn,
              } as ContactLinkedin)
            : null,
    ].filter((_) => _);
};

const useStyles = createUseStyles<Theme>((theme) => ({
    root: {
        backgroundColor: '#eeeeee',
        padding: '1rem',
        marginBottom: '2rem',
        textAlign: 'center',
    },
    pseudoLink: {
        cursor: 'pointer',
    },
    noMarginBottom: {
        marginBottom: 0,
    },
    list: {
        textAlign: 'left',
        maxWidth: 200,
        display: 'inline-block',
    },
    listItem: {
        listStyle: 'none',
        marginLeft: '1.2rem',
    },
}));

interface ProfileViewProps {
    data: GetCV_cvCollection_items_profile;
    grantAccess: boolean;
    onSignIn: () => void;
}

export const ProfileView: FC<ProfileViewProps> = ({
    data,
    grantAccess,
    onSignIn,
}) => {
    const classes = useStyles();

    const contacts = profileToContactsList(data);

    return (
        <article className={classes.root}>
            {grantAccess ? (
                <h1>
                    <Person /> {data.name}
                </h1>
            ) : (
                <>
                    <h4>
                        <button
                            onClick={onSignIn}
                            className={classes.pseudoLink}
                        >
                            Contact Me!
                        </button>
                    </h4>
                    <p className={classes.noMarginBottom}>
                        Contact information is only available after you sign up.
                        It's free and takes just a few moments!
                    </p>
                </>
            )}
            <div>
                {grantAccess && contacts?.length ? (
                    <ul className={`${classes.list} ${classes.noMarginBottom}`}>
                        {contacts.map((contactItem, i) => (
                            <li key={i} className={classes.listItem}>
                                <ContactLinkView data={contactItem} key={i} />
                            </li>
                        ))}
                    </ul>
                ) : null}
            </div>
        </article>
    );
};
