import * as fb from 'firebase'

class Ad {
  constructor (
    title,
    desc,
    ownerId,
    imageSrc = '',
    promo = false,
    id = null
  ) {
    this.title = title
    this.desc = desc
    this.ownerId = ownerId
    this.imageSrc = imageSrc
    this.promo = promo
    this.id = id
  }
}

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
    async createAd ({commit, getters}, payload) {
      commit('clearError')
      commit('setLoading', true)

      try {
        const newAd = new Ad(
          payload.title,
          payload.desc,
          '2ol9dgB58khDuY6A5cq2W4vyc522',
          payload.imageSrc,
          payload.promo
        )
        const ad = await fb.database().ref('guitars').push(newAd)

        commit('setLoading', false)
        commit('createAd', {
          ...newAd,
          id: ad.key
        })
      } catch (error) {
        commit('setError', error.message)
        commit('setLoading', false)
        throw error
      }
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
