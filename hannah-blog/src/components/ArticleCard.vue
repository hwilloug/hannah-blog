<template>
  <router-link :to="{ path: `articles/${article.id}` }">
    <v-card
      outlined shaped
      elevation="2"
      style="margin-bottom: 10px;"
      :width="width"
    >
      <v-container>
        <v-row >
          <v-col cols="auto">
            <v-img left :src="require(`@/assets/${article.img}`)"></v-img>
          </v-col>
          <v-col>
            <v-card-title>{{ article.tltle }}</v-card-title>
            <v-card-subtitle>{{ article.subtitle }}</v-card-subtitle>
            <v-card-text>{{ article.text }}</v-card-text>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </router-link>
</template>

<script>
export default {
  name: "ArticleCard",
  props: [ "article" ],
  computed: {
    width() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return "100%"
        case 'sm': return "35rem"
        case 'md': return "50rem"
        case 'lg': return "50rem"
        case 'xl': return "50rem"
      }
      return "100%"
    }
  }
}
</script>
