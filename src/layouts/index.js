import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.scss'

const headerStyle1 = {
  background: 'rebeccapurple',
  marginBottom: '1.45rem',
}
const headerStyle2 = {
  margin: '0 auto',
  maxWidth: 960,
  padding: '1.45rem 1.0875rem',
}
const header1Style = { margin: 0 }
const headerLinkStyle = {
  color: 'white',
  textDecoration: 'none',
}

const Header = () => (
  <div style={headerStyle1}>
    <div style={headerStyle2}>
      <h1 style={header1Style}>
        <Link to="/" style={headerLinkStyle}>
          Gatsby Articles 101
        </Link>
      </h1>
    </div>
  </div>
)

const bodyStyle = {
  margin: '0 auto',
  maxWidth: 960,
  padding: '0px 1.0875rem 1.45rem',
  paddingTop: 0,
}
const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <title>Gatsby Articles Starter</title>
      <meta description="Sample" />
      <meta keywords="sample, something" />
    </Helmet>
    <Header />
    <div style={bodyStyle}>{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
