import React from "react"
import PropTypes from "prop-types"
import { motion } from "framer-motion"

import Planet from "../../../planet"

import styles from "./animated_letters.module.scss"

const dragVariants = {
  in: {
    opacity: 1,
    transition: {
      ease: "easeIn",
      delay: 1.5,
      delayChildren: 1.5,
      staggerChildren: 0.04,
    },
  },
  out: {
    opacity: 0,
  },
}

const letterVariants = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
}

const renderAnimatedLetters = string =>
  Array.from(string).map((letter, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <motion.span key={index} variants={letterVariants}>
      {letter}
    </motion.span>
  ))

const renderPlanet = ({ hidden, morph }) => {
  if (hidden) return null

  const planet = (
    <Planet
      morph={morph}
      color="blue"
      hoverAnimation={{
        delay: 4.8,
        duration: 1.5,
        endYAt: -4,
      }}
      hovering
    />
  )

  return planet
}

const HeroTitleAnimatedLetters = ({ hidden, planetMorph }) => (
  <motion.span
    variants={dragVariants}
    animate={hidden ? "out" : "in"}
    key="without-files"
  >
    {renderAnimatedLetters("We nurture ")}
    <span className={styles.ideas}>
      <motion.span className={styles.tittleless} variants={letterVariants}>
        i
      </motion.span>
      <span className={styles.planet}>
        {renderPlanet({ hidden, morph: planetMorph })}
      </span>
      {renderAnimatedLetters("deas")}
    </span>
    <span className={styles.glue}>
      {renderAnimatedLetters(" that empower ")}
    </span>
    {renderAnimatedLetters("people")}
  </motion.span>
)

HeroTitleAnimatedLetters.propTypes = {
  hidden: PropTypes.bool.isRequired,
  planetMorph: PropTypes.func.isRequired,
}

export default HeroTitleAnimatedLetters
