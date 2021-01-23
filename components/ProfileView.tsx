import { FC } from 'react';
import {
    ContactIcon,
    ContactLink,
    CVContactItem,
    CVProfile,
} from '../models/CV';
import { exhaustiveCheck } from 'ts-exhaustive-check';
import { Email, Github, Globe, Linkedin, Phone, Telegram } from './Icons';

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

        default:
            return exhaustiveCheck(item);
    }

    return link;
};

const LinkIcon: FC<{ icon: ContactIcon }> = ({ icon }) => {
    const iconMap: { [k in ContactIcon]: any } = {
        email: Email,
        github: Github,
        linkedin: Linkedin,
        phone: Phone,
        telegram: Telegram,
        url: Globe,
    };
    const IconComponent = iconMap[icon] ?? Globe;
    return <IconComponent />;
};

const ContactLinkView: FC<{ data: CVContactItem }> = ({ data }) => {
    const link = contactItemToLink(data);
    return (
        <a target="_blank" href={link.url} rel="noopener noreferrer nofollow">
            <LinkIcon icon={link.icon} /> {link.name}
        </a>
    );
};

interface ProfileViewProps {
    data: CVProfile;
}

export const ProfileView: FC<ProfileViewProps> = ({ data }) => {
    return (
        <article>
            <h4>{data.name}</h4>
            <div>
                <ul>
                    {data.contacts?.map((contactItem, i) => (
                        <li>
                            <ContactLinkView data={contactItem} key={i} />
                        </li>
                    ))}
                </ul>
            </div>
        </article>
    );
};
