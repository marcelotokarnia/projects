import Vue from 'vue'
import Vuex from 'vuex'
import Promise from 'bluebird'
import {
  append, 
  not, 
  assoc,
  findIndex, 
  propEq, 
  update, 
  prop,
  remove,
  last,
  compose,
  has
} from 'ramda'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    counter: 0,
    offers: [],
    username: ''
  },
  mutations: {
    LOGIN: (state, username) => {
      state.username = username
    },
    LOGOUT: (state) => {
      state.username = null
    },
    SAVE_OFFER: (state, offer) => {
	  const {offers} = state
      if (has('id')(offer)) {
        const updatedOffers = update(
          findIndex(propEq('id', prop('id', offer)))(offers),
          offer
        )(offers)
        state.offers = updatedOffers
      } else {
        const updatedOffers = append({...offer, id: state.counter++}, offers)
        state.offers = updatedOffers
      }
    },
    EDIT_OFFER: (state, offer) => {
      state.offer = offer
    },
    REMOVE_OFFER: (state, id) => {
      const {offers} = state
      const updatedOffers = remove(
        findIndex(propEq('id', id))(offers),
        1
      )(offers)
      state.offers = updatedOffers
    },
    ENABLE_OFFER: (state, offer) => {
      const {offers} = state
      const updatedOffers = update(
        findIndex(propEq('id', prop('id', offer)))(offers),
        assoc('isDisabled', not(prop('isDisabled')(offer)))(offer)
      )(offers)
      state.offers = updatedOffers
    }
  },
  getters: {
    username: () => 'mocked',
    offers: () => [{name: 'mastermind'}],
  },
  actions: {
    LOGIN: ({ commit }, { username }) => {},
    LOGOUT: ({ commit }) => {},
    SAVE_OFFER: async ({commit}, offer) => {},
    EDIT_OFFER: async ({commit}, offer) => {},
    REMOVE_OFFER: async ({commit}, id) => {},
    ENABLE_OFFER: async ({commit}, offer) => {}
  },
})

export default store