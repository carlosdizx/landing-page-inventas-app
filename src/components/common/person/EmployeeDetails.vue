<template>
  <v-card>
    <v-card-text class="mx-auto">
      <v-expansion-panels variant="inset" class="pa-4" multiple>
        <v-expansion-panel
          hide-actions
          v-for="(profile, i) in profiles"
          :key="i"
        >
          <v-expansion-panel-title>
            <v-row align="center" class="spacer" no-gutters>
              <v-col cols="6" sm="2" md="1">
                <v-tooltip>
                  <template v-slot:activator="{ props }">
                    <v-avatar size="50" v-bind="props" color="primary">
                      <v-img
                        :alt="profile.name"
                        src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                      />
                    </v-avatar>
                  </template>
                  <v-alert density="compact" variant="flat">{{
                    profile.name
                  }}</v-alert>
                </v-tooltip>
              </v-col>

              <v-col cols="4" sm="5" md="3">
                <strong>{{ profile.title }}</strong>
              </v-col>
            </v-row>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <v-tooltip
              :text="skill.name"
              v-for="(skill, j) in profile.skills"
              :key="j"
            >
              <template v-slot:activator="{ props }">
                <v-icon v-bind="props">mdi-{{ skill.icon }}</v-icon>
              </template>
            </v-tooltip>
            <v-divider />
            <v-card-text>
              {{profile.info}}
            </v-card-text>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
const profiles = [
  {
    avatar: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460",
    name: "El pepe",
    title: "Gaydeveloper",
    skills: [
      { name: "Gay", icon: "angular" },
      { name: "Ultragay", icon: "react" },
      { name: "Vue pro 😎", icon: "vuejs" },
      { name: "Sexo", icon: "gender-male-female-variant" },
    ],
    info: "Soy Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus libero et neque dapibus tincidunt eu at augue. In vestibulum, dolor id placerat tincidunt, tortor velit eleifend lorem, vitae consectetur sem massa at erat. Nullam nec ipsum nisl. Suspendisse in dignissim dui. Pellentesque at fermentum neque. Curabitur eget odio dui. Maecenas varius tincidunt erat eu aliquet. Suspendisse ipsum felis, fermentum eget ornare vel, congue a odio. Phasellus molestie mauris sit amet odio porttitor convallis. Cras non eros leo. Phasellus turpis odio, placerat sit amet nunc ac, malesuada maximus ipsum. Maecenas elit ligula, aliquet quis pellentesque lobortis, venenatis eu ligula. Nam suscipit nisl at lectus placerat, ac venenatis nunc dignissim. ",
  },
  {
    avatar: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460",
    name: "Que tal soy Sech",
    title: "Home wife",
    skills: [{ name: "Home wife", icon: "home" }],
    info: "No soy Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus libero et neque dapibus tincidunt eu at augue. In vestibulum, dolor id placerat tincidunt, tortor velit eleifend lorem, vitae consectetur sem massa at erat. Nullam nec ipsum nisl. Suspendisse in dignissim dui. Pellentesque at fermentum neque. Curabitur eget odio dui. Maecenas varius tincidunt erat eu aliquet. Suspendisse ipsum felis, fermentum eget ornare vel, congue a odio. Phasellus molestie mauris sit amet odio porttitor convallis. Cras non eros leo. Phasellus turpis odio, placerat sit amet nunc ac, malesuada maximus ipsum. Maecenas elit ligula, aliquet quis pellentesque lobortis, venenatis eu ligula. Nam suscipit nisl at lectus placerat, ac venenatis nunc dignissim. ",
  },
];
</script>
