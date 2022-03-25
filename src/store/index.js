import { createStore } from 'vuex'

export default createStore({
  state: {
    // токен юзера, думаю тут и так понятно, выгружается из куки, кука пишется сервером
    token: '',
    // clientid это строка id клиента из поиска в панели, нужна для того чтобы сайт показывал данные одного пользователя на разных страницах
    clientData: {
      id: "1232132312",
    },
    // userData это объект данных авторизированного пользователя
    userData: {
      name: '',
      avatar: '',
      level: 0
    }
  },
  getters: {
    getToken(state) {
      return state.token
    },
    getClientData(state) {
      return state.clientData
    },
    getUserData(state) {
      return state.userData
    }
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload
    },
    setClientData(state, payload) {
      state.clientData = payload
    },
    setUserData(state, payload) {
      state.userData = payload
    }
  },
  actions: {
    SET_TOKEN(context, payload) {
      context.commit('setToken', payload)
    },
    SET_CLIENTDATA(context, payload) {
      context.commit('setClientData', payload)
    },
    SET_USERDATA(context, payload) {
      context.commit('setUserData', payload)
    }
  },
  modules: {
  }
})
