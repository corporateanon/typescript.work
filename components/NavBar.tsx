import { FC } from 'react';
import { createUseStyles } from 'react-jss';
import { Theme } from './theme';

const useStyles = createUseStyles<Theme>((theme) => ({
    root: {
        width: '100%',
        maxWidth: theme.pageWidth,
        margin: 'auto',
    },
}));

export const NavBar: FC = ({ children }) => {
    const classes = useStyles();
    return <nav className={`clearfix ${classes.root}`}>{children}</nav>;
};
