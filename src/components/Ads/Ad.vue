<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <v-card class="elevation-7" v-if="!loading">
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
            <add-edit-ad-modal :ad="ad"></add-edit-ad-modal>
            <v-btn class="success elevation-7">Купить</v-btn>
          </v-card-actions>
        </v-card>

        <v-flex v-else class="text-xs-center"  pt-5 mt-5 xs12>
          <v-progress-circular
            :size="70"
            color="teal darken-4"
            indeterminate
          ></v-progress-circular>
        </v-flex>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import EditAdModal from './EditAdModal'

  export default {
    props: [
      'id'
    ],
    components: {
      addEditAdModal: EditAdModal
    },
    computed: {
      ad () {
        const id = this.id;
        return this.$store.getters.adById(id)
      },
      loading () {
        return this.$store.getters.loading
      }
    }
  }
</script>

<style scoped>

</style>
