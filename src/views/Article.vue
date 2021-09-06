<template>
  <v-container class="d-flex flex-column align-center align-md-end">
    <v-container class="tertiary primary--text align-self-center align-self-md-end back-container"
      :style="{width: $vuetify.breakpoint.mdAndUp ? '35rem' : '90vw'}"
    >
      <v-btn 
        x-small depressed
        v-on:click="$router.go(-1)"
      ><v-icon>mdi-arrow-left-bold</v-icon> back</v-btn>
    </v-container>
    <v-card
      outlined shaped
      elevation="2"
      :width="$vuetify.breakpoint.smAndUp ? '35rem' : '100%'"
      style="padding: 5px;"
      color="secondary--text"
    >
      <!-- Loading placeholders -->
      <v-progress-circular v-if="loading"></v-progress-circular>

     <!-- Actual article content -->
      <v-img
        :src="image"
        max-height="20rem"
      >
        <template v-slot:placeholder>
          <v-progress-circular indeterminate color="primary"></v-progress-circular>
        </template>
      </v-img>
      <v-card-title class="title">{{ article.title }}</v-card-title>
      <v-card-subtitle>{{ article.subtitle }}<br>{{ article.created }}</v-card-subtitle>
      <CategoryChip :category="article.category" :subcategories="article.subcategory" />
      <component :is="content"></component>
      <v-card-text>
        <p class="signature">
          <cite>
            Written by Hannah Willoughby<br/>
            {{ article.created }}
          </cite>
        </p>
      </v-card-text>
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
    article: {
      title: '',
      subtitie: '',
      category: '',
      subcategory: ''
    },
    loading: true,
    image: ''
  }),

  mounted: function() {
    api.getArticle(this.articleId).then( resp => {
      this.article = resp.data
      this.image = require(`@/assets/${this.article.img}`)
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

<style >

.signature {
  text-align: right;
}

.back-container {
  margin: 10px 0px;
}

</style>