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
              @click="triggerUpload"
            >
              Загрузить фото
              <v-icon right dark>cloud_upload</v-icon>
            </v-btn>
            <input
              ref="fileInput" 
              type="file" 
              style="display: none"  
              accept="image/*"
              @change="onFileChange"
            >
          </v-flex>
        </v-layout>
        <v-layout row mt-4>
          <v-flex xs12>
            <img :src="imageSrc" alt="Загруженное фото" height="100" v-if="imageSrc">
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
              :loading="loading"
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
        valid: false,
        image: null,
        imageSrc: ''
      }
    },
    computed: {
      loading () {
        return this.$store.getters.loading
      }
    },
    methods: {
      createAd () {
        if (this.$refs.form.validate() && this.image) {
          const ad = {
            title: this.title,
            desc: this.desc,
            promo: this.promo,
            image: this.image
          }

          this.$store.dispatch('createAd', ad)
            .then(() => {
              this.$router.push('/list')
            })
            .catch(() => {})
        }
      },
      triggerUpload () {
        this.$refs.fileInput.click()
      },
      onFileChange (event) {
        const file = event.target.files[0]
        const reader = new FileReader()

        reader.onload = e => {
          this.imageSrc = reader.result
        }

        reader.readAsDataURL(file)
        
        this.image = file
      }
    }
  }
</script>

<style scoped>

</style>
