const state = {
  app: {

  },
  reportInfo: {
    meterID: '123456',
    consumeValue: 2.5,
    intensity: -87,
    meterStatus: 1,
    reportDate: '06:30 - 30/05/2020',
    consumedDate: '29/05/2020'
  },
  period: [
    {
      time: '0:00 - 1:00',
      consumed: 0.12
    },
    {
      time: '1:00 - 2:00',
      consumed: 0.12
    },
    {
      time: '2:00 - 3:00',
      consumed: 0.12
    },
    {
      time: '3:00 - 4:00',
      consumed: 0.12
    },
    {
      time: '4:00 - 5:00',
      consumed: 0.12
    },
    {
      time: '5:00 - 6:00',
      consumed: 0.12
    },
    {
      time: '6:00 - 7:00',
      consumed: 0.12
    },
    {
      time: '7:00 - 8:00',
      consumed: 0.12
    }
  ]
}

const getters = {
  getReport: (state) => {
    return state.reportInfo
  },
  getPeriod: (state) => {
    return state.period
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
