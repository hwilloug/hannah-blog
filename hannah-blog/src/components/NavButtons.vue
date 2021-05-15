<template>
  <div>
    <NavButton v-for="category in categories" :key="category.name" :name="category.name" :link="category.link" :icon="category.icon" :color="color" />
  </div>
</template>

<script>
import NavButton from "@/components/NavButton"

export default {
  name: "NavButtons",
  props: [
    "color"
  ],
  components: {
    NavButton
  },
  data: () => ({
    categories: [
      {
        name: 'Food',
        link: 'articles/categories/food',
        icon: 'mdi-pot-steam'
      },
      {
        name: 'Gardening',
        link: 'articles/categories/gardening',
        icon: 'mdi-flower'
      },
      {
        name: 'Crafts',
        link: 'articles/categories/crafts',
        icon: 'mdi-content-cut'
      },
      {
        name: 'Coding',
        link: 'articles/categories/coding',
        icon: 'mdi-code-json'
      },
      {
        name: 'Books',
        link: 'articles/categories/books',
        icon: 'mdi-book-open-variant'
      },
      {
        name: 'Languages',
        link: 'articles/categories/languages',
        icon: 'mdi-syllabary-hiragana'
      },
    ]
  })
}
</script>
