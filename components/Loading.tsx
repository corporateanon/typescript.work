import { createUseStyles } from 'react-jss';
import { ClipLoader } from 'react-spinners';
import { Theme } from './theme';

const useStyles = createUseStyles<Theme>((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& > span': {
            borderColor: theme.colorPrimary,
            borderBottomColor: 'transparent',
        },
    },
}));

export const Loading = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <ClipLoader />
        </div>
    );
};
