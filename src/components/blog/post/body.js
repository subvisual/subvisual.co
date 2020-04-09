import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import BodyWrapper from "./body_wrapper"
import useUserAgent from "../../../utils/use_user_agent"
import {
  isChrome,
  isEdge,
  isMacOS,
  isSafari,
} from "../../../utils/user_agent_utils"

import "prismjs/themes/prism.css"
import styles from "./body.module.scss"

const PostBody = ({ html }) => {
  const userAgent = useUserAgent()
  const rootClassName = classNames(styles.root, {
    [styles.chrome]: isChrome(userAgent),
    [styles.edge]: isEdge(userAgent),
    [styles.macos]: isMacOS(userAgent),
    [styles.safari]: isSafari(userAgent),
  })
  console.log("is edge?", isEdge(userAgent))
  console.log("root className", rootClassName)

  return (
    <BodyWrapper>
      {/* eslint-disable react/no-danger */}
      <div
        className={rootClassName}
        dangerouslySetInnerHTML={{ __html: html }}
      />
      {/* eslint-enable react/no-danger */}
    </BodyWrapper>
  )
}

PostBody.propTypes = {
  html: PropTypes.string.isRequired,
}

export default PostBody
