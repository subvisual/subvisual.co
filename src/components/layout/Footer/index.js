import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import CallToAction from "../../CallToAction"
import LoadPlaceholder from "../../LoadPlaceholder"
import Location from "./Location"
import Logo from "../../Logo"
import SocialLinks from "./SocialLinks"
import Text from "../../Text"
import "./index.module.css"

const Footer = ({ data }) => (
  <footer styleName="root">
    <LoadPlaceholder delay={-1}>
      {onLoad => (
        <>
          <div styleName="blue">
            <div styleName="content">
              <div styleName="logo">
                <Logo color="white" />
              </div>
              <div styleName="callToAction">
                <p>
                  <Text color="white">Ready to bring your ideas to life?</Text>{" "}
                  <CallToAction color="white">Let's talk.</CallToAction>
                </p>
              </div>
              <div styleName="locations">
                <div styleName="location">
                  <Location
                    align="left"
                    name="Braga, Portugal"
                    image="braga"
                    geoUrl="geo:41.543243,-8.399365"
                    mapsUrl="https://goo.gl/maps/ddvtn1Ez8N72"
                  />
                </div>
                <div styleName="location">
                  <Location
                    align="right"
                    name="Boston, USA"
                    image="boston"
                    geoUrl="geo:42.356742,-71.057583"
                    mapsUrl="https://goo.gl/maps/zouxb7phyLz"
                  />
                </div>
              </div>
              <div styleName="social">
                <div styleName="socialLabel">
                  <Text size="small" color="white">
                    Follow us
                  </Text>
                </div>
                <SocialLinks />
              </div>
              <p>
                <Text size="small" color="purple">
                  Handcrafted by Subvisual © {new Date().getFullYear()}
                </Text>
              </p>
            </div>
          </div>
          <div styleName="white">
            <div styleName="content">
              <a
                href={data.norte2020Doc.publicURL}
                target="_blank"
                rel="noopener noreferrer"
                download={data.norte2020Doc.base}
              >
                <Img
                  fadeIn={true}
                  onLoad={onLoad}
                  fluid={data.norte2020Logos.childImageSharp.fluid}
                />
              </a>
            </div>
          </div>
        </>
      )}
    </LoadPlaceholder>
  </footer>
)

const query = graphql`
  {
    norte2020Logos: file(relativePath: { regex: "/norte-2020-logos.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 650, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    norte2020Doc: file(
      relativePath: { regex: "/ficha-projeto-site-subvisual.pdf/" }
    ) {
      base
      publicURL
    }
  }
`

export default () => (
  <StaticQuery query={query} render={data => <Footer data={data} />} />
)
