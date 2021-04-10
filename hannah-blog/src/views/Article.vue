<template>
  <v-container class="d-flex flex-column align-center">
    <v-card
      outlined shaped
      elevation="2"
      :width="$vuetify.breakpoint.smAndUp ? '35rem' : '100%'"
      style="padding: 5px;"
      color="secondary--text"
    >
      <v-img
        :src="require(`@/assets/${article.img}`)"
        max-height="20rem"
      ></v-img>
      <v-card-title>{{ article.title }}</v-card-title>
      <v-card-subtitle>{{ article.subtitle }}<br>{{ article.created }}</v-card-subtitle>
      <v-chip
        color="primary secondary--text"
        small
        style="margin-left: 5px"
      >{{ article.category }}</v-chip>
      <v-chip
        v-for="subcategory in article.subcategory"
        :key="subcategory"
        color="accent"
        small
        style="margin-left: 5px"
      >{{ subcategory }}</v-chip>
      <v-card-text>{{ article.text }}</v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import api from '@/api/Articles.js'

export default {
  name: "Article",
  props: [ "articleId" ],

  data: () => ({
    article: {}
  }),

  mounted: function() {
    api.getArticle(this.articleId).then( resp => {
      console.log(resp.data)
      this.article = resp.data
    })
  }
}
</script>
