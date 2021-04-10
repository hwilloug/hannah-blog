<template>
  <v-container fluid>
    <v-chip
      color="primary secondary--text"
      small
      style="margin-left: 5px"
    >{{ category }}</v-chip>
    <v-chip
      v-for="subcategory in subcategories"
      :key="subcategory"
      color="accent"
      small
      style="margin-left: 5px"
    >{{ subcategory }}</v-chip>
  </v-container>
</template>

<script>
export default {
  name: "CategoryChip",
  props: [
    "category",
    "subcategories"
  ]
}
</script>
