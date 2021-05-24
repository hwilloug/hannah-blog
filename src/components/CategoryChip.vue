<template>
  <v-container fluid>
    <v-chip
      color="primary"
      small
      style="margin-left: 5px"
      :to="{ path: `/${category.toLowerCase()}`}"
    >{{ category }}</v-chip>
    <v-chip
      v-for="subcategory in subcategories"
      :key="subcategory"
      color="tertiary black--text"
      small
      style="margin-left: 5px"
      :to="{ name: 'Browse', query: { subcategory: `${subcategory.toLowerCase()}` }}"
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
