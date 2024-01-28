<template>
  <v-container class="d-flex flex-column">
    <div class="tertiary primary--text align-self-center align-self-md-end"
      :style="{width: $vuetify.breakpoint.mdAndUp ? '40rem' : '90vw'}"
    >
      <h5 class="text-h5" id="title-header">{{ title || category }}</h5>
    </div>
    <v-container class="d-flex flex-column align-center" v-if="loading">
      <v-progress-circular indeterminate color="secondary"></v-progress-circular>
    </v-container>
    <v-container class="d-flex flex-column align-center align-md-end" v-else>
      <ArticleCard v-for="article in articlesInPage" :key="article.id" :article="article" />
      <v-pagination
        v-model="page"
        :length="pages"
        circle
        color="accent"
        previous=""
      ></v-pagination>
    </v-container>
  </v-container>
</template>

<script>
import api from "@/api/Articles.js"

export default {
  name: "Browse",
  props: {
    category: String, 
    articlesPerPage: {
      type: Number,
      default: 10
    },
    title: String
  },

  components: {
    ArticleCard: () => import("@/components/ArticleCard")
  },

  data: () => ({
    articles: [],
    pages: 1,
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
      this.articles = resp.data.toSorted((a, b) => new Date(b.created) - new Date(a.created))
      this.loading = false
      this.pages = Math.ceil(this.articles.length / this.articlesPerPage)

      this.page = this.$route.query.p && this.$route.query.p <= this.pages 
        ? parseInt(this.$route.query.p) : this.page
    })
  },

  computed: {
    articlesInPage() {
      const pageIndex = this.page - 1;
      let currentArticleIdx = pageIndex * this.articlesPerPage
      return this.articles.slice(currentArticleIdx, currentArticleIdx + this.articlesPerPage )
    }
  },

  watch: {
    page: function(newPage) {
      this.$router.push(`?p=${newPage}`)
    }
  }
}
</script>

<style scoped>
  #title-header {
    text-align: center;
  }
</style>