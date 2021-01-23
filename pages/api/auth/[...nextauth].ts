import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
    providers: [
        Providers.Auth0({
            clientId: process.env.AUTH0_ID,
            clientSecret: process.env.AUTH0_SECRET,
            domain: process.env.AUTH0_DOMAIN,
        }),
    ],
};

export default (req, res) => NextAuth(req, res, options);
