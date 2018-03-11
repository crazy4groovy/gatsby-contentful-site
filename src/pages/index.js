import React from 'react'
import Link from 'gatsby-link'

const BlogPost = ({ node }) => {
  return (
    <li>
      <img src={node.headerImage.responsiveResolution.src} />
      <Link to={node.slug}>
        <h3>{node.title}</h3>
      </Link>
      <div>{node.bodyText.childMarkdownRemark.excerpt}</div>
    </li>
  )
}
const IndexPage = ({ data }) => (
  <ul className="blog-post">
    {data.allContentfulArticles.edges.map(({ node }) => (
      <BlogPost node={node} />
    ))}
  </ul>
)

export default IndexPage

export const pageQuery = graphql`
  query pageQuery {
    allContentfulArticles(
      filter: { node_locale: { eq: "en-US" } }
      sort: { fields: [releaseDate], order: DESC }
    ) {
      edges {
        node {
          title
          slug
          bodyText {
            childMarkdownRemark {
              excerpt
            }
          }
          headerImage {
            responsiveResolution(width: 300, height: 300) {
              src
            }
          }
        }
      }
    }
  }
`
