export interface ContactLinkedin {
    type: 'linkedin';
    username: string;
}
export interface ContactGithub {
    type: 'github';
    username: string;
}
export interface ContactTelegram {
    type: 'telegram';
    username: string;
}
export interface ContactPhone {
    type: 'phone';
    number: string;
}
export interface ContactEmail {
    type: 'email';
    address: string;
}

export type ContactIcon =
    | 'email'
    | 'github'
    | 'url'
    | 'linkedin'
    | 'phone'
    | 'telegram';

export interface ContactLink {
    type: 'link';
    name: string;
    url: string;
    icon: ContactIcon;
}

//--------

export type CVContactItem =
    | ContactEmail
    | ContactGithub
    | ContactLink
    | ContactLinkedin
    | ContactPhone
    | ContactTelegram;

export interface CVProfile {
    name: string;
    nameLocal?: string;
    contacts?: CVContactItem[];
}

export interface CVHistoryItem {
    start?: string;
    end?: string;
    title?: string;
    company?: {
        name: string;
        url?: string;
    };
    text?: string;
}

export interface CVData {
    profile: CVProfile;
    history: CVHistoryItem[];
}
