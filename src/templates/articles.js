import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BlogPost extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
  }

  render() {
    const { title, headerImage, bodyText } = this.props.data.contentfulArticles

    return (
      <div>
        <h1>{title}</h1>
        <img src={headerImage.responsiveResolution.src} />
        <div
          dangerouslySetInnerHTML={{
            __html: bodyText.childMarkdownRemark.html,
          }}
        />
      </div>
    )
  }
}

export default BlogPost

// Note: this select a single article, given a slug
export const pageQuery = graphql`
  query articlesQuery($slug: String!) {
    contentfulArticles(slug: { eq: $slug }) {
      title
      slug
      bodyText {
        childMarkdownRemark {
          html
        }
      }
      headerImage {
        responsiveResolution(width: 300, height: 300) {
          src
        }
      }
    }
  }
`
