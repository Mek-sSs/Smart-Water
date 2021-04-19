import Vue from 'vue'
import Vuex from 'vuex'
import appStore from 'src/store/store_app'
import home from 'app/src/store/store_home'
import login from 'app/src/store/store_login'
import reports from 'app/src/store/store_reports'
import notifications from 'app/src/store/store_notifications'
import profile from 'app/src/store/store_profile'
import report from 'app/src/store/store_report'
import bills from 'app/src/store/store_billList'
import bill from 'app/src/store/store_bill'
import pass from 'app/src/store/store_password'
import notify from 'app/src/store/store_notification'

// import example from './module-example'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      // example
      appStore,
      home,
      login,
      reports,
      notifications,
      profile,
      report,
      bills,
      bill,
      pass,
      notify
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  })

  return Store
}
