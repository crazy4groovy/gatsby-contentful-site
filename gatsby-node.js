const path = require('path')

exports.createPages = async({graphql, boundActionCreators}) => {
  const result = await graphql(`{
    allContentfulArticles (limit: 1000) {
      edges {
        node {
          id
          slug
        }
      }
    }
  }`)

  if (result.errors) {
    throw result.errors
  }

  const articlesTemplate = path.resolve('src/templates/articles.js')

  result
    .data
    .allContentfulArticles
    .edges
    .forEach(({node}) => {
      boundActionCreators.createPage({
        component: articlesTemplate,
        context: {
          slug: node.slug
        },
        path: node.slug
      })
    })
}
