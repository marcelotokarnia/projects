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

const addPref = (suffix) => `vue-crud-${suffix}`
const OFFERS = addPref('offers')
const USERNAME = addPref('username')
const addDelay = async (fn) => {
  fn()
  await Promise.delay(500)
}
const getFromLocalStorage = (key, fallback) => {
  const localStorageString = localStorage.getItem(key)
  return localStorageString === null ? fallback : JSON.parse(localStorageString)
}
const setToLocalStorage = (key, item) => 
  localStorage.setItem(key, JSON.stringify(item))

const initialCounter = () => {
  const offers = getFromLocalStorage(OFFERS, [])
  return offers.length ? compose(prop('id'), last)(offers) + 1 : 0
}

const store = new Vuex.Store({
  state: {
    counter: initialCounter(),
    offers: getFromLocalStorage(OFFERS, []),
    username: localStorage.getItem(USERNAME)
  },
  mutations: {
    LOGIN: (state, username) => {
      state.username = username
      localStorage.setItem(USERNAME, username)
    },
    LOGOUT: (state) => {
      state.username = null
      localStorage.removeItem(USERNAME)
    },
    SAVE_OFFER: (state, offer) => {
      const offers = getFromLocalStorage(OFFERS, [])
      if (has('id')(offer)) {
        const updatedOffers = update(
          findIndex(propEq('id', prop('id', offer)))(offers),
          offer
        )(offers)
        setToLocalStorage(OFFERS, updatedOffers)
        state.offers = updatedOffers
      } else {
        const updatedOffers = append({...offer, id: state.counter++}, offers)
        setToLocalStorage(OFFERS, updatedOffers)
        state.offers = updatedOffers
      }
    },
    EDIT_OFFER: (state, offer) => {
      state.offer = offer
    },
    REMOVE_OFFER: (state, id) => {
      const offers = getFromLocalStorage(OFFERS, [])
      const updatedOffers = remove(
        findIndex(propEq('id', id))(offers),
        1
      )(offers)
      setToLocalStorage(OFFERS, updatedOffers)
      state.offers = updatedOffers
    },
    ENABLE_OFFER: (state, offer) => {
      const offers = getFromLocalStorage(OFFERS, [])
      const updatedOffers = update(
        findIndex(propEq('id', prop('id', offer)))(offers),
        assoc('isDisabled', not(prop('isDisabled')(offer)))(offer)
      )(offers)
      setToLocalStorage(OFFERS, updatedOffers)
      state.offers = updatedOffers
    }
  },
  getters: {
    username: () => localStorage.getItem(USERNAME),
    offers: () => getFromLocalStorage(OFFERS, []),
  },
  actions: {
    LOGIN: async ({ commit }, { username }) => await addDelay(
      () => commit('LOGIN', username)
    ),
    LOGOUT: async ({ commit }) => await addDelay(
      () => commit('LOGOUT')
    ),
    SAVE_OFFER: async ({commit}, offer) => await addDelay(
      () => commit('SAVE_OFFER', offer)
    ),
    EDIT_OFFER: async ({commit}, offer) => await addDelay(
      () => commit('EDIT_OFFER', offer)
    ),
    REMOVE_OFFER: async ({commit}, id) => await addDelay(
      () => commit('REMOVE_OFFER', id)
    ),
    ENABLE_OFFER: async ({commit}, offer) => await addDelay(
      () => commit('ENABLE_OFFER', offer)
    )
  },
})

export default store