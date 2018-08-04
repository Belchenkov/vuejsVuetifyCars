<template>
  <v-app>
    <v-navigation-drawer
      temporary
      app
      v-model="drawer"
      class="light-green lighten-5"
    >
      <v-list>
        <v-list-tile
          @click=""
          v-for="link of links"
          :key="link.title"
          :to="link.url"
        >
          <v-list-tile-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="link.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      <v-list-tile
        @click="onLogout"
        v-if="isUserLoggedIn"
      >
        <v-list-tile-action>
          <v-icon>exit_to_app</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title v-text="'Выйти'"></v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app color="blue-grey darken-3">
      <v-toolbar-side-icon
        class="white--text hidden-md-and-up"
        @click="drawer = !drawer"
      ></v-toolbar-side-icon>
      <img class="ml-5" src="../logo.png" height="40px" alt="">
      <v-toolbar-title class="white--text">
        <router-link to="/" tag="span" class="pointer">
          Guitars PRO
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          flat
          class="white--text"
          v-for="link in links"
          :key="link.title"
          :to="link.url"
        >
          <v-icon left>{{ link.icon }}</v-icon>
            {{ link.title }}
        </v-btn>
        <v-btn
          flat
          class="white--text"
          @click="onLogout"
          v-if="isUserLoggedIn"
        >
          <v-icon left>exit_to_app</v-icon>
          Выйти
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>

    <template v-if="error">
      <v-snackbar
        :timeout="5000"
        :bottom=true
        :multi-line=true
        color="error"
        @input="closeError"
        :value=true
      >
        {{error}}
        <v-btn flat dark @click.native="closeError">Закрыть</v-btn>
      </v-snackbar>
    </template>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false
    }
  },
  computed: {
    error () {
      return this.$store.getters.error
    },
    isUserLoggedIn () {
      return this.$store.getters.isUserLoggedIn
    },
    links () {
      if (this.isUserLoggedIn) {
        return [
          {title: 'Заказы', icon: 'bookmark_border', url: '/orders'},
          {title: 'Добавить', icon: 'note_add', url: '/new'},
          {title: 'Список', icon: 'list', url: '/list'}
        ]
      }
      return [
        {title: 'Войти', icon: 'lock', url: '/login'},
        {title: 'Регистрация', icon: 'face', url: '/registration'}
      ]
    }
  },
  methods: {
    closeError () {
      this.$store.dispatch('clearError')
    },
    onLogout () {
      this.$store.dispatch('logoutUser')
      this.$router.push('/')
    }
  }
}
</script>
<style >
  @import url('https://fonts.googleapis.com/css?family=Exo+2:400,700&subset=cyrillic');

  .btn__content,
  .toolbar__title {
    text-shadow: 0  1px 5px #000!important;
    font-family: 'Exo 2', sans-serif!important;
    font-size: 14px;
  }

  .toolbar__title {
    font-size: 20px!important;
  }

  .pointer {
    cursor: pointer;
  }
</style>
