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
export interface ContactSkype {
    type: 'skype';
    username: string;
}

export type ContactIcon =
    | 'email'
    | 'github'
    | 'url'
    | 'linkedin'
    | 'phone'
    | 'telegram'
    | 'skype';

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
    | ContactTelegram
    | ContactSkype;
