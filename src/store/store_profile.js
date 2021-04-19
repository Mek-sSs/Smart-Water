const state = {
  app: {

  },
  customerInfo: {
    // name: 'Vo Quang Duy',
    // username: 'duyvq9090',
    // phone: '90909090',
    // dateOfBirth: '06/09/1969',
    // address: 'Thứa Thiên - Huế'
  },
  meterInfo: {
    // meterID: '123456',
    // meterStatus: false,
    // lastReport: '18:30:29 - 30/05/2020'
  }

}

const getters = {
  profile_getCustomer: (state) => {
    return state.customerInfo
  },
  profile_getMeter: (state) => {
    return state.meterInfo
  }
}

const mutations = {
  profile_setCustomerInfo (state, customer) {
    state.customerInfo = customer
  },
  profile_setMeterInfo (state, meter) {
    state.meterInfo = meter
  }
}

const actions = {
  profile_setCustomerInfo ({ commit }, customer) {
    commit('profile_setCustomerInfo', customer)
  },
  profile_setMeterInfo ({ commit }, meter) {
    commit('profile_setMeterInfo', meter)
  }
}

export default {
  namespaced: false,
  state,
  mutations,
  getters,
  actions
}
