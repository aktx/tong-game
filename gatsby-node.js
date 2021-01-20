exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const Slide = require.resolve(`./src/templates/slide.js`)

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___title] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.slug,
        component: Slide,
        context: {
          // additional data can be passed via context
          slug: node.frontmatter.slug,
        },
      })
    })
  })
}
