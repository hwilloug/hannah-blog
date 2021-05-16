<template>
  <router-link :to="{ path: `/articles/${article.id}` }">
    <v-card
      outlined shaped
      elevation="2"
      style="margin: 0px auto 10px auto;"
      :width="$vuetify.breakpoint.mdAndUp ? '39rem' : '90vw'"
      color="secondary--text"
    >
      <v-container v-if="$vuetify.breakpoint.mdAndUp">
        <v-row align="center">
          <v-col cols="auto" max-width="20rem">
            <v-img
              width="10rem"
              :src="require(`@/assets/${article.img}`)"
            ></v-img>
          </v-col>
          <v-col>
            <v-card-title class="title">{{ article.title }}</v-card-title>
            <v-card-subtitle >{{ article.subtitle }}<br>{{ article.created }}</v-card-subtitle>
            <CategoryChip :category="article.category" :subcategories="article.subcategory" />
          </v-col>
        </v-row>
      </v-container>
      <v-container v-else>
        <v-img
          :width="$parent.$el.offsetWidth"
          :src="require(`@/assets/${article.img}`)"
        ></v-img>
        <v-card-title class="title">{{ article.title }}</v-card-title>
        <v-card-subtitle>{{ article.subtitle }}<br>{{ article.created }}</v-card-subtitle>
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
  }
}
</script>
