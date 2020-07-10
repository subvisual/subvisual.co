import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"

import Planet from "./Planet"

const SPLASH_TRANSITION = {
  type: "spring",
  damping: 26,
  mass: 1,
  stiffness: 8,
  ease: [1, -0.05, 0.45, 0.8],
}

const getBackgroundInitial = () => ({ opacity: 1 })

const getBackgroundAnimate = ({ initial, variant }) => {
  if (variant === "splash") return initial

  return { opacity: 0 }
}

const Stage = ({ render }) => {
  const [spikes, setSpikes] = useState([])
  const [variant, setVariant] = useState("splash")

  useEffect(() => {
    setTimeout(() => setVariant("heroTittle"), 2000)
  })

  const [heroTittle] = spikes

  const spikeSetters = Array.from({ length: 1 }, (_, index) => (elem) => {
    if (!elem || elem === spikes[index]) return

    setSpikes([...spikes.slice(0, index), elem, ...spikes.slice(index + 1)])
  })

  const backgroundInitial = getBackgroundInitial()
  const backgroundAnimate = getBackgroundAnimate({ variant })

  return (
    <>
      {render({ spikes: spikeSetters })}
      <Planet heroTittle={heroTittle} variant={variant}>
        <Planet.Background
          initial={backgroundInitial}
          animate={backgroundAnimate}
          transition={SPLASH_TRANSITION}
        />
      </Planet>
    </>
  )
}

Stage.propTypes = {
  render: PropTypes.func.isRequired,
}

export default Stage