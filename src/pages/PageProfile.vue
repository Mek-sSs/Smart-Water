<template>
  <q-page class="flex flex-center">
    <div class="profile-app">
      <q-header class="header row">
        <div class="profile-header-container col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-10 offset-sm-1 col-xs-10 offset-xs-1">
          <p class="profile-header">Cá nhân</p>
        </div>
      </q-header>
      <div class="profile-main-container">
        <div class="profile-section">
          <div class="profile-section-head row full-width">
            <div class="profile-head col-xl-10 col-lg-10 col-md-10 col-sm-12 col-xs-12 offset-xl-1 offset-lg-1 offset-md-1 q-px-md">
              <div class="profile-head-icon-container">
                <q-icon class="profile-head-icon" name="svguse:icon-SVG/icon.svg#user"/>
              </div>
              <p class="profile-section-header">Tài khoản</p>
              <div class="logout-btn-container">
                <q-btn padding="xs md" unelevated dense no-caps size="18px" @click="logOut()" align="center" label="Đăng xuất" rounded color="btn_color"/>
              </div>
            </div>
          </div>
          <div class="profile-content row">
            <div class="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-xs-12 offset-xl-1 offset-lg-1 offset-md-1 q-px-md">
              <p class="profile-customer-head">Tên khách hàng: <span class="profile-customer-data">{{ customer.name }}</span></p>
              <p class="profile-customer-head">username: <span class="profile-customer-data">{{ customer.userName }}</span><router-link :to="{ name: 'change-password'}" class="profile-change-password-link">Đổi mật khẩu</router-link></p>
              <p class="profile-customer-head">Số điện thoại: <span class="profile-customer-data">{{ customer.phone }}</span></p>
              <p class="profile-customer-head">Ngày sinh: <span class="profile-customer-data">{{ customer.birthDate }}</span></p>
              <p class="profile-customer-head">Địa chỉ: <span class="profile-customer-data">{{ customer.address }}</span></p>
            </div>
          </div>
        </div>
        <div class="profile-section">
          <div class="profile-section-head row">
            <div class="profile-head col-xl-10 col-lg-10 col-md-10 col-sm-12 col-xs-12 offset-xl-1 offset-lg-1 offset-md-1 q-px-md">
              <div class="profile-head-icon-container">
                <q-icon class="profile-head-icon" name="svguse:icon-SVG/icon.svg#water_meter"/>
              </div>
              <p class="profile-section-header">Đồng hồ</p>
            </div>
          </div>
          <div class="profile-content row">
            <div class="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-xs-12 offset-xl-1 offset-lg-1 offset-md-1 q-px-md">
              <p class="profile-meter-head">Mã đồng hồ: <span class="profile-meter-data">{{ waterMeter.id }}</span></p>
              <p class="profile-meter-head">Trạng thái đồng hồ: <span class="profile-meter-data" v-if="waterMeter.status=='online'">Đang hoạt động</span><span class="profile-meter-data" v-else>Đóng van</span></p>
              <p class="profile-meter-head">Lần cuối report: <span class="profile-meter-data"></span>{{ waterMeter.lastReport }}</p>
            </div>
          </div>
        </div>
        <div class="profile-section">
          <div class="profile-section-head row">
            <div class="profile-head col-xl-10 col-lg-10 col-md-10 col-sm-12 col-xs-12 offset-xl-1 offset-lg-1 offset-md-1 q-px-md">
              <div class="profile-head-icon-container">
                <q-icon class="profile-head-icon" name="svguse:icon-SVG/icon.svg#bill_white"/>
              </div>
              <p class="profile-section-header">Hóa đơn</p>
            </div>
          </div>
          <div class="profile-content row">
            <div class="col-xl-5 col-lg-5 col-md-5 col-sm-6 col-xs-6 offset-xl-1 offset-lg-1 offset-md-1">
              <router-link :to="'/bill-list/'+'this-year'" class="profile-bill-link">
                <div class="bill">
                <q-btn icon="svguse:icon-SVG/icon.svg#bill_colored" color="white" padding="md" size="18px" unelevated/>
                <p class="bill-btn-text">Hóa đơn năm nay</p>
              </div>
              </router-link>
              <!-- <q-btn padding="lg" color="primary" icon="eco"/> -->
            </div>
            <div class="col-xl-5 col-lg-5 col-md-5 col-sm-6 col-xs-6">
              <router-link :to="'/bill-list/'+'last-year'" class="profile-bill-link">
                <div class="bill">
                  <q-btn icon="svguse:icon-SVG/icon.svg#bill_2" color="white" padding="md" size="18px" unelevated/>
                  <p class="bill-btn-text">Hóa đơn năm trước</p>
                </div>
              </router-link>
            </div>
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
  methods: {
    logOut () {
      localStorage.removeItem('user-token')
      this.$router.push({ name: 'login' })
    },
    async loadData () {
      const res = await this.$api.get('customer', {
        headers: {
          Authorization: 'token ' + this.$store.getters.getToken
        }
      })
      console.log(res.data)
      const customer1 = {
        name: res.data.profile.name,
        phone: '',
        username: res.data.username,
        dateOfBirth: '',
        address: ''
      }
      const meter = {
        meterID: res.data.payment.meter.name,
        meterStatus: res.data.payment.meter.Status,
        lastReport: ''
      }

      this.$store.dispatch('profile_setCustomerInfo', customer1)
      this.$store.dispatch('profile_setMeterInfo', meter)
      console.log(meter)
    },
    loginStatus () {
      if (!this.$store.getters.getToken) {
        return this.$router.push({ name: 'login' })
      }
    }
  },
  computed: {
    customer () {
      return this.$store.getters.profile_getCustomer
    },
    waterMeter () {
      return this.$store.getters.profile_getMeter
    }
  },
  beforeMount () {

  },
  mounted () {
    // this.loginStatus()
    // this.loadData()
  }
}
</script>
<style lang="stylus">
  *{
    margin 0;
    padding 0;
  }
  .logout-btn-container{
    width -webkit-fill-available;
    display flex;
    justify-content flex-end;
  }
  .profile-head-icon{
    font-size 30px;
    padding 0 10px 0 0;
  }
  .header{
    height 60px;
    border-bottom 1px solid white;
    position fixed;
    top 0;
    z-index 1000;
    width: 100%;
    background-color #0A182E;
  }
  .profile-header-container{
    display flex;
    justify-content center;
    align-items center;
  }
  .profile-header{
    font-size 20px;
    color white;
    text-align center;
    margin: 0 0 0 0;
  }
  .profile-app {
    padding-top 0px;
    background-color #0A182E;
    width 100%;
    min-height calc(100vh - 120px);
    height auto;
  }
  .profile-main-container{}
  .profile-section-head{
    background-color #0A243E;
    height 60px;
  }
  .profile-customer-head,
  .profile-meter-head{
    font-size 16px;
    color white;
    margin 0 0 10px 0;
  }
  .profile-customer-data,
  .profile-meter-data{
    font-size 16px;
    color white;
  }
  .profile-section-header{
    font-size 18px;
    color white;
    margin 0 0 0 0;
    white-space nowrap;
  }
  .profile-content{
    padding: 10px 0 0 0;
  }
  .bill{
    flex-direction column;
    display flex;
    justify-content center;
    align-items center;
    margin 20px 0 0 0;
  }
  .profile-head{
    display flex;
    align-items center;
  }
  .profile-head-icon-container{
    padding 0 10px 0 0;
    display flex;
    justify-content center;
    align-items center;
  }
  .profile-bill-icon{
    font-size 28px;
  }
  .bill-btn-text{
    font-size 14px;
    color white;
    margin 10px 0 0 0;
  }
  .profile-change-password-link{
    font-size 16px;
    color white;
    text-decoration none;
    margin 0 0 0 40px;
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
    .profile-change-password-link{
      font-size 12px;
    }
  }
  @media only screen and (max-width: 599px) {
    .profile-header{
      font-size 14px;
    }
    .profile-section-header{
      font-size 13px;
    }
    .profile-customer-head{
      font-size 12px;
    }
    .profile-customer-data{
      font-size 12px;
    }
    .profile-meter-head{
      font-size 12px;
    }
    .profile-meter-data{
      font-size 12px;
    }
    .bill-btn-text{
      font-size 12px;
    }
    .profile-head-icon{
      font-size 22px;
    }
    .bill{
      margin 10px 0 10px 0;
    }
    .profile-section-head{
      height 45px;
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
