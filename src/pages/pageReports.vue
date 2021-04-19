<template>
  <q-page class="flex flex-center">
    <div class="reports-app">
      <q-header class="header row full-width">
        <div class="reports-header-container col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-10 offset-sm-1 col-xs-10 offset-xs-1">
          <p class="reports-header">Báo cáo</p>
        </div>
      </q-header>
      <div class="main-container q-px-md">
        <div class="row full-width">
          <div class=" col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-12 col-xs-12">
            <q-list class="q-gutter-y-sm">
              <q-item class="reports-item-container" :to="'/report-read/' + key" clickable v-ripple  v-for="(item, key) in reportList" :key ="key">
                <q-item-section>
                  <q-item-label class="reports-head">{{ item.reportHead }}</q-item-label>
                  <q-item-label class="reports-detail">{{ item.reportDetail }}</q-item-label>
                  <q-item-label class="reports-time">{{ item.reportTime }}</q-item-label>
                </q-item-section>
                <q-item-section side>
                <q-icon name="arrow_forward_ios" class="item-arrow-icon"/>
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
    reportList () {
      return this.$store.getters.getReports
    }
  },
  beforeMount () {
    this.loadUser()
  },
  methods: {
    async loadUser () {
      // console.log(this.$store.getters.getToken)
      // const res = await this.$api.get('customer/message', {
      //   headers: {
      //     Authorization: 'token ' + this.$store.getters.getToken
      //   }
      // })
      // console.log(res.data)
      // const customer = {
      //   name: res.data.profile.name,
      //   meterID: res.data.payment.meter.name,
      //   phone: '',
      //   meterStatus: res.data.payment.meter.Status
      // }
      // this.$store.dispatch('setCustomerInfo', customer)
      // console.log(customer)
    },
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
  .header{
    height 60px;
    border-bottom 1px solid white;
    background-color #0A182E;
  }
  .reports-header-container{
    display flex;
    justify-content center;
    align-items center;
  }
  .reports-header{
    font-size 20px;
    color white;
    text-align center;
    margin: 0 0 0 0;
  }
  .reports-app {
    padding 16px 0 16px;
    background-color #0A182E;
    width 100%;
    height auto;
    min-height calc(100vh - 120px);
    // min-height 100vh;
  }
  .main-container{}
  .reports-item-container{
    background-color #0A243E;
    border-radius 5px;
    padding 10px 20px;
  }
  .reports-head{
    font-size 14px;
    color white;
  }
  .reports-detail{
    font-size 12px;
    color white;
    margin 16px 0 16px 0 !important;
  }
  .reports-time{
    font-size 12px;
    color white;
    font-style italic;
    margin 0;
  }
  .item-arrow-icon{
    font-size 25px;
    color white;
  }
  @media only screen and (max-width: 599px) {
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
  }
  @media only screen and (max-width: 599px) {
    .reports-header{
      font-size 14px;
    }
    .reports-head{
      font-size 11px;
    }
    .reports-detail,
    .reports-time{
      font-size 10px;
    }
    .reports-text-container{
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
