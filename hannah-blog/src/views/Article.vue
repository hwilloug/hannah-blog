<template>
  <v-container class="d-flex flex-column align-center">
    <v-card
      outlined shaped
      elevation="2"
      :width="$vuetify.breakpoint.smAndUp ? '35rem' : '100%'"
      style="padding: 5px;"
      color="secondary--text"
    >
     <!-- Actual article content -->
      <v-img
        :src="require(`@/assets/${article.img}`)"
        max-height="20rem"
      ></v-img>
      <v-card-title>{{ article.title }}</v-card-title>
      <v-card-subtitle>{{ article.subtitle }}<br>{{ article.created }}</v-card-subtitle>
      <CategoryChip :category="article.category" :subcategories="article.subcategory" />
      <component :is="content"></component>

      <!-- Loading placeholders -->
      <v-skeleton-loader type="image" max-height="20rem" v-if="loading"></v-skeleton-loader>
      <v-skeleton-loader type="card-heading" v-if="loading"></v-skeleton-loader>
      <v-skeleton-loader type="chip" class="small-padding" v-if="loading"></v-skeleton-loader>
      <v-skeleton-loader type="text@10" v-if="loading"></v-skeleton-loader>
    </v-card>
  </v-container>
</template>

<script>
import api from '@/api/Articles.js'

export default {
  name: "Article",
  props: [ "articleId" ],

  components: {
    CategoryChip: () => import('@/components/CategoryChip'),
  },

  data: () => ({
    article: {},
    loading: true
  }),

  mounted: function() {
    api.getArticle(this.articleId).then( resp => {
      this.article = resp.data
      this.loading = false;

      document.title = `${process.env.VUE_APP_TITLE} | ${this.article.title}`
    }).catch( () => {
      window.location.href = "/404"
    })
  },

  computed: {
    content() {
      return () => import(`../../entries/${this.articleId}`)
    }
  }
}
</script>
