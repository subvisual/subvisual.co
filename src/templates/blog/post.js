import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import Body from "../../components/blog/post/body"
import Header from "../../components/blog/post/header"
import Layout from "../../components/layout"

import "../../common/base.scss"
import styles from "./post.module.scss"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { path: { eq: $slug } }) {
      html
      frontmatter {
        author {
          key
          name
        }
        date
        retina_cover
        title
      }
    }
  }
`

const BlogPostTemplate = ({ author, date, html, retinaCover, title }) => (
  <Layout>
    <div className={styles.root}>
      <article className={styles.article}>
        <header className={styles.header}>
          <Header {...{ author, date, retinaCover, title }} />
        </header>
        <section className={styles.body}>
          <Body html={html} />
        </section>
      </article>
    </div>
  </Layout>
)

BlogPostTemplate.propTypes = {
  author: PropTypes.object.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  html: PropTypes.string.isRequired,
  retinaCover: PropTypes.string,
  title: PropTypes.string.isRequired,
}

export default ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const { author, date, retina_cover: retinaCover, title } = frontmatter

  return (
    <BlogPostTemplate
      {...{ author, date: new Date(date), html, retinaCover, title }}
    />
  )
}
