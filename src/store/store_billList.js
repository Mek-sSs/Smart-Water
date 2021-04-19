const state = {
  app: {

  },
  bills: {
    bill001: {
      billHead: 'Hóa đơn tiền nước tháng 5/2020',
      billDetail: 'Hóa đơn tháng 5/2020',
      billID: '1190508',
      paid: false,
      money: 245485
    },
    bill002: {
      billHead: 'Hóa đơn tiền nước tháng 4/2020',
      billDetail: 'Hóa đơn tháng 4/2020',
      billID: '1190508',
      paid: true,
      money: 245485
    },
    bill003: {
      billHead: 'Hóa đơn tiền nước tháng 3/2020',
      billDetail: 'Hóa đơn tháng 3/2020',
      billID: '1190508',
      paid: true,
      money: 245485
    },
    bill004: {
      billHead: 'Hóa đơn tiền nước tháng 2/2020',
      billDetail: 'Hóa đơn tháng 2/2020',
      billID: '1190508',
      paid: true,
      money: 245485
    },
    bill005: {
      billHead: 'Hóa đơn tiền nước tháng 1/2020',
      billDetail: 'Hóa đơn tháng 1/2020',
      billID: '1190508',
      paid: true,
      money: 245485
    }
  }
}

const getters = {
  getBills: (state) => {
    return state.bills
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
