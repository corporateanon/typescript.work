import { FC } from 'react';
import { createUseStyles } from 'react-jss';
import { Theme } from './theme';

const WIDTH = 900;
const VERTICAL_MARGIN_REM = 2;
const useStyles = createUseStyles<Theme>((theme) => ({
    root: {
        color: theme.colorText,
        fontSize: 14,
        marginBottom: `${VERTICAL_MARGIN_REM}rem`,
        marginTop: `${VERTICAL_MARGIN_REM}rem`,
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
        minHeight: `calc(100vh - ${VERTICAL_MARGIN_REM * 2}rem)`,
    },
    bordered: {
        boxShadow: `0px 0px 5px 2px ${theme.colorShadow}`,
    },
}));

export const ContentPage: FC<{
    bordered?: boolean;
}> = ({ children, bordered }) => {
    const classes = useStyles();
    const className = `clearfix ${classes.root} ${
        bordered ? classes.bordered : ''
    }`;
    return <main className={className}>{children}</main>;
};
