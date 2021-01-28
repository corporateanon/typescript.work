import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';
import { GetCV } from '../queries/__generated__/GetCV';
import { Period } from './Period';
import { ProfileView } from './ProfileView';
import { StringList } from './StringList';
import { theme, Theme } from './theme';

const useStyles = createUseStyles<Theme>(() => ({
    root: {},
    company: {
        color: theme.colorPrimary,
        '& a, & a:hover, & a:visited, & a:active': {
            color: theme.colorPrimary,
            borderBottom: `1px dashed ${theme.colorPrimary}`,
        },
    },
    text: {
        '& ul': {},
        '& li': {
            listStyle: 'square inside',
            marginLeft: '2rem',
        },
    },
}));

interface CVViewProps {
    data: GetCV;
    revealSecrets: boolean;
    onSignIn: () => void;
}
export const CVView: FC<CVViewProps> = ({ data, revealSecrets, onSignIn }) => {
    const classes = useStyles();

    const cvItem = data?.cvCollection?.items[0];

    return (
        <>
            {cvItem?.profile && (
                <ProfileView
                    data={cvItem?.profile}
                    revealSecrets={revealSecrets}
                    onSignIn={onSignIn}
                />
            )}
            <article className={classes.root}>
                {cvItem?.historyCollection?.items?.map((item, i) => {
                    return (
                        <div key={i}>
                            <h4>
                                <span>{item.title}</span>
                                {item.companyName ? (
                                    <>
                                        {' '}
                                        /{' '}
                                        <strong className={classes.company}>
                                            {item.companyUrl ? (
                                                <a
                                                    target="_blank"
                                                    href={item.companyUrl}
                                                >
                                                    {item.companyName}
                                                </a>
                                            ) : (
                                                item.companyName
                                            )}
                                        </strong>
                                    </>
                                ) : null}
                                <Period start={item.start} end={item.end} />
                            </h4>

                            <StringList
                                items={item.responsibility}
                                className={classes.text}
                                title="Responsibilities"
                            />
                            <StringList
                                items={item.technologies}
                                className={classes.text}
                                title="Technologies"
                            />
                            <StringList
                                items={item.achievements}
                                className={classes.text}
                                title="Achievements"
                            />
                        </div>
                    );
                })}
            </article>
        </>
    );
};
