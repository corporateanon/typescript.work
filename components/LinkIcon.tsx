import { FC } from 'react';
import { ContactIcon } from '../models/CV';
import { Email, Github, Globe, Linkedin, Phone, Telegram } from './Icons';

export const LinkIcon: FC<{ icon: ContactIcon }> = ({ icon }) => {
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
