<template>
  <v-carousel hide-delimiters>
    <v-carousel-item v-for="(item, i) in items" :key="i" cover>
      <v-row>
        //TODO create component with data (title, text info, button optional, button function)
      </v-row>
    </v-carousel-item>
  </v-carousel>
</template>

<script setup lang="ts">
import { CarrouselDataInterface } from "@/types/CarrouselDataInterface";

const props = defineProps({
  items: { required: true, type: Array<CarrouselDataInterface> },
});
</script>
