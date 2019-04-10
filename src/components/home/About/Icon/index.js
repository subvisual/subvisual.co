import React from "react"
import PropTypes from "prop-types"

import Planet from "../../../Planet"
import colorCodes from "../../../colors"

import "./index.module.css"

const Icon = ({ color, planetCodeName, planetMorph }) => {
  const colorCode = colorCodes[color]

  return (
    <div styleName="root">
      <svg viewBox="0 0 43 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="37.432" cy="5.776" rx="5.375" ry="5.147" fill="none" />
        <path
          d="M25.6 13.616h.56L25.6 3.76c-3.08-1.68-7.448-2.52-10.864-2.52C7.064 1.24.904 5.16.904 12.552c0 12.208 19.208 11.592 19.208 21.728 0 4.816-3.36 6.72-6.552 6.72-6.216 0-10.192-5.376-12.04-12.656H.96l.56 10.416c3.08 1.68 7.952 2.8 11.984 2.8 7.504 0 14.392-3.808 14.392-12.432 0-12.712-19.208-12.544-19.208-22.12 0-3.696 2.856-5.208 6.104-5.208 5.264 0 8.96 5.768 10.808 11.816z"
          fill={colorCode}
        />
      </svg>
      <div styleName="planet">
        <Planet
          hoveringMin={5}
          hoveringMax={10}
          codeName={planetCodeName}
          morph={planetMorph}
          color={color}
          hovering
        />
      </div>
    </div>
  )
}

Icon.propTypes = {
  color: PropTypes.string.isRequired,
  planetCodeName: PropTypes.string.isRequired,
  planetMorph: PropTypes.func,
}

Icon.defaultProps = {
  planetMorph: () => {},
}

export default Icon
