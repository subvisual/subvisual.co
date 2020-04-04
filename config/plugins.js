const postCssCustomMedia = require("postcss-custom-media")

module.exports = root => [
  {
    resolve: "gatsby-plugin-sass",
    options: {
      postCssPlugins: [postCssCustomMedia()],
    },
  },
  "gatsby-plugin-react-helmet",
  "gatsby-transformer-yaml",
  {
    resolve: "gatsby-source-filesystem",
    options: {
      path: `${root}/src/data`,
    },
  },
  {
    resolve: "gatsby-source-filesystem",
    options: {
      path: `${root}/src/documents`,
    },
  },
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "images",
      path: `${root}/src/images`,
    },
  },
  {
    resolve: "gatsby-source-filesystem",
    options: {
      path: `${root}/src/pages/blog`,
    },
  },
  {
    resolve: "gatsby-transformer-remark",
    options: {
      plugins: [
        {
          resolve: "gatsby-remark-embed-video",
          options: {
            width: 980,
          },
        },
        "gatsby-remark-external-links",
        {
          resolve: "gatsby-remark-prismjs",
          options: {
            aliases: {
              sh: "bash",
              vimscript: "vim",
            },
          },
        },
        "gatsby-remark-responsive-iframe",
        "gatsby-remark-unwrap-images",
      ],
    },
  },
  "gatsby-transformer-sharp",
  "gatsby-plugin-sharp",
  {
    resolve: "gatsby-plugin-manifest",
    options: {
      name: "subvisual",
      short_name: "subvisual",
      start_url: "/",
      background_color: "#ffffff",
      theme_color: "#ffffff",
      display: "minimal-ui",
      icon: "src/images/subvisual-symbol-blue.svg",
    },
  },
  {
    resolve: "gatsby-plugin-react-svg",
    options: {
      rule: {
        include: /\.inline\.svg$/,
      },
    },
  },
  {
    resolve: "gatsby-plugin-google-analytics",
    options: {
      trackingId: "UA-63400449-1",
      head: false,
      anonymize: true,
      respectDNT: true,
    },
  },
  {
    resolve: "gatsby-plugin-netlify-cache",
    options: {
      cachePublic: true,
    },
  },
]
