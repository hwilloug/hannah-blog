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
      <CategoryChip :category="article.category" :subcategories="article.subcategory" />
      <component :is="content"></component>
    </v-card>
  </v-container>
</template>

<script>
import api from '@/api/Articles.js'
import CategoryChip from '@/components/CategoryChip'

export default {
  name: "Article",
  props: [ "articleId" ],

  components: {
    CategoryChip
  },

  data: () => ({
    article: {}
  }),

  mounted: function() {
    api.getArticle(this.articleId).then( resp => {
      this.article = resp.data
      
      document.title = `${process.env.VUE_APP_TITLE} | ${this.article.title}`
    })
  },

  computed: {
    content() {
      return () => import(`../../entries/${this.articleId}`)
    }
  }
}
</script>
