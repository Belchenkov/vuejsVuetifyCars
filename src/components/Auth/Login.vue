<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md6>
        <v-card class="elevation-15">
          <v-toolbar dark color="info">
            <v-toolbar-title>Войти</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form v-model="valid" ref="form" validation>
              <v-text-field
                prepend-icon="email"
                v-model="email"
                color="info"
                name="login"
                label="Email"
                type="email"
                :rules="emailRules"
              ></v-text-field>
              <v-text-field
                id="password"
                v-model="password"
                prepend-icon="lock"
                color="info"
                name="password"
                label="Пароль"
                type="password"
                :rules="passRules"
                :counter="passCount"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="info"
              @click="onSibmit"
            >Войти</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  data () {
    return {
      passCount: 6,
      email: '',
      password: '',
      valid: '',
      passRules: [
        v => !!v || 'Обязательное поле',
        v => v.length >= this.passCount || 'Пароль должен быть не менее ' + this.passCount
      ],
      emailRules: [
        v => !!v || 'Обязательное поле',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Некорректный E-mail'
      ]
    }
  },
  methods: {
    onSibmit: function () {
      if (this.$refs.form.validate()) {
        const user = {
          email: this.email,
          password: this.password
        }
        console.log(user)
      }
    }
  }
}
</script>

<style scoped>

</style>
