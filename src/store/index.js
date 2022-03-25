import { createStore } from 'vuex'

export default createStore({
  state: {
    // токен юзера, думаю тут и так понятно, выгружается из куки, кука пишется сервером
    token: '',
    // clientid это строка id клиента из поиска в панели, нужна для того чтобы сайт показывал данные одного пользователя на разных страницах
    clientid: '',
    // userData это объект данных авторизированного пользователя
    userData: {}
  },
  getters: {
    getToken(state) {
      return state.token
    },
    getClientid(state) {
      return state.clientid
    },
    getUserData(state) {
      return state.userData
    }
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload
    },
    setClientid(state, payload) {
      state.clientid = payload
    },
    setUserData(state, payload) {
      state.userData = payload
    }
  },
  actions: {
    SET_TOKEN(context, payload) {
      context.commit('setToken', payload)
    },
    SET_CLIENTID(context, payload) {
      context.commit('setClientid', payload)
    },
    SET_USERDATA(context, payload) {
      context.commit('setUserData', payload)
    }
  },
  modules: {
  }
})
