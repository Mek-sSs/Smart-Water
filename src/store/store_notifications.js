const state = {
  app: {
    rememberMe: false
  },
  notificationsList: {
    notify001: {
      notificationsHead: 'Yêu cầu thanh toán hóa đơn tiền nước',
      notificationsDetail: 'Hóa đơn tiền nước tháng 5/2020 của bạn...',
      notificationsTime: '6:30:23 - 30/5/2020',
      notificationsType: 1,
      notificationsRead: false
    },
    notify002: {
      notificationsHead: 'Hóa đơn tiền nước định kỳ',
      notificationsDetail: 'Hóa đơn tiền nước tháng 5/2020 của bạn...',
      notificationsTime: '6:30:23 - 30/5/2020',
      notificationsType: 1,
      notificationsRead: false
    },
    notify003: {
      notificationsHead: 'Thông báo cúp nước',
      notificationsDetail: 'Lịch cúp nước ngày 29/5/2020',
      notificationsTime: '6:30:23 - 28/5/2020',
      notificationsType: 2,
      notificationsRead: true
    }
  }
}

const getters = {
  getNotifications: (state) => {
    return state.notificationsList
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
