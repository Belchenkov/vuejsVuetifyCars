<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <v-card class="elevation-7">
          <v-card-media
            :src="ad.imageSrc"
            height="300"
          ></v-card-media>
          <v-card-text mb-3>
            <h1 class="text--primary">{{ ad.title }}</h1>
            <p>{{ ad.desc }}</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn flat class="warning elevation-7">Редактировать</v-btn>
            <v-btn class="success elevation-7">Купить</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    props: [
      'id'
    ],
    computed: {
      ad () {
        const id = this.id;
        return this.$store.getters.adById(id)
      }
    }
  }
</script>

<style scoped>

</style>
