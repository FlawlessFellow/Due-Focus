import type { GatsbyConfig } from 'gatsby';

const dotenv = require('dotenv');
if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}

const config: GatsbyConfig = {
    siteMetadata: {
        title: `My Gatsby Site`,
        siteUrl: `https://www.yourdomain.tld`,
    },

    graphqlTypegen: true,
    plugins: [
        'gatsby-plugin-image',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        'gatsby-plugin-sass',
        'gatsby-plugin-mdx',
        {
            resolve: `gatsby-plugin-webfonts`,
            options: {
                fonts: {
                    google: [
                        {
                            family: 'Montserrat',
                            variants: ['400', '500', '600', '700'],
                        },
                        {
                            family: 'Open Sans',
                            variants: ['400', '500', '600', '700'],
                        },
                    ],
                },
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './src/assets/images/',
            },
            __key: 'images',
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: './src/pages/',
            },
            __key: 'pages',
        },
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: `1dv2x2c2xnsp`,
                accessToken: '6_kRNutfDKKOERdwo1MC7WfssDwATAHhotZFQ3MSqA4',
            },
        },
    ],
};

export default config;
