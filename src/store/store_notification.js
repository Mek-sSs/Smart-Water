const state = {
  app: {

  },
  notify: {
    head: 'Lorem ipsum',
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.',
    date: '8/3/2021'
  }

}

const getters = {
  getNotify: (state) => {
    return state.notify
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
