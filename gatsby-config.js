module.exports = {
  siteMetadata: {
    title: 'Probot Gitty Test',
    description: 'Probot Gitty Playground built with Gatsby',
    siteUrl: `https://weekendprojects.io/`,
    permalink: 'https://weekendprojects.io/',
    toc: [
      'getting-started',
      'create-probot-app',
      'core-development',
      'test-fixture-setup',
      'writing-some-tests',
      'deployment',
      'conclusion',
    ],
    languages: ['en'],
    defaultTranslation: 'probot/en',
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
