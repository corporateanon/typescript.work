import { FC } from 'react';
import { createUseStyles } from 'react-jss';
import { Theme } from './theme';

const useStyles = createUseStyles<Theme>((theme) => ({
    root: {
        margin: '6rem auto',
        width: '30%',
        borderBottom: `1px dotted ${theme.colorShadow}`,
    },
}));

export const Divider: FC = () => {
    const classes = useStyles();
    return <div className={classes.root} />;
};
