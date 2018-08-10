<template>
    <v-dialog width="400px" v-model="modal">
      <v-btn flat class="warning elevation-7" slot="activator">Редактировать</v-btn>
        <v-card class="elevation-10">
          <v-container>
            <v-layout row>
              <v-flex xs12>
                <v-card-title>
                  <h2 class="text--primary">Редактировать</h2>
                </v-card-title>
              </v-flex>
            </v-layout>
            <v-divider></v-divider>
            <v-layout row>
              <v-flex xs12>
                <v-card-text>
                  <v-text-field
                    v-model="title"
                    color="info"
                    name="title"
                    label="Название"
                    type="text"
                  ></v-text-field>
                  <v-text-field
                    v-model="desc"
                    color="info"
                    name="desc"
                    label="Описание"
                    multi-line
                    type="text"
                  ></v-text-field>
                </v-card-text>
              </v-flex>
            </v-layout>
            <v-divider></v-divider>
            <v-layout row>
              <v-flex xs12 mt-4>
                <v-card-actions>
                  <v-btn
                    class="success"
                    @click="onSave"
                  >Сохранить</v-btn>
                  <v-spacer></v-spacer>
                  <v-btn
                    dark
                    class="red"
                    @click="onCancel"
                  >Отмена</v-btn>
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
    </v-dialog>

</template>

<script>
export default {
  props: [
    'ad'
  ],
  data () {
    return {
      modal: false,
      title: this.ad.title,
      desc: this.ad.desc
    }
  },
  methods: {
    onCancel () {
      this.title = this.ad.title
      this.desc = this.ad.desc
      this.modal = false
    },
    onSave () {
      if (this.desc !== '' && this.title !== '') {
        this.$store.dispatch('updateAd', {
          title: this.title,
          desc: this.desc,
          id: this.ad.id
        });
        this.modal = false
      }
    }
  }
}
</script>
