import React from "react"

import CallToAction from "../../CallToAction"
import HelpingWith from "./HelpingWith"
import LookingFor from "./LookingFor"
import Portfolio from "./Portfolio"
import Subtitle from "../../Subtitle"
import Text from "../../Text"
import Title from "../../Title"
import Universe from "./Universe"

import "./index.module.css"

const Ventures = () => (
  <section styleName="root">
    <div styleName="content">
      <header styleName="header">
        <Title>Meaningful Ventures</Title>
      </header>
      <section styleName="section lookingFor">
        <Subtitle>Looking for</Subtitle>
        <LookingFor />
      </section>
      <section styleName="section helpingWith">
        <Subtitle>Helping with</Subtitle>
        <HelpingWith />
      </section>
      <div styleName="universe">
        <Universe />
      </div>
      <section styleName="section portfolio">
        <header styleName="portfolioHeader">
          <Subtitle>Portfolio</Subtitle>
        </header>
        <div styleName="portfolioContent">
          <Portfolio />
        </div>
      </section>
      <footer styleName="footer">
        <p>
          <Text size="large">Join our venture universe.</Text>
          <br />
          <CallToAction size="large">Let's talk</CallToAction>
        </p>
      </footer>
    </div>
  </section>
)

export default Ventures
