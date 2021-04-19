
const state = {
  user_token: localStorage.getItem('user-token'),
  app: {
    rememberMe: false
  },
  login: {
    username: 'customer',
    password: ''
  }
}

const getters = {
  getUsername: (state) => {
    return state.login.username
  },
  getPassword: (state) => {
    return state.login.password
  },
  getRemember: (state) => {
    return state.app.rememberMe
  },
  getToken: (state) => {
    return state.user_token
  }
}

const mutations = {
  setUsername (state, username) {
    state.login.username = username
  },
  setPassword (state, password) {
    state.login.password = password
  },
  setRemember (state, checked) {
    state.app.rememberMe = checked
  },
  setToken (state, token) {
    state.user_token = token
    console.log(token)
  }
}

const actions = {
  setUsername ({ commit }, username) {
    commit('setUsername', username)
  },
  setPassword ({ commit }, password) {
    commit('setPassword', password)
  },
  setRemember ({ commit }, checked) {
    commit('setRemember', checked)
  },
  setToken ({ commit }, token) {
    commit('setToken', token)
  }
}

export default {
  namespaced: false,
  state,
  mutations,
  getters,
  actions
}
