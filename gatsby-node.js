const path = require(`path`);
const slash = require(`slash`);

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    return graphql(`
        {
            allContentfulPost(limit: 200) {
                edges {
                    node {
                        md
                    }
                }
            }
        }
    `).then((result) => {
        if (result.errors) {
            console.log(result.errors);
        }
        const blogPostTemplate = path.resolve('./src/templates/PostTemplate.tsx');
        result.data.allContentfulPost.edges.forEach((edge) => {
            createPage({
                path: `/blog/${edge.node.md}/`,
                component: slash(blogPostTemplate),
                context: {
                    slug: edge.node.md,
                },
            });
        });
    });
};
