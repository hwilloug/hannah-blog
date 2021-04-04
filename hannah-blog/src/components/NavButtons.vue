<template>
  <div>
    <NavButton link="Food" icon="mdi-pot-steam" />
    <NavButton link="Gardening" icon="mdi-flower" />
    <NavButton link="Crafts" icon="mdi-content-cut" />
    <NavButton link="Coding" icon="mdi-code-json" />
    <NavButton link="Books" icon="mdi-book-open-variant" />
    <NavButton link="Languages" icon="mdi-syllabary-hiragana" />
  </div>
</template>

<script>
import NavButton from "@/components/NavButton"

export default {
  name: "NavButtons",
  components: {
    NavButton
  }
}
</script>
