const routes = [
  {
    path: '/',
    component: () => import('layouts/SubLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/pageStart.vue'),
        name: 'start'
      },
      {
        path: 'login',
        component: () => import('pages/pageLogin.vue'),
        name: 'login'
      },
      {
        path: 'report-read/:reportId',
        component: () => import('pages/pageReport.vue'),
        name: 'report-read'
      },
      {
        path: 'notify-read/:notifyId',
        component: () => import('pages/pageNotification.vue'),
        name: 'notify-read'
      },
      {
        path: 'bill/:billId',
        component: () => import('pages/pageBill.vue'),
        name: 'bill'
      },
      {
        path: 'bill-list/:year',
        component: () => import('pages/pageBillList.vue'),
        name: 'bill-list'
      },
      {
        path: 'change-password',
        component: () => import('pages/pagePassword.vue'),
        name: 'change-password'
      },
      {
        path: 'order/:billId',
        component: () => import('pages/pageOrder.vue'),
        name: 'order'
      }
    ]
  },
  {
    path: '/main/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'home',
        component: () => import('pages/pageHome.vue'),
        name: 'home'
      },
      {
        path: 'reports',
        component: () => import('pages/pageReports.vue'),
        name: 'reports'
      },
      {
        path: 'notifications',
        component: () => import('pages/pageNotifications.vue'),
        name: 'notifications'
      },
      {
        path: 'profile',
        component: () => import('pages/pageProfile.vue'),
        name: 'profile'
      }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]
export default routes
