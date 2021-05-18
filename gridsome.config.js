// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'lenHong',
  siteDescription: '大前端',
  templates: {
    StrapiJournals: [
      {
        path: '/journal/:id',
        component: './src/templates/Journal.vue',
      },
    ],
  },
  plugins: [
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: 'http://guanai100.com:1337',
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['journals', 'tags'],
        // singleTypes: ['impressum'],
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        // loginData: {
        // 	identifier: '',
        // 	password: ''
        // }
      },
    },
  ],
}
