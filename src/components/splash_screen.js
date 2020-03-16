import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { disablePageScroll, enablePageScroll } from "scroll-lock"
import _uniqueId from "lodash/uniqueId"

import styles from "./splash_screen.module.css"

const SplashScreen = ({ lockScrollFor, onHide, morph, showFor }) => {
  const [showing, setShowing] = useState(true)
  const radialUUID = _uniqueId("splash-screen-radial-")
  const rootUUID = _uniqueId("splash-screen-")
  const hide = () => {
    setShowing(false)
    onHide()
  }

  useEffect(() => {
    disablePageScroll(document.documentElement)

    setTimeout(hide, showFor)
    setTimeout(() => enablePageScroll(document.documentElement), lockScrollFor)
  }, [])

  if (!showing) return null

  return (
    <>
      <noscript>
        <style>
          {`
          #${rootUUID} {
            display: none
          }
        `}
        </style>
      </noscript>
      <div id={rootUUID} className={styles.root}>
        <div className={styles.splash} {...morph}>
          <div className={styles.logo}>
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 495 84"
            >
              <ellipse
                cx="268.255"
                cy="11.465"
                rx="10.895"
                ry="10.434"
                fill={`url(#${radialUUID})`}
              />
              <path
                d="M50.06 27.357h1.135L50.059 7.378C43.816 3.973 34.962 2.27 28.038 2.27 12.486 2.27 0 10.216 0 25.2c0 24.746 38.935 23.497 38.935 44.043 0 9.762-6.81 13.622-13.28 13.622-12.6 0-20.66-10.897-24.406-25.654H.114l1.135 21.113C7.492 81.73 17.368 84 25.54 84c15.211 0 29.174-7.719 29.174-25.2 0-25.768-38.936-25.427-38.936-44.838 0-7.492 5.79-10.557 12.373-10.557 10.67 0 18.162 11.692 21.909 23.952zm49.984 6.697v36.892c-2.27 1.93-5.562 4.54-10.783 4.54-4.087 0-6.13-2.724-6.13-7.15V24.972h-2.043l-23.611 2.724v1.135c6.016.568 6.697 1.022 6.697 5.222v32.919C64.174 79.46 71.325 84 79.725 84c8.287 0 15.098-5.108 20.319-11.919h.568L101.066 84h1.135l23.497-2.724V80.14c-6.016-.568-6.697-1.022-6.697-5.222V24.973h-2.043l-25.881 2.724v1.135c8.286.568 8.967 1.022 8.967 5.222zm51.232-.681h-.567L151.276 0h-1.135l-24.519 2.724V3.86c6.016.568 6.698 1.022 6.698 5.222v74.351h1.135l9.194-6.243c5.789 5.334 12.827 6.81 18.616 6.81 15.892 0 28.379-11.238 28.379-29.514 0-17.026-8.514-29.513-22.816-29.513-6.811 0-11.919 3.292-15.552 8.4zm6.811-1.59c6.47 0 11.578 7.039 11.578 23.612 0 14.416-2.724 27.016-9.989 27.016-3.065 0-8.4-1.249-8.4-13.395V34.508c2.157-1.816 4.427-2.724 6.811-2.724zm36.197 2.839l21 48.81h9.875l17.822-48.13c1.703-4.426 2.951-7.037 8.4-8.059v-1.135h-22.249v1.135c12.26.681 13.849 3.973 12.26 8.4l-12.26 33.033h-.227l-13.054-33.033c-1.589-3.973-1.135-7.719 5.449-8.4v-1.135h-33.714v1.135c3.519.454 5.109 3.633 6.698 7.379zm83.964 42.794V24.973h-1.135l-24.519 2.724v1.135c6.016.568 6.697 1.022 6.697 5.222v43.362c0 3.292-.681 3.746-6.697 4.314v1.135h32.351V81.73c-6.016-.568-6.697-1.022-6.697-4.314zm48.886-34.281h1.136l-1.136-14.643c-4.54-2.157-11.805-3.519-17.14-3.519-15.211 0-21.908 7.492-21.908 16.573 0 20.66 29.854 19.978 29.854 33.373 0 4.995-3.633 7.946-9.422 7.946-8.627 0-16.119-5.903-19.865-18.162h-1.135l1.249 15.324c4.54 2.27 13.281 3.973 19.184 3.973 14.529 0 23.497-7.038 23.497-17.822 0-19.41-29.06-18.73-29.06-33.146 0-4.427 2.611-6.924 7.379-6.924 7.378 0 14.303 8.968 17.367 17.027zm48.602-9.081v36.892c-2.27 1.93-5.562 4.54-10.784 4.54-4.086 0-6.13-2.724-6.13-7.15V24.972h-2.043l-23.611 2.724v1.135c6.017.568 6.698 1.022 6.698 5.222v32.919c0 12.487 7.151 17.027 15.551 17.027 8.286 0 15.097-5.108 20.319-11.919h.567l.455 11.92h1.135l23.497-2.724V80.14c-6.016-.568-6.697-1.022-6.697-5.222V24.973h-2.044l-25.881 2.724v1.135c8.287.568 8.968 1.022 8.968 5.222zm77.34 41.659V42.341c.227-9.65-7.719-17.368-21.795-17.368-16.346 0-25.54 12.146-25.54 18.616 0 4.314 3.519 5.903 7.265 5.903 4.2 0 7.151-2.157 7.151-4.768 0-3.292-6.697-4.427-6.697-8.967 0-4.427 4.767-7.152 9.535-7.152 8.059 0 11.124 6.13 11.124 12.487v11.465c-24.632 1.475-30.081 11.01-30.081 18.048 0 7.492 4.881 13.395 13.508 13.395 6.811 0 12.487-3.405 16.346-9.081h.227v1.362c0 4.2 2.951 7.719 9.422 7.719 6.47 0 12.259-2.951 16.913-6.697l-.113-.908c-1.476.908-3.292 1.93-4.654 1.93-1.703 0-2.611-1.022-2.611-2.612zm-18.957-22.021v20.092c-1.476.908-2.838 1.816-4.881 1.816-3.632 0-5.903-2.61-5.903-9.308 0-8.514 3.86-11.692 10.784-12.6zm53.309 23.724V0h-1.135l-24.519 2.724V3.86c6.016.568 6.697 1.022 6.697 5.222v68.335c0 3.292-.681 3.746-6.697 4.314v1.135h32.351V81.73c-6.016-.568-6.697-1.022-6.697-4.314z"
                fill="#2421AB"
              />
              <defs>
                <radialGradient
                  id={radialUUID}
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="rotate(128.89 136.746 67.995) scale(17.323 18.2953)"
                >
                  <stop stopColor="#2421AB" stopOpacity=".6" />
                  <stop offset="1" stopColor="#2421AB" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </>
  )
}

SplashScreen.propTypes = {
  lockScrollFor: PropTypes.number.isRequired,
  morph: PropTypes.func.isRequired,
  onHide: PropTypes.func.isRequired,
  showFor: PropTypes.number.isRequired,
}

export default SplashScreen
