<template>
  <Navbar />
  <v-container class="mx-12">
    <v-card-title class="text-center"><h2>Casos de exito</h2></v-card-title>
    <Section
      image-url="src/assets/example.jpg"
      title="Seccion 1"
      text="textio que nos interesa mostrar"
    />
    <Section
      image-url="src/assets/example.jpg"
      title="Seccion 1"
      text="textio que nos interesa mostrar"
    />
    <Section
      image-url="src/assets/example.jpg"
      title="Seccion 1"
      text="textio que nos interesa mostrar"
    />
  </v-container>
</template>

<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
import Section from "@/components/common/Section";
</script>

<style scoped></style>
