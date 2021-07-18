<template>
  <div>
    <v-container class="d-flex flex-column align-center" v-if="loading">
      <v-progress-circular indeterminate color="secondary"></v-progress-circular>
    </v-container>
    <v-container class="d-flex flex-column align-center align-md-end" v-else>
      <ArticleCard v-for="article in articlesPage" :key="article.id" :article="article" />
      <v-pagination
        v-model="page"
        :length="pages"
        circle
        color="accent"
      ></v-pagination>
    </v-container>
  </div>
</template>

<script>
import api from "@/api/Articles.js"

export default {
  name: "Browse",
  props: ["category"],

  components: {
    ArticleCard: () => import("@/components/ArticleCard")
  },

  data: () => ({
    articles: [],
    pages: 1,
    articlesPerPage: 10,
    page: 1,
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
      this.pages = Math.ceil(this.articles.length / this.articlesPerPage)
    })
  },

  computed: {
    articlesPage() {
      let pageIndex = this.page - 1;
      return this.articles.slice(pageIndex, this.articlesPerPage + pageIndex )
    }
  }
}
</script>
