<template>
  <v-container>
    <v-layout row>
      <v-flex v-if="loading" class="text-xs-center" pt-5 mt-5 xs12>
        <v-progress-circular
          :size="70"
          color="teal darken-4"
          indeterminate
        ></v-progress-circular>
      </v-flex>
      <v-flex xs12 sm6 offset-sm-3 v-else-if="!loading && orders.length !== 0">
        <h1 class="text--secondary mb-3">Заказы</h1>
        <v-list two-line subheader>
          <v-list-tile
            avatar
            v-for="order in orders"
            :key="order.id"
          >
            <v-list-tile-action>
              <!--<v-checkbox
                color="success"
                :value="order.done"
                @change="markDone(order)"
              ></v-checkbox>-->
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ order.name }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ order.phone }}</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn
                class="elevation-6 info"
                small
                :to="'/ad/' + order.adId"
              >Подробнее</v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-flex>
      <v-flex v-else class="text-xs-center">
        <h1 class="text--secondary">Список заказов пуст</h1>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        orderDone: ''
      }
    },
    computed: {
      loading () {
        return this.$store.getters.loading
      },
      orders () {
        return this.$store.getters.orders
      }
    },
    methods: {
      markDone (order) {
        this.$store.dispatch('markOrderDone', order.id)
          .then(() => {
            order.done = true
          })
          .catch(() => {})
      }
    },
    created () {
      this.$store.dispatch('fetchOrders')
    }
  }
</script>

<style scoped>

</style>
