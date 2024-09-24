module.exports = {
  pathPrefix: "/igem-dna-sonify",
  flags: {
    DEV_SSR: true,
  },
  siteMetadata: {
    title: `iGEM 2024 DNA Sonify`,
    author: {
      name: `iGEM ShanghaiTech China & iGEM USTC China`,
      summary: `An iGEM education project.`,
    },
    openGraphImage: `open-graph-image.png`,
    description: `A minimal & beautiful gatsby personal blog starter with a nice glassmorphism UI.`,
    siteUrl: `https://gatsbyglass.netlify.app`,
    social: {
      twitter: `yinkakun`,
    },
    socialLinks: [
      {
        name: "github",
        url: "https://github.com/zivmax/igem-dna-sonify",
      },
      {
        name: "ShanghaiTech",
        url: "https://www.shanghaitech.edu.cn/",
      },
      {
        name: "USTC",
        url: "https://ustc.edu.cn/",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-use-dark-mode",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `media`,
        path: `${__dirname}/static/media`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/content/pages`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              staticFolderName: "static",
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map((node) => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ "content:encoded": node.html }],
                });
              });
            },
            query: `
          {
            allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
              nodes {
                excerpt
                html
                fields {
                  slug
                }
                frontmatter {
                  title
                  date
                }
              }
            }
          }
            `,
            output: "/rss.xml",
            title: `Gatsby Glass RSS Feed`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Source Sans Pro`, `Poppins\:400,400i,700`],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `iGEM DNA Sonify`,
        short_name: `DNA Sonify`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/favicon.svg`,
      },
    },
  ],
};
