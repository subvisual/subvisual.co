import React from "react"
import classNames from "classnames"
import { motion } from "framer-motion"

import Planet from "src/components/planet"
import useUserAgent from "src/utils/use_user_agent"
import { isLinux } from "src/utils/user_agent_utils"

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

const renderAnimatedLetters = (string) =>
  Array.from(string).map((letter, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <motion.span key={index} variants={letterVariants}>
      {letter}
    </motion.span>
  ))

const renderPlanet = () => {
  const planet = (
    <Planet
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

const HeroTitleAnimatedLetters = () => {
  const userAgent = useUserAgent()
  const className = classNames(styles.root, {
    [styles.linux]: isLinux(userAgent),
  })

  return (
    <motion.span
      className={className}
      variants={dragVariants}
      animate="in"
      key="without-files"
    >
      {renderAnimatedLetters("Always ")}
      <span className={styles.ideas}>
        {renderAnimatedLetters("look")}
        <motion.span className={styles.tittleless} variants={letterVariants}>
          i
        </motion.span>
        <span className={styles.planet}>{renderPlanet()}</span>
        {renderAnimatedLetters("ng")}
      </span>
      <span className={styles.glue}>
        {renderAnimatedLetters(" for talented ")}
      </span>
      {renderAnimatedLetters("people")}
    </motion.span>
  )
}

export default HeroTitleAnimatedLetters
