<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <v-card>
          <v-img :src="imageUrl" />
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card-title>
          {{ title }}
        </v-card-title>
        <v-card-text>
          {{ text }}
        </v-card-text>
        <v-card-text v-if="buttonTitle">
          <v-btn @click="lambda">{{ buttonTitle }}</v-btn>
        </v-card-text>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
const props = defineProps({
  imageUrl: String,
  title: String,
  text: String,
  buttonTitle: String,
  lambda: { type: Function, required: false },
});
</script>
