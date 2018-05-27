<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">Добавить заказ</h1>
        <v-form v-model="valid" ref="form" validation>
          <v-text-field
            v-model="title"
            color="info"
            name="title"
            label="Заголовок"
            type="text"
            :rules="[v => !!v || 'Обязательное поле']"
          ></v-text-field>
          <v-text-field
            v-model="desc"
            color="info"
            name="desc"
            label="Описание"
            type="text"
            multi-line
            :rules="[v => !!v || 'Обязательное поле']"
          ></v-text-field>
        </v-form>
        <v-layout row mt-4>
          <v-flex xs12>
            <v-btn
              color="warning"
              class="white--text"
            >
              Загрузить фото
              <v-icon right dark>cloud_upload</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
        <v-layout row mt-4>
          <v-flex xs12>
            <!--<img src="" alt="Загруженное фото" height="100">-->
          </v-flex>
        </v-layout>
        <v-layout row mt-4>
          <v-flex xs12>
            <v-switch
              label="Промокод"
              color="info"
              v-model="promo"
            ></v-switch>
          </v-flex>
        </v-layout>
        <v-layout row mt-4>
          <v-flex xs12>
           <v-spacer></v-spacer>
            <v-btn
              class="success"
              @click="createAd"
            >Добавить заказ</v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        title: '',
        desc: '',
        promo: false,
        valid: false
      }
    },
    methods: {
      createAd () {
        if (this.$refs.form.validate()) {
          const ad = {
            title: this.title,
            desc: this.desc,
            promo: this.promo,
            imageSrc: 'https://cdn-images-1.medium.com/max/850/1*nq9cdMxtdhQ0ZGL8OuSCUQ.jpeg'
          }

          this.$store.dispatch('createAd', ad)
        }
      }
    }
  }
</script>

<style scoped>

</style>
