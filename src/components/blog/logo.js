import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import classnames from "classnames"

import styles from "./logo.module.css"

const BlogLogo = ({ color }) => {
  const className = classnames(styles.root, styles[color])

  return (
    <Link to="/" className={className}>
      <svg
        viewBox="0 0 148 16"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M1.68 1.96v12.08c0 .58-.12.66-1.18.76v.2h5.86v-.2c-1.06-.1-1.18-.18-1.18-.76V1.96c0-.58.12-.66 1.18-.76V1H.5v.2c1.06.1 1.18.18 1.18.76zM7.04 14.8v.2h5.7v-.2c-1.06-.1-1.18-.18-1.18-.76V7.1c.42-.42 1-.96 1.74-.96.86 0 1.24.54 1.24 1.48v6.42c0 .58-.12.66-.94.76v.2h5.46v-.2c-1.06-.1-1.18-.18-1.18-.76V7.8c0-2.2-1.26-3-2.74-3-1.46 0-2.66.9-3.58 2.1h-.1l.1-2.1h-.2l-4.32.48v.2c1.06.1 1.18.18 1.18.92v7.64c0 .58-.12.66-1.18.76zM26.404 8h.2l-.2-2.58c-.8-.38-2.08-.62-3.02-.62-2.68 0-3.86 1.32-3.86 2.92 0 3.64 5.26 3.52 5.26 5.88 0 .88-.64 1.4-1.66 1.4-1.52 0-2.84-1.04-3.5-3.2h-.2l.22 2.7c.8.4 2.34.7 3.38.7 2.56 0 4.14-1.24 4.14-3.14 0-3.42-5.12-3.3-5.12-5.84 0-.78.46-1.22 1.3-1.22 1.3 0 2.52 1.58 3.06 3zm2.043-5.56c0 1.06.86 1.6 1.92 1.6 1.08 0 1.92-.54 1.92-1.6 0-1.08-.84-1.64-1.92-1.64-1.06 0-1.92.56-1.92 1.64zm3.68 11.6V4.8h-.2l-4.32.48v.2c1.06.1 1.18.18 1.18.92v7.64c0 .58-.12.66-1.18.76v.2h5.7v-.2c-1.06-.1-1.18-.18-1.18-.76zm11.635-.44V.4h-.2l-4.32.48v.2c1.06.1 1.18.18 1.18.92v3.32a3.81 3.81 0 00-1.92-.52c-2.56 0-4.84 1.98-4.84 5.2 0 3 1.5 5.2 4.02 5.2 1.2 0 2.1-.58 2.74-1.48h.1l.08 1.48h.2l4.14-.48v-.2c-1.06-.1-1.18-.18-1.18-.92zm-4.54.4c-1.14 0-2.04-1.24-2.04-4.16 0-2.86.48-4.84 1.76-4.84.54 0 1.48.3 1.48 2.44v6.08c-.38.3-.78.48-1.2.48zm12.76.12c-1.64 0-3.34-1.18-3.34-4.52v-.28h5.74c.1-.42.14-.82.14-1.2 0-2.42-1.9-3.32-3.94-3.32-2.5 0-5.28 1.9-5.28 5.3 0 2.7 1.72 5.1 5.08 5.1 2.58 0 3.78-1.48 4.1-1.84l-.08-.16c-.54.46-1.38.92-2.42.92zM50.483 5c.6 0 1.3.48 1.3 2.24 0 .24-.06 1.24-.22 1.88h-2.92c.08-2.7.72-4.12 1.84-4.12zm18.569.22h.2l-.2-3.52c-1.1-.6-2.66-.9-3.88-.9-2.74 0-4.94 1.4-4.94 4.04 0 4.36 6.86 4.14 6.86 7.76 0 1.72-1.2 2.4-2.34 2.4-2.22 0-3.64-1.92-4.3-4.52h-.2l.2 3.72c1.1.6 2.84 1 4.28 1 2.68 0 5.14-1.36 5.14-4.44 0-4.54-6.86-4.48-6.86-7.9 0-1.32 1.02-1.86 2.18-1.86 1.88 0 3.2 2.06 3.86 4.22zm8.807 1.18v6.5c-.4.34-.98.8-1.9.8-.72 0-1.08-.48-1.08-1.26V4.8h-.36l-4.16.48v.2c1.06.1 1.18.18 1.18.92v5.8c0 2.2 1.26 3 2.74 3 1.46 0 2.66-.9 3.58-2.1h.1l.08 2.1h.2l4.14-.48v-.2c-1.06-.1-1.18-.18-1.18-.92V4.8h-.36l-4.56.48v.2c1.46.1 1.58.18 1.58.92zm9.026-.12h-.1l.1-5.88h-.2l-4.32.48v.2c1.06.1 1.18.18 1.18.92v13.1h.2l1.62-1.1c1.02.94 2.26 1.2 3.28 1.2 2.8 0 5-1.98 5-5.2 0-3-1.5-5.2-4.02-5.2-1.2 0-2.1.58-2.74 1.48zm1.2-.28c1.14 0 2.04 1.24 2.04 4.16 0 2.54-.48 4.76-1.76 4.76-.54 0-1.48-.22-1.48-2.36V6.48c.38-.32.78-.48 1.2-.48zm6.378.5l3.7 8.6h1.74l3.14-8.48c.3-.78.52-1.24 1.48-1.42V5h-3.92v.2c2.16.12 2.44.7 2.16 1.48l-2.16 5.82h-.04l-2.3-5.82c-.28-.7-.2-1.36.96-1.48V5h-5.94v.2c.62.08.9.64 1.18 1.3zm11.113-4.06c0 1.06.86 1.6 1.92 1.6 1.08 0 1.92-.54 1.92-1.6 0-1.08-.84-1.64-1.92-1.64-1.06 0-1.92.56-1.92 1.64zm3.68 11.6V4.8h-.2l-4.32.48v.2c1.06.1 1.18.18 1.18.92v7.64c0 .58-.12.66-1.18.76v.2h5.7v-.2c-1.06-.1-1.18-.18-1.18-.76zM117.869 8h.2l-.2-2.58c-.8-.38-2.08-.62-3.02-.62-2.68 0-3.86 1.32-3.86 2.92 0 3.64 5.26 3.52 5.26 5.88 0 .88-.64 1.4-1.66 1.4-1.52 0-2.84-1.04-3.5-3.2h-.2l.22 2.7c.8.4 2.34.7 3.38.7 2.56 0 4.14-1.24 4.14-3.14 0-3.42-5.12-3.3-5.12-5.84 0-.78.46-1.22 1.3-1.22 1.3 0 2.52 1.58 3.06 3zm8.563-1.6v6.5c-.4.34-.98.8-1.9.8-.72 0-1.08-.48-1.08-1.26V4.8h-.36l-4.16.48v.2c1.06.1 1.18.18 1.18.92v5.8c0 2.2 1.26 3 2.74 3 1.46 0 2.66-.9 3.58-2.1h.1l.08 2.1h.2l4.14-.48v-.2c-1.06-.1-1.18-.18-1.18-.92V4.8h-.36l-4.56.48v.2c1.46.1 1.58.18 1.58.92zm13.626 7.34V7.86c.04-1.7-1.36-3.06-3.84-3.06-2.88 0-4.5 2.14-4.5 3.28 0 .76.62 1.04 1.28 1.04.74 0 1.26-.38 1.26-.84 0-.58-1.18-.78-1.18-1.58 0-.78.84-1.26 1.68-1.26 1.42 0 1.96 1.08 1.96 2.2v2.02c-4.34.26-5.3 1.94-5.3 3.18 0 1.32.86 2.36 2.38 2.36 1.2 0 2.2-.6 2.88-1.6h.04v.24c0 .74.52 1.36 1.66 1.36s2.16-.52 2.98-1.18l-.02-.16c-.26.16-.58.34-.82.34-.3 0-.46-.18-.46-.46zm-3.34-3.88v3.54c-.26.16-.5.32-.86.32-.64 0-1.04-.46-1.04-1.64 0-1.5.68-2.06 1.9-2.22zm9.393 4.18V.4h-.2l-4.32.48v.2c1.06.1 1.18.18 1.18.92v12.04c0 .58-.12.66-1.18.76v.2h5.7v-.2c-1.06-.1-1.18-.18-1.18-.76z"
          fill="currentColor"
        />
      </svg>
    </Link>
  )
}

BlogLogo.propTypes = {
  color: PropTypes.string,
}

export default BlogLogo
