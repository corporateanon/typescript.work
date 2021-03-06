import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';
import { GetCV } from '../queries/__generated__/GetCV';
import { Divider } from './Divider';
import { Loading } from './Loading';
import { Period } from './Period';
import { ProfileView } from './ProfileView';
import { StringList } from './StringList';
import { theme, Theme } from './theme';

const useStyles = createUseStyles<Theme>(
    {
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
        },
        left: {
            maxWidth: 260,
            flex: 1,
        },
        right: {
            flex: 2,
            maxWidth: 645,
            minWidth: 300,
        },

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
    },
    { name: 'CVView' }
);

interface CVViewProps {
    data: GetCV;
    grantAccess?: boolean;
    sessionLoading?: boolean;
    onSignIn: () => void;
}
export const CVView: FC<CVViewProps> = ({
    data,
    grantAccess,
    onSignIn,
    sessionLoading,
}) => {
    const classes = useStyles();

    const cvItem = data?.cvCollection?.items[0];

    return (
        <>
            <div className={classes.root}>
                <aside className={classes.left}>
                    {sessionLoading ? (
                        <Loading />
                    ) : (
                        cvItem?.profile && (
                            <ProfileView
                                data={cvItem?.profile}
                                grantAccess={grantAccess}
                                onSignIn={onSignIn}
                            />
                        )
                    )}
                </aside>
                <article className={classes.right}>
                    {cvItem?.historyCollection?.items?.map((item, i) => {
                        return (
                            <div key={i}>
                                {!!i && <Divider />}
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
            </div>
        </>
    );
};
