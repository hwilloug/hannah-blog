<template>
  <v-container class="d-flex flex-column align-center">
    <ArticleCard v-for="article in articles" :key="article.id" :article="article"/>
  </v-container>
</template>

<script>
import ArticleCard from "@/components/ArticleCard"

import api from '@/api/Articles.js'

export default {
  name: "Browse",
  props: ["category"],

  components: {
    ArticleCard
  },

  data: () => ({
    articles: []
  }),

  mounted: function() {
    let query = {};
    if (this.category) {
      query.category = this.category
    } else if (this.$route.query) {
      query = this.$route.query
    }
    console.log(query)
    api.getArticles(query).then(resp => {
      this.articles = resp.data
    })
  }
}
</script>
