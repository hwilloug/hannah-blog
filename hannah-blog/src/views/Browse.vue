<template>
  <v-container class="d-flex flex-column align-center">
    <ArticleCard v-for="article in articles" :key="article.id" :article="article"/>
  </v-container>
</template>

<script>
import ArticleCard from "@/components/ArticleCard"

export default {
  name: "Browse",
  props: ["category"],

  components: {
    ArticleCard
  },

  data: () => ({
    articles: [
      {
        id: 1,
        title: "My Awesome Article",
        subtitle: "A guide on being awesome",
        text: "asdfasdfasdfasdfasdf, sdflkjasd;l, askjalksd, asd;.",
        img: "logo.png"
      },
      {
        id: 2,
        title: "You won't believe",
        subtitle: "you wont believ",
        text: "aasdf, alka,d . aoie,a fiasd, . aieja.skdfj...",
        img: "logo.png"
      }
    ]
  }),
}
</script>
