const state = {
  app: {

  },
  reportList: {
    report001: {
      reportHead: 'Báo cáo sử dụng nước ngày 29/5/2020',
      reportDetail: 'Lượng sử dụng nước trong ngày: 0.15 m3...',
      reportTime: '6:30:23 - 30/5/2020'
    },
    report002: {
      reportHead: 'Báo cáo sử dụng nước ngày 28/5/2020',
      reportDetail: 'Lượng sử dụng nước trong ngày: 0.15 m3...',
      reportTime: '6:30:23 - 29/5/2020'
    },
    report003: {
      reportHead: 'Báo cáo sử dụng nước ngày 27/5/2020',
      reportDetail: 'Lượng sử dụng nước trong ngày: 0.15 m3...',
      reportTime: '6:30:23 - 28/5/2020'
    },
    report004: {
      reportHead: 'Báo cáo sử dụng nước ngày 26/5/2020',
      reportDetail: 'Lượng sử dụng nước trong ngày: 0.15 m3...',
      reportTime: '6:30:23 - 27/5/2020'
    }
  }
}

const getters = {
  getReports: (state) => {
    return state.reportList
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
