const state = {
  app: {
    m: 0,
    y: 0,
    thisMonth: 5,
    thisYear: 2021,
    monthToShow: 5,
    yearToShow: 2021,
    minYear: 2018,
    chartMode: true,
    type: 'Bình thường'
  },
  CustomerInfo: {
    // name: 'Vo Quang Duy',
    // meterID: '123456',
    // phone: '0985617832',
    // meterStatus: true
  },
  thisMonth: {
    water: 33.33,
    money: 123.456
  },
  Chart: {
    options: {
      title: {
        text: 'Lượng nước sử dụng (m3)',
        align: 'left',
        margin: 30,
        style: {
          fontSize: '14px',
          fontWeight: '500',
          fontFamily: 'Helvetica, Arial, sans-serif',
          color: '#397CBD'
        }
      },
      stroke: {
        curve: 'smooth',
        width: 3,
        colors: '#42A3FD'
      },
      chart: {
        type: 'line',
        id: 'vuechart-example',
        toolbar: {
          show: false
        }
      },
      xaxis: {
        show: true,
        categories: [1, 5, 10, 15, 20, 25, 30],
        labels: {
          show: true,
          style: {
            colors: ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff'],
            fontSize: '14px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 400,
            cssClass: 'apexcharts-xaxis-label'
          }
        },
        axisTicks: {
          show: false
        }
      },
      yaxis: {
        show: true,
        labels: {
          show: true,
          style: {
            colors: ['#fff'],
            fontSize: '14px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 400,
            cssClass: 'apexcharts-yaxis-label'
          }
        }
      },
      grid: {
        show: true,
        borderColor: '#42A3FD'
      }
    },
    y_Showing: null,
    m_Showing: null,
    month: [[{
      name: 'month 5',
      data: [0.75, 0.8, 1.5, 0.8, 1.1, 1, 1.7]
    }],
    [{
      name: 'month 4',
      data: [1, 2, 3, 0.8, 1, 1, 1.7]
    }],
    [{
      name: 'month 3',
      data: [0.5, 0.4, 0.3, 0.8, 1.1, 2.5, 2]
    }],
    [{
      name: 'month 2',
      data: [3, 2, 1, 0.5, 1, 2, 3]
    }],
    [{
      name: 'month 1',
      data: [0.5, 1, 2, 3, 2, 1, 0.5]
    }]],
    year: [[{
      name: 'year 2021',
      data: [1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1, 0.5]
    }],
    [{
      name: 'year 2020',
      data: [6, 5, 4, 3, 2, 1, 6, 5, 4, 3, 2, 1]
    }],
    [{
      name: 'year 2019',
      data: [5, 4, 3, 2, 1, 6, 5, 4, 3, 2, 1, 6]
    }],
    [{
      name: 'year 2018',
      data: [4, 3, 2, 1, 6, 5, 4, 3, 2, 1, 6, 5]
    }]]
  }
}

const getters = {
  home_getCustomer: (state) => {
    return state.CustomerInfo
  },
  getWater_Bill: (State) => {
    return state.thisMonth
  },
  getApp: (state) => {
    return state.app
  },
  getChart: (state) => {
    return state.Chart
  },
  getSerie_y: (state) => {
    return state.Chart.y_Showing
  },
  getSerie_m: (state) => {
    return state.Chart.m_Showing
  },
  getChart_Mode: (state) => {
    return state.app.chartMode
  }
}

const mutations = {
  monthIncrement (state) {
    if (state.app.monthToShow < state.app.thisMonth) {
      state.app.monthToShow++
      state.app.m--
    }
  },
  monthDecrement (state) {
    if (state.app.monthToShow > 1) {
      state.app.monthToShow--
      state.app.m++
    }
  },
  yearIncrement (state) {
    if (state.app.yearToShow < state.app.thisYear) {
      state.app.yearToShow++
      state.app.y--
    }
  },
  yearDecrement (state) {
    if (state.app.yearToShow > state.app.minYear) {
      state.app.yearToShow--
      state.app.y++
    }
  },
  setChart_Mode (state, mode) {
    state.app.chartMode = mode
  },
  setSerie (state) {
    state.Chart.m_Showing = state.Chart.month[state.app.m]
    state.Chart.y_Showing = state.Chart.year[state.app.y]
  },
  setOption (state, newOp) {
    state.Chart.options.xaxis.categories = newOp
  },
  setCustomerInfo (state, customer) {
    state.CustomerInfo = customer
  }
}

const actions = {
  monthIncrement (context) {
    context.commit('monthIncrement')
  },
  monthDecrement (context) {
    context.commit('monthDecrement')
  },
  yearIncrement (context) {
    context.commit('yearIncrement')
  },
  yearDecrement (context) {
    context.commit('yearDecrement')
  },
  setChart_Mode ({ commit }, mode) {
    commit('setChart_Mode', mode)
  },
  setSerie ({ commit }) {
    commit('setSerie')
  },
  setOption ({ commit }, newOp) {
    commit('setOption', newOp)
  },
  setCustomerInfo ({ commit }, customer) {
    commit('setCustomerInfo', customer)
  }
}

export default {
  namespaced: false,
  state,
  mutations,
  getters,
  actions
}
