module.exports = {
  siteMetadata: {
    title: 'Probot Gitty Test',
    description: 'Probot Gitty Playground built with Gatsby',
    siteUrl: `https://weekendprojects.io/`,
    permalink: 'https://weekendprojects.io/',
    toc: [
      'get-started',
      'simple-component',
      'composite-component',
      'data',
      'screen',
      'test',
      'deploy',
      'conclusion',
      'contribute',
    ],
    languages: ['en', 'es'],
    defaultTranslation: 'react/en',
    githubUrl: 'https://github.com/nnennajohn/gitty-probot-test',
    codeGithubUrl: 'https://github.com/nnennajohn/gitty-probot',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content/`,
      },
    },
    `gatsby-transformer-remark`,
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sass',
    `gatsby-plugin-sitemap`,
  ],
};
