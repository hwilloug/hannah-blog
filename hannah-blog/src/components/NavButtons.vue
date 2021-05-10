<template>
  <div>
    <div v-if="expanded">
      <NavButton link="Food" icon="mdi-pot-steam" />
      <NavButton link="Gardening" icon="mdi-flower" />
      <NavButton link="Crafts" icon="mdi-content-cut" />
      <NavButton link="Coding" icon="mdi-code-json" />
      <NavButton link="Books" icon="mdi-book-open-variant" />
      <NavButton link="Languages" icon="mdi-syllabary-hiragana" />
    </div>
    <div v-else>
      <NavButton link="Food" icon="mdi-pot-steam" />
      <NavButton link="Gardening" icon="mdi-flower" />
      <NavButton link="Crafts" icon="mdi-content-cut" />
      <NavButton link="Coding" icon="mdi-code-json" />
      <NavButton link="Books" icon="mdi-book-open-variant" />
      <NavButton link="Languages" icon="mdi-syllabary-hiragana" />
    </div>
  </div>
</template>

<script>
import NavButton from "@/components/NavButton"

export default {
  name: "NavButtons",
  props: ["expanded"],
  components: {
    NavButton
  }
}
</script>
