<template>
  <v-container>
    <Navbar />
    <Carrousel :items="items" />
    <v-container class="mx-12">
      <v-card-title class="text-center"><h2>Casos de exito</h2></v-card-title>
      <Section
        image-url="src/assets/example.jpg"
        title="Seccion 1"
        text="textio que nos interesa mostrar"
        button-title="Algo 1"
        :lambda="hacerAlgo"
      />
      <Section
        image-url="src/assets/example.jpg"
        title="Seccion 2"
        text="textio que nos interesa mostrar"
        button-title="Algo 2"
        :lambda="hacerAlgo"
      />
      <Section
        image-url="src/assets/example.jpg"
        title="Seccion 3"
        text="textio que nos interesa mostrar"
        button-title="Algo 3"
        :lambda="hacerAlgo"
      />
      <Section
        image-url="src/assets/example.jpg"
        title="Seccion 4"
        text="textio que nos interesa mostrar"
      />
    </v-container>
  </v-container>
</template>

<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
import Section from "@/components/common/Section";
import Carrousel from "@/components/common/Carrousel.vue";
const items = [
  {
    src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
  },
  {
    src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
  },
  {
    src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
  },
  {
    src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
  },
];

const hacerAlgo = () => {
  console.log("xdxdxd");
};
</script>

<style scoped></style>
