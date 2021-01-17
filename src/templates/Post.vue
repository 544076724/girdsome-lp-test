<template>
  <Layout>
    <div data-v-2a0eef53="" class="journal" :style="{marginTop:'6rem'}">
      <div data-v-2a0eef53="" class="container journal-container">
        <div data-v-2a0eef53="" class="journal-header">
          <h1 data-v-2a0eef53="" class="journal-title">
            <font style="vertical-align: inherit;">
              <font style="vertical-align: inherit;">{{$page.post.title}}</font>
            </font>
          </h1>
          <div data-v-2a0eef53="" class="journal-meta">
            <div data-v-2a0eef53="" class="journal-author"><span data-v-2a0eef53="" class="label">
                <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;">作者</font>
                </font>
              </span><span data-v-2a0eef53="" class="author-name">
                <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;">{{$page.post.author}}</font>
                </font>
              </span></div>
            <div data-v-2a0eef53="" class="journal-date"><span data-v-2a0eef53="" class="label">
                <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;">日期</font>
                </font>
              </span>
              <div data-v-2a0eef53="">
                <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;">{{$page.post.time}}</font>
                </font>
              </div>
            </div>

          </div>
        </div>

        <div data-v-2a0eef53="" class="journal-content" v-html="mdToHtml($page.post.content)">

        </div>
      </div>
    </div>
  </Layout>
</template>
<page-query>
query($id:ID){
  post:strapiPost(id:$id){
    id,
    author,
    content,
    time,
    title
  }
}
</page-query>
<script>
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt()
export default {
  name: 'Post',
  metaInfo: {
    title: this.$page.post.title
  },
  methods: {
    mdToHtml (markdown) {
      let that = this
      let html = md.render(markdown).replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/gi, function (match, capture) {
        return `<img src="${that.GRIDSOME_API_URL}${capture}" alt="" />`;
      })
      return html
    }
  }
}
</script>

<style>
</style>