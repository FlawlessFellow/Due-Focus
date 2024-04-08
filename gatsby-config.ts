import type { GatsbyConfig } from 'gatsby';

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
    ],
};

export default config;
