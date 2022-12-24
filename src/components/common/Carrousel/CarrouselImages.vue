<template>
  <v-carousel hide-delimiters>
    <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" cover>
    </v-carousel-item>
  </v-carousel>
</template>

<script setup lang="ts">
const props = defineProps({
  items: { type: Array, required: true },
});
</script>
