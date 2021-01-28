import { DateTime } from 'luxon';

import { FC } from 'react';
import { createUseStyles } from 'react-jss';
import { Theme } from './theme';

const useStyles = createUseStyles<Theme>(() => ({
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

const dateToStr = (date?: string) => {
    return date ? DateTime.fromISO(date).toFormat('yyyy') : null;
};

export const Period: FC<{ start?: string; end?: string }> = ({
    start,
    end,
}) => {
    const classes = useStyles();
    const startStr = dateToStr(start) ?? '...';
    const endStr = dateToStr(end) ?? 'Present time';

    return (
        <span className={classes.period}>
            {startStr} — {endStr}
        </span>
    );
};
