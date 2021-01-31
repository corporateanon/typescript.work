const de = require('dotenv');
de.config({ path: '.env.local' });

module.exports = {
    client: {
        includes: [
            './{pages,lib,components,models,queries,utils}/**/*.{ts,tsx,graphql}',
        ],
        service: {
            name: 'contentful',
            url: `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE}/environments/${process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT}`,
            // optional headers
            headers: {
                authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN}`,
            },
            // optional disable SSL validation check
            skipSSLValidation: true,
        },

        // service: {
        //     name: 'GitHub',
        //     localSchemaFile: './github.schema.graphql',
        // },
    },
};
