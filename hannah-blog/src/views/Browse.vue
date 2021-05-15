<template>
  <div>
    <v-container class="d-flex flex-column align-center" v-if="loading">
      <LoadingArticleCard v-for="i in 3" :key="i" />
    </v-container>
    <v-container class="d-flex flex-column align-center" v-else>
      <ArticleCard v-for="article in articles" :key="article.id" :article="article" />
    </v-container>
  </div>
</template>

<script>
import api from "@/api/Articles.js"

export default {
  name: "Browse",
  props: ["category"],

  components: {
    ArticleCard: () => import("@/components/ArticleCard"),
    LoadingArticleCard: () => import("@/components/LoadingArticleCard")
  },

  data: () => ({
    articles: [],
    loading: true
  }),

  mounted: function() {
    document.title = `${process.env.VUE_APP_TITLE} | ${this.category}`

    let query = {};
    if (this.category) {
      query.category = this.category
    } else if (this.$route.query) {
      query = this.$route.query
    }
    api.getArticles(query).then(resp => {
      this.articles = resp.data
      this.loading = false
    })
  }
}
</script>
