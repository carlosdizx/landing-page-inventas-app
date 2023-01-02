<template>
  <v-card class="mx-auto text-center" max-width="500">
    <v-card-title>Nuestro equipo</v-card-title>
    <v-expansion-panels multiple>
      <v-expansion-panel hide-actions v-for="(profile, i) in profiles" :key="i">
        <v-expansion-panel-title>
          <v-row align="center">
            <v-col cols="6">
              <v-tooltip>
                <template v-slot:activator="{ props }">
                  <v-avatar size="80" v-bind="props" color="primary">
                    <v-img :alt="profile.name" :src="profile.avatar" />
                  </v-avatar>
                </template>
                <v-alert density="compact" variant="flat">{{
                  profile.name
                }}</v-alert>
              </v-tooltip>
            </v-col>

            <v-col cols="4">
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
            {{ profile.info }}
          </v-card-text>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-card>
</template>

<script setup lang="ts">
const profiles = [
  {
    avatar:
      "https://media.licdn.com/dms/image/D4E03AQECRAg26pKOTA/profile-displayphoto-shrink_800_800/0/1672000421762?e=1678320000&v=beta&t=_QOvPXzUMIBplDEEiJrgPANl_QgPagWprUQOkJlpLjI",
    name: "Ing. Carlos Díaz",
    title: "Desarrollador Javascript / TypeScript",
    skills: [
      { name: "Angular", icon: "angular" },
      { name: "ReactJS", icon: "react" },
      { name: "Vue pro 😎", icon: "vuejs" },
      { name: "Node Js", icon: "nodejs" },
    ],
    info: "Soy Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus libero et neque dapibus tincidunt eu at augue. In vestibulum, dolor id placerat tincidunt, tortor velit eleifend lorem, vitae consectetur sem massa at erat. Nullam nec ipsum nisl. Suspendisse in dignissim dui. Pellentesque at fermentum neque. Curabitur eget odio dui. Maecenas varius tincidunt erat eu aliquet. Suspendisse ipsum felis, fermentum eget ornare vel, congue a odio. Phasellus molestie mauris sit amet odio porttitor convallis. Cras non eros leo. Phasellus turpis odio, placerat sit amet nunc ac, malesuada maximus ipsum. Maecenas elit ligula, aliquet quis pellentesque lobortis, venenatis eu ligula. Nam suscipit nisl at lectus placerat, ac venenatis nunc dignissim. ",
  },
  {
    avatar:
      "https://media.licdn.com/dms/image/C5603AQFsEAQs28vVbg/profile-displayphoto-shrink_200_200/0/1654554073100?e=1678320000&v=beta&t=hEMHhDlUdwBW1FmyCy13KkKNgfJW8p3ZWMkrWhZN2O8",
    name: "Que tal soy Sech",
    title: "El macho",
    skills: [{ name: "Macho", icon: "gender-male" }],
    info: "No soy Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus libero et neque dapibus tincidunt eu at augue. In vestibulum, dolor id placerat tincidunt, tortor velit eleifend lorem, vitae consectetur sem massa at erat. Nullam nec ipsum nisl. Suspendisse in dignissim dui. Pellentesque at fermentum neque. Curabitur eget odio dui. Maecenas varius tincidunt erat eu aliquet. Suspendisse ipsum felis, fermentum eget ornare vel, congue a odio. Phasellus molestie mauris sit amet odio porttitor convallis. Cras non eros leo. Phasellus turpis odio, placerat sit amet nunc ac, malesuada maximus ipsum. Maecenas elit ligula, aliquet quis pellentesque lobortis, venenatis eu ligula. Nam suscipit nisl at lectus placerat, ac venenatis nunc dignissim. ",
  },
  {
    avatar:
      "https://media.licdn.com/dms/image/C5603AQGtffFeRD_Rdw/profile-displayphoto-shrink_200_200/0/1656137629655?e=1678320000&v=beta&t=1W22GNkg7DmS578BgLRb-3kGzHL-qstV_2OzNrAg8nc",
    title: "El macho",
    name: "Que tal soy Sech",
    skills: [{ name: "Macho", icon: "gender-male" }],
  },
  {
    avatar:
      "https://media.licdn.com/dms/image/C4E03AQF3_H2SeGiQ8w/profile-displayphoto-shrink_200_200/0/1645191205569?e=1678320000&v=beta&t=_uHhIIqDODSQ9ciSKqRAHuSXmed3n-UwwoQ1j6E96Wg",
    title: "El macho",
    name: "Que tal soy Sech",
    skills: [{ name: "Macho", icon: "gender-male" }],
  },
  {
    avatar:
      "https://media.licdn.com/dms/image/C4D03AQHD7UoH-t4Tmw/profile-displayphoto-shrink_200_200/0/1649114256615?e=1678320000&v=beta&t=s9OPONfsfKqmsjIcjrMWZztQeRSB_l8EkvN5H1nen2I",
    title: "El macho",
    skills: [{ name: "Macho", icon: "gender-male" }],
  },
];
</script>
