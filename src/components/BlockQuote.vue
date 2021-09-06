<template>
    <div>
        <blockquote class="blockquote">
            {{ quote }}
        </blockquote>
        <p class="quote-citation">
            <cite>- {{ citation }}</cite>
        </p>
    </div>
</template>

<script>
export default {
  name: "BlockQuote",
  props: [
      "quote",
      "citation"
    ],
};
</script>

<style >
.blockquote {
    border-left: 2px solid var(--v-accent-base);
    padding-left: 5px;
}

.quote-citation {
    text-align: right;
}
</style>