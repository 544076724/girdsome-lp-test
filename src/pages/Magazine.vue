<template>
  <Layout>
    <div data-v-da896d1e="" class="container"  :style="{marginTop:'6rem'}">
      <div data-v-da896d1e="" class="journal-hero">
        <h1 data-v-da896d1e="" class="journal-header">
          <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">
              聪明人曾经说过...
            </font>
          </font>
        </h1>
      </div>
    </div>
    <g-link 
    v-for="posts in $page.noTopPosts.edges"
    data-v-da896d1e="" :to="posts.node.path" class="journal-post">
      <div data-v-da896d1e="" class="container journal">
        <h2 data-v-da896d1e="" class="journal-title">
          <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">{{posts.node.title}}</font>
          </font>
        </h2>
        <p data-v-da896d1e="" class="journal-excerpt">
          <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">
              {{posts.node.describe}}
            </font>
          </font>
        </p>
      </div>
    </g-link>
  </Layout>
</template>

<page-query>

query{
  noTopPosts:allStrapiPost(sortBy:"time", order: DESC,filter:{top:{eq:false}}){
		 edges{
      node{
        id,
        title,path,
        describe
      }
    }
  }
}
</page-query>

<script>
export default {
  name:'MagazinePage',
  metaInfo: {
    title: '列表'
  }
}
</script>
