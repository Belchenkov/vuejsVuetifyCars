<template>
  <v-dialog width="400px" v-model="modal">
    <v-btn flat class="success elevation-7" slot="activator">Купить</v-btn>
    <v-card class="elevation-10">
      <v-container>
        <v-layout row>
          <v-flex xs12>
            <v-card-title>
              <h2 class="text--primary text-xs-center">Вы действительно хотите купить данный товар?</h2>
            </v-card-title>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row>
          <v-flex xs12>
            <v-card-text>
              <v-text-field
                v-model="name"
                color="info"
                name="name"
                label="Имя"
                type="text"
              ></v-text-field>
              <v-text-field
                v-model="phone"
                color="info"
                name="phone"
                mask="#(###)###-##-##"
                label="Телефон"
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
                :disabled="localLoading"
                :loading="localLoading"
              >Купить</v-btn>
              <v-spacer></v-spacer>
              <v-btn
                dark
                class="red"
                @click="onCancel"
                :disabled="localLoading"
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
        name: '',
        phone: '',
        localLoading: false
      }
    },
    methods: {
      onCancel () {
        this.name = ''
        this.phone = ''
        this.modal = false
      },
      onSave () {
        if (this.name !== '' && this.phone !== '') {
          this.localLoading = true
          this.$store.dispatch('createOrder', {
            name: this.name,
            phone: this.phone,
            adId: this.ad.id,
            ownerId: this.ad.ownerId
          })
            .finally(() => {
              this.modal = false
              this.name = ''
              this.phone = ''
              this.localLoading = false
            })
        }
      }
    }
  }
</script>
