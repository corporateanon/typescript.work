import React, { FC } from 'react';
import { CVData } from '../models/CV';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { createUseStyles } from 'react-jss';
import { theme, Theme } from './theme';
import { ProfileView } from './ProfileView';

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
    period: {
        border: '1px solid #aaa',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        borderRadius: 4,
        fontSize: '1.3rem',
        marginRight: '1rem',
        marginLeft: '1rem',
        verticalAlign: 'middle',
        whiteSpace: 'nowrap',
    },
}));

interface CVViewProps {
    data: CVData;
}
export const CVView: FC<CVViewProps> = ({ data }) => {
    const classes = useStyles();
    return (
        <>
            <ProfileView data={data.profile} />
            <article className={classes.root}>
                {data.history.map((item, i) => {
                    return (
                        <div key={i}>
                            <h4>
                                <span>{item.title}</span>
                                {item.company ? (
                                    <>
                                        {' '}
                                        /{' '}
                                        <strong className={classes.company}>
                                            {item.company.url ? (
                                                <a
                                                    target="_blank"
                                                    href={item.company.url}
                                                >
                                                    {item.company.name}
                                                </a>
                                            ) : (
                                                item.company.name
                                            )}
                                        </strong>
                                    </>
                                ) : null}
                                <span className={classes.period}>
                                    {item.start} — {item.end}
                                </span>
                            </h4>
                            {item.text ? (
                                <div className={classes.text}>
                                    <ReactMarkdown plugins={[gfm]}>
                                        {item.text}
                                    </ReactMarkdown>
                                </div>
                            ) : null}
                        </div>
                    );
                })}
            </article>
        </>
    );
};
