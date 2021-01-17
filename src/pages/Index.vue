<template>
  <Layout>

    <div class="container"  :style="{marginTop:'6rem'}">
      <div class="hero">
        <h1 class="hero-title">简单。美学。值。</h1>
        <h2 class="hero-subtitle">嗨，我是一名程序员，这是我的一个静态站点测试demo。</h2>
      </div>
      <div data-v-50cbff3e="" class="projects">
        <div v-for="topPost in $page.topPosts.edges" :key="topPost.node.id" data-v-50cbff3e="" class="project">
          <g-link :to="topPost.node.path" data-v-50cbff3e=""  class="project-link">
            <img :style="{width:'100%'}" :src="GRIDSOME_API_URL+topPost.node.cover.url" alt="" data-v-50cbff3e="" class="thumbnail g-image g-image--lazy g-image--loaded">
            <h3 data-v-50cbff3e="" class="project-title">{{topPost.node.title}}</h3>
            <div data-v-50cbff3e="" class="categories" :style="{width:'6rem',height:'6rem',backgroundImage:`url(${GRIDSOME_API_URL+topPost.node.cover.url})`}">
              <span data-v-50cbff3e="" class="category" v-for="tag in topPost.node.tags" :key="tag.id">{{tag.title}}</span>

            </div>
          </g-link>
        </div>

      </div>
    </div>
    <div data-v-460714ac="">
      <div 
      
      data-v-460714ac="" class="latest-journals-heading container"><span data-v-460714ac="" class="label">
          <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">最新和最热的</font>
          </font>
        </span></div>
      <div data-v-460714ac="" class="latest-journals">
        <div data-v-460714ac="" class="container">
          <g-link
          v-for="topPost in $page.noTopPosts.edges"
          :key="topPost.node.id"
          :to="topPost.node.path"
           data-v-460714ac=""  class="journal">
            <h3 data-v-460714ac="" class="journal-title">
              <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">{{topPost.node.title}}</font>
              </font>
            </h3>
          </g-link>
          
          
          </div>
      </div>
    </div>
  </Layout>
</template>
<page-query>

query{
  topPosts:allStrapiPost(sortBy:"time", order: DESC,filter:{top:{eq:true}}){
		 edges{
      node{
        id,
        title,
        tags{
          title,id
        },
        cover{
          url
        },
        path
      }
    }
  }
  noTopPosts:allStrapiPost(sortBy:"time", order: DESC,filter:{top:{eq:false}}){
		 edges{
      node{
        id,
        title,path
      }
    }
  }
}
</page-query>

<script>
export default {
  name: 'IndexPage',
  metaInfo: {
    title: '首页'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
