import { FC } from 'react';

export const StringList: FC<{
    title?: string;
    items?: string[];
    className?: string;
}> = ({ items, title, className }) => {
    if (!items || !items.length) {
        return null;
    }
    return (
        <div className={className}>
            {title && (
                <p>
                    <strong>{title}</strong>
                </p>
            )}
            {items && (
                <ul>
                    {items.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};
