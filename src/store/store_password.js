const state = {
  app: {

  },
  password: {
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  }
}

const getters = {
  getOld: (state) => {
    return state.password.oldPassword
  },
  getNew: (state) => {
    return state.password.newPassword
  },
  getConfirm: (state) => {
    return state.password.confirmPassword
  }
}

const mutations = {
  setOld (state, oldPass) {
    state.password.oldPassword = oldPass
  },
  setNew (state, newPass) {
    state.password.newPassword = newPass
  },
  setConfirm (state, confirmPass) {
    state.password.confirmPassword = confirmPass
  }
}

const actions = {
  setOld ({ commit }, oldPass) {
    commit('setOld', oldPass)
  },
  setNew ({ commit }, newPass) {
    commit('setNew', newPass)
  },
  setConfirm ({ commit }, confirmPass) {
    commit('setConfirm', confirmPass)
  }
}

export default {
  namespaced: false,
  state,
  mutations,
  getters,
  actions
}
