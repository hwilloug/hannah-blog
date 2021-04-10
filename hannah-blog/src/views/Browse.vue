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
    api.getArticles(this.category).then(resp => {
      this.articles = resp.data
    })
  }
}
</script>
