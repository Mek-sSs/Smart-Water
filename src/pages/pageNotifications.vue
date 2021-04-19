<template>
  <q-page class="flex flex-center">
    <div class="notifications-app">
      <q-header class="header row">
        <div class="notifications-header-container col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-10 offset-sm-1 col-xs-10 offset-xs-1">
          <p class="notifications-header">Thông báo</p>
        </div>
      </q-header>
      <div class="main-container q-px-md">
        <div class="row full-width">
          <div class="q-gutter-y-sm col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-12 col-xs-12">
            <q-list class="q-gutter-y-sm">
              <q-item class="notifications-item-container" :to="'/notify-read/'+ key" clickable v-ripple v-for="(item, key) in notificationsList" :key ="key">
                <q-item-section thumbnail top>
                  <q-icon class="item-icon" name="svguse:icon-SVG/icon.svg#report_white" v-if="item.notificationsType == 1"/>
                  <q-icon class="item-icon" name="svguse:icon-SVG/icon.svg#notification_white" v-else/>
                </q-item-section>
                <q-item-section>
                  <q-item-label class="notifications-head">{{ item.notificationsHead }}</q-item-label>
                  <q-item-label class="notifications-detail">{{ item.notificationsDetail }}</q-item-label>
                  <q-item-label class="notifications-time">{{ item.notificationsTime }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  computed: {
    notificationsList () {
      return this.$store.getters.getNotifications
    }
  },
  beforeMount () {
  },
  methods: {
    loginStatus () {
      if (!this.$store.getters.getToken) {
        return this.$router.push({ name: 'login' })
      }
    }
  },
  mounted () {
    // this.loginStatus()
  }
}
</script>
<style lang="stylus">
  *{
    margin 0;
    padding 0;
  }
  a{
    text-decoration none;
  }
  .main-container{}
  .header{
    height 60px;
    border-bottom 1px solid white;
    background-color #0A182E;
  }
  .notifications-header-container{
    display flex;
    justify-content center;
    align-items center;
  }
  .notifications-header{
    font-size 20px;
    color white;
    text-align center;
    margin: 0 0 0 0;
  }
  .notifications-app {
    padding 16px 0 16px;
    background-color #0A182E;
    width 100%;
    min-height calc(100vh - 120px);
    height auto;
  }
  .notifications-item-container{
    background-color #0A243E;
    border-radius 5px;
    padding 10px 20px;
  }
  .notifications-head{
    font-size 14px;
    color white;
  }
  .notifications-detail{
    font-size 12px;
    color white;
    margin 16px 0 16px 0 !important;
  }
  .notifications-time{
    font-size 12px;
    color white;
    font-style italic;
    margin 0;
  }
  .notifications-text-container{
    padding-left 20px;
  }
  .item-icon{
    font-size 25px;
    color white;
  }
  .q-item__section--side {
    margin 0 !important;
  }
  @media only screen and (max-width: 599px) {
    .notifications-header{
      font-size 14px;
    }
    .info-customer{
      padding: 20px 20px;
    }
    .chart-container{
      height 300px;
    }
    .header-head{
      font-size 13px;
    }
    .header-stech-logo{
      width 80px;
    }
    .q-btn-item{
      font-size 10px;
    }
    .info-consume-head{
      font-size 12px;
    }
    .info-customer-head,
    .info-customer-data{
      font-size 12px;
    }
    .item-icon{
      font-size 20px;
    }
    .notifications-head{
      font-size 12px;
    }
    .notifications-detail,
    .notifications-time{
      font-size 11px;
    }
    .notifications-text-container{
      padding 0 0 0 10px;
    }
  }
  @media only screen and (max-width: 1023px) and (min-width: 600px) {

  }
  @media only screen and (max-width: 1439px) and (min-width: 1024px) {
    .q-px-md{
      padding-left 0 !important;
      padding-right 0 !important;
    }
  }
  @media only screen and (max-width: 1919px) and (min-width: 1439px) {
    .q-px-md{
      padding-left 0 !important;
      padding-right 0 !important;
    }
  }
  @media only screen and (min-width: 1920px) {
    .q-px-md{
      padding-left 0 !important;
      padding-right 0 !important;
    }
  }
</style>
