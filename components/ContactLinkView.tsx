import { FC } from 'react';
import { exhaustiveCheck } from 'ts-exhaustive-check';
import { ContactLink, CVContactItem } from '../models/Contact';
import { LinkIcon } from './LinkIcon';

const contactItemToLink = (item: CVContactItem): ContactLink => {
    const link: ContactLink = {
        name: '',
        type: 'link',
        url: '',
        icon: 'url',
    };

    switch (item.type) {
        case 'email':
            link.url = `mailto:${item.address}`;
            link.name = item.address;
            link.icon = 'email';
            break;
        case 'github':
            link.url = `https://github.com/${item.username}`;
            link.name = item.username;
            link.icon = 'github';
            break;
        case 'link':
            link.url = item.url;
            link.name = item.name;
            break;
        case 'linkedin':
            link.url = `https://linkedin.com/in/${item.username}`;
            link.name = item.username;
            link.icon = 'linkedin';
            break;
        case 'phone':
            link.url = `tel:${item.number}`;
            link.name = item.number;
            link.icon = 'phone';
            break;
        case 'telegram':
            link.url = `https://t.me/${item.username}`;
            link.name = `@${item.username}`;
            link.icon = 'telegram';
            break;
        case 'skype':
            link.url = `skype:${item.username}`;
            link.name = `${item.username}`;
            link.icon = 'skype';
            break;

        default:
            return exhaustiveCheck(item);
    }

    return link;
};

export const ContactLinkView: FC<{ data: CVContactItem }> = ({ data }) => {
    const link = contactItemToLink(data);
    return (
        <a target="_blank" href={link.url} rel="noopener noreferrer nofollow">
            <LinkIcon icon={link.icon} /> {link.name}
        </a>
    );
};
