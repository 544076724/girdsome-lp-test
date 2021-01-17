// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
//admin/plugins/content-manager/collectionType/application::feedback.feedback
module.exports = {
  siteName: 'Gridsome-lp-test',
  plugins: [
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: process.env.GRIDSOME_API_URL,
        queryLimit: 1000, // Defaults to 100 查询限制最多多少跳
        contentTypes: ['post','tag'], //预取哪些， 预取post,tag
        // singleTypes: ['impressum'],
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        // loginData: { //目前没有受保护得数据
        //   identifier: '',
        //   password: ''
        // }
      }
    }
  ],
  templates:{
    StrapiPost:[
      {
        path: '/posts/:id',
        component: './src/templates/Post.vue'
      }
    ]
  }
}
