const state = {
  app: {

  },
  billInfo: {
    paid: true,
    customerName: 'Vo Quang Duy',
    meterID: '123456',
    calculationMethod: 'No data yet',
    total: 200000,
    paidDateTime: '18:50:23 - 30/05/2020',
    meterStart: {
      date: '01/05/2020',
      value: 300
    },
    meterEnd: {
      date: '30/05/2020',
      value: 600
    }
  }
}

const getters = {
  getBillIfo: (state) => {
    return state.billInfo
  }
}

const mutations = {

}

const actions = {

}

export default {
  namespaced: false,
  state,
  mutations,
  getters,
  actions
}
