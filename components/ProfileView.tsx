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
} from '../models/CV';
import { GetCV_cvCollection_items_profile } from '../queries/__generated__/GetCV';
import { ContactLinkView } from './ContactLinkView';
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
    pseudoLink: {
        cursor: 'pointer',
    },
}));

interface ProfileViewProps {
    data: GetCV_cvCollection_items_profile;
    revealSecrets: boolean;
    onSignIn: () => void;
}

export const ProfileView: FC<ProfileViewProps> = ({
    data,
    revealSecrets,
    onSignIn,
}) => {
    const classes = useStyles();

    const contacts = profileToContactsList(data);

    return (
        <article>
            {revealSecrets ? (
                <h4>{data.name}</h4>
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
                    <p>
                        Contact information is only available after you sign up.
                        It's free and takes just a few moments!
                    </p>
                </>
            )}
            <div>
                {revealSecrets ? (
                    <ul>
                        {contacts.map((contactItem, i) => (
                            <li key={i}>
                                <ContactLinkView data={contactItem} key={i} />
                            </li>
                        ))}
                    </ul>
                ) : null}
            </div>
        </article>
    );
};
