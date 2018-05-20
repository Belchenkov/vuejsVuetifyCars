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
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app color="blue-grey darken-3">
      <v-toolbar-side-icon
        class="white--text hidden-md-and-up"
        @click="drawer = !drawer"
      ></v-toolbar-side-icon>
      <v-toolbar-title class="white--text">Vuejs Project</v-toolbar-title>
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
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      links: [
        {title: 'Войти', icon: 'lock', url: '/login'},
        {title: 'Регистрация', icon: 'face', url: '/registration'},
        {title: 'Заказы', icon: 'bookmark_border', url: '/orders'},
        {title: 'Добавить', icon: 'note_add', url: '/new'},
        {title: 'Список', icon: 'list', url: '/list'}
      ]
    }
  }

}
</script>
<style>
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
</style>
