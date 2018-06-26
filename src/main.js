// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import Vuetify from 'vuetify'
import * as fb from 'firebase'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify, { theme: {
  primary: '#ee44aa',
  secondary: '#424242',
  accent: '#82B1FF',
  error: '#FF5252',
  info: '#2196F3',
  success: '#4CAF50',
  warning: '#FFC107'
}})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    // Initialize Firebase
    fb.initializeApp({
      apiKey: 'AIzaSyAVmuhPgdbNsxV8E0QrFZ5TRq1nd1qYNYY',
      authDomain: 'vuetifyguitars.firebaseapp.com',
      databaseURL: 'https://vuetifyguitars.firebaseio.com',
      projectId: 'vuetifyguitars',
      storageBucket: 'vuetifyguitars.appspot.com',
      messagingSenderId: '266609043792'
    })
  }
})
