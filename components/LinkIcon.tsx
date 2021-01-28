import { FC } from 'react';
import { ContactIcon } from '../models/Contact';
import {
    Email,
    Github,
    Globe,
    Linkedin,
    Phone,
    Skype,
    Telegram,
} from './Icons';

export const LinkIcon: FC<{ icon: ContactIcon }> = ({ icon }) => {
    const iconMap: { [k in ContactIcon]: any } = {
        email: Email,
        github: Github,
        linkedin: Linkedin,
        phone: Phone,
        telegram: Telegram,
        url: Globe,
        skype: Skype,
    };
    const IconComponent = iconMap[icon] ?? Globe;
    return <IconComponent />;
};
