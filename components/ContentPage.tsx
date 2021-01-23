import { FC } from 'react';
import { createUseStyles } from 'react-jss';
import { Theme } from './theme';

const WIDTH = 900;
const useStyles = createUseStyles<Theme>((theme) => ({
    root: {
        color: theme.colorText,
        fontSize: 14,
        marginBottom: '2rem',
        marginTop: '2rem',
        width: '100%',
        maxWidth: WIDTH,
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '4rem',
        [`@media (max-width: ${WIDTH + 1}px)`]: {
            margin: 0,
            boxShadow: 'none',
        },
        backgroundColor: theme.colorPaper,
        boxShadow: `0px 0px 5px 2px ${theme.colorShadow}`,
    },
}));

export const ContentPage: FC = ({ children }) => {
    const classes = useStyles();
    return <main className={classes.root}>{children}</main>;
};
