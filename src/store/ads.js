export default {
  state: {
    ads: [
      {
        id: 1,
        title: 'Lamborgini',
        desc: 'Description',
        promo: false,
        imageSrc: 'https://vuetifyjs.com/static/doc-images/carousel/sky.jpg'
      },
      {
        id: 2,
        title: 'Ferrari',
        desc: 'Description',
        promo: true,
        imageSrc: 'https://vuetifyjs.com/static/doc-images/carousel/sky.jpg'
      },
      {
        id: 3,
        title: 'Ferrari',
        desc: 'Description',
        promo: true,
        imageSrc: 'https://vuetifyjs.com/static/doc-images/carousel/bird.jpg'
      }
    ]
  },
  mutations: {
    createAd (state, payload) {
      state.ads.push(payload)
    }
  },
  actions: {
    createAd ({commit}, payload) {
      payload.id = Math.random()

      commit('createAd', payload)
    }
  },
  getters: {
    ads (state) {
      return state.ads
    },
    promoAds (state) {
      return state.ads.filter(ad => ad.promo)
    },
    myAds (state) {
      return state.ads
    },
    adById (state) {
      return adId => {
        return state.ads.find(ad => ad.id === +adId)
      }
    }
  }
}
