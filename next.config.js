const { compose } = require('recompose');
const withGraphql = require('next-graphql-loader');
const withYaml = require('next-plugin-yaml');

const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
});

module.exports = compose(
    withGraphql,
    withYaml,
    withMDX
)({ pageExtensions: ['js', 'jsx', 'mdx', 'tsx', 'ts'] });
