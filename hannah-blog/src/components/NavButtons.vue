<template>
  <div>
    <NavButton link="food" icon="mdi-pot-steam" />
    <NavButton link="gardening" icon="mdi-flower" />
    <NavButton link="crafts" icon="mdi-content-cut" />
    <NavButton link="coding" icon="mdi-code-json" />
    <NavButton link="books" icon="mdi-book-open-variant" />
    <NavButton link="languages" icon="mdi-syllabary-hiragana" />
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
