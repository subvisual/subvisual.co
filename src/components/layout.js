import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import classnames from "classnames"

import Logo from "./logo"
import Header from "./layout/header"
import Footer from "./layout/footer"

import styles from "./layout.module.css"

const Layout = ({ children, color, renderHeaderLogo }) => {
  const className = classnames(styles.root, styles[color])

  return (
    <div className={className}>
      <Helmet>
        <link rel="stylesheet" href="https://use.typekit.net/dpm7mos.css" />
      </Helmet>
      <Header renderLogo={renderHeaderLogo} />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  renderHeaderLogo: PropTypes.func,
}

Layout.defaultProps = {
  renderHeaderLogo: () => <Logo color="blue" />,
}

export default Layout
