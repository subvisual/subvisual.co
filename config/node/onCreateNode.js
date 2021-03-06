const path = require("path")
const isString = require("lodash/isString")
const isURL = require("@subvisual/utils/isURL")

const resolveBlogPostCover = ({ cover, node }) => {
  const { fileAbsolutePath } = node

  if (isURL(cover) || path.isAbsolute(cover)) return cover

  const dirname = path.dirname(fileAbsolutePath)

  return path.resolve(dirname, cover)
}

const resolveBlogPostSEOImage = ({ seoImage, node }) => {
  const { fileAbsolutePath } = node

  if (isURL(seoImage) || path.isAbsolute(seoImage)) return seoImage

  const dirname = path.dirname(fileAbsolutePath)

  return path.resolve(dirname, seoImage)
}

const prepareBlogPostCover = ({ node }) => {
  const { frontmatter } = node
  const { cover } = frontmatter

  if (isString(cover)) return resolveBlogPostCover({ cover, node })

  return cover
}

const prepareBlogPostSEOImage = ({ node }) => {
  const { frontmatter } = node
  const { seoImage } = frontmatter

  if (isString(seoImage)) return resolveBlogPostSEOImage({ seoImage, node })

  return seoImage
}

const prepareBlogPostSlug = ({ node }) => {
  const { frontmatter } = node

  // If `path` is not defined in this post's markdown, exit early
  if (!frontmatter.path) return undefined

  const urlBase = process.env.URL || "http://localhost:8000"
  const urlPath = path.posix.join("/blog", frontmatter.path)

  return new URL(urlPath, urlBase).toString()
}

module.exports = async ({ node, actions }) => {
  // Skip this logic unless the node was created by processing a markdown file
  if (node.internal.type !== "MarkdownRemark") return

  const { createNodeField } = actions
  const cover = prepareBlogPostCover({ node })
  const seoImage = prepareBlogPostSEOImage({ node })
  const slug = prepareBlogPostSlug({ node })

  createNodeField({ node, name: "cover", value: cover })
  createNodeField({ node, name: "seoImage", value: seoImage })
  createNodeField({ node, name: "slug", value: slug })
}
