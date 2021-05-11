<template>
  <div>
    <NavButton link="Food" icon="mdi-pot-steam" :color="color" />
    <NavButton link="Gardening" icon="mdi-flower" :color="color" />
    <NavButton link="Crafts" icon="mdi-content-cut" :color="color" />
    <NavButton link="Coding" icon="mdi-code-json" :color="color" />
    <NavButton link="Books" icon="mdi-book-open-variant" :color="color" />
    <NavButton link="Languages" icon="mdi-syllabary-hiragana" :color="color" />
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
  }
}
</script>
