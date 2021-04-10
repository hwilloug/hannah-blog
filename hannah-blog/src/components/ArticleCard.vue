<template>
  <router-link :to="{ path: `/articles/${article.id}` }">
    <v-card
      outlined shaped
      elevation="2"
      style="margin: 0px auto 10px auto;"
      :width="width"
      color="secondary--text"
    >
      <v-container v-if="$vuetify.breakpoint.smAndUp">
        <v-row align="center">
          <v-col cols="auto" max-width="20rem">
            <v-img
              width="10rem"
              :src="require(`@/assets/${article.img}`)"
            ></v-img>
          </v-col>
          <v-col>
            <v-card-title>{{ article.title }}</v-card-title>
            <v-card-subtitle>{{ article.subtitle }}<br>{{ article.created }}</v-card-subtitle>
            <CategoryChip :category="article.category" :subcategories="article.subcategory" />
          </v-col>
        </v-row>
      </v-container>
      <v-container v-else>
        <v-img
          :width="$parent.$el.offsetWidth"
          :src="require(`@/assets/${article.img}`)"
        ></v-img>
        <v-card-title>{{ article.title }}</v-card-title>
        <v-card-subtitle>{{ article.subtitle }}<br>{{ article.created }}</v-card-subtitle>
        <v-card-text>{{ article.text.substr(0, 100) }}...</v-card-text>
      </v-container>
    </v-card>
  </router-link>
</template>

<script>
import CategoryChip from '@/components/CategoryChip'

export default {
  name: "ArticleCard",
  props: [ "article" ],

  components: {
    CategoryChip
  },

  computed: {
    width() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return "90%"
        case 'sm': return "35rem"
        case 'md': return "50rem"
        case 'lg': return "50rem"
        case 'xl': return "50rem"
      }
      return "90%"
    }
  }
}
</script>
