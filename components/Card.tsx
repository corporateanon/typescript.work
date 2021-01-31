import { FC } from 'react';
import { createUseStyles } from 'react-jss';
import { Theme } from './theme';
import Image from 'next/image';
import Link from 'next/link';

const useStyles = createUseStyles<Theme>((theme) => ({
    root: {
        boxShadow: `0px 1px 2px 0px ${theme.colorShadow}`,
        padding: '1rem',
        display: 'inline-block',
        borderRadius: 3,
        width: '100%',
    },
    title: {
        margin: 0,
        fontWeight: 'bolder',
    },
    globalLink: {
        color: theme.colorText,
        '&:hover': { color: theme.colorText },
    },
    image: {
        marginLeft: '-1rem',
        marginRight: '-1rem',
    },
}));

export const Card: FC<{
    title?: string;
    secondaryText?: string;
    image?: string;
    supportingText?: string;
    href?: string;
    imageWidth?: number;
    imageHeight?: number;
}> = ({
    image,
    secondaryText,
    supportingText,
    title,
    href,
    imageHeight,
    imageWidth,
}) => {
    const classes = useStyles();
    const content = (
        <>
            <h4 className={classes.title}>{title}</h4>
            {secondaryText && <p>{secondaryText}</p>}
            {image && (
                <div className={classes.image}>
                    <Image
                        src={image}
                        width={imageWidth}
                        height={imageHeight}
                    ></Image>
                </div>
            )}
            {supportingText && <p>{supportingText}</p>}
        </>
    );
    return (
        <div className={classes.root}>
            {href ? (
                <Link href={href}>
                    <a className={classes.globalLink}>{content}</a>
                </Link>
            ) : (
                content
            )}
        </div>
    );
};
