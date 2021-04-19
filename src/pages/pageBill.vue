<template>
  <q-page class="flex flex-center">
    <div class="bill-read-app">
      <q-header class="header row q-px-md">
        <div class="bill-header-container col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-12 col-xs-12">
          <q-btn flat v-go-back=" '/main/profile' " icon="arrow_back_ios"/>
          <!-- <q-icon class="header-icon" name="arrow_back_ios" @click="back"/> -->
          <p class="bill-header">Hóa đơn tiền nước định kỳ</p>
        </div>
      </q-header>
      <div class="main-container q-px-md">
        <div class="row full-width">
          <div class="bill-container col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-12 col-xs-12">
            <div class="bill-content">
              <div class="bill-head-container">
                <p class="bill-head">Hóa đơn tiền nước tháng 5/2020</p>
              </div>
              <p class="bill-info-head">Tên khách hàng: <span class="bill-info-data">{{ bill.customerName }}</span></p>
              <p class="bill-info-head">Mã đồng hồ: <span class="bill-info-data">{{ bill.meterID }}</span></p>
              <p class="bill-info-head">Số nước đầu, ngày tính: <span class="bill-info-data">{{ bill.meterStart.value }} m<sup>3</sup> - {{ bill.meterStart.date }}</span></p>
              <p class="bill-info-head">Số nước cuối, ngày tính: <span class="bill-info-data">{{ bill.meterEnd.value }} m<sup>3</sup> - {{ bill.meterEnd.date }}</span></p>
              <p class="bill-info-head">Chi tiết công thức tính tiền: <span class="bill-info-data">{{ bill.calculationMethod }}</span></p>
              <p class="bill-info-head">Thành tiền: <span class="bill-info-data">{{ bill.total }}</span></p>
              <p class="bill-info-head">Ngày thanh toán: <span class="bill-info-data text-italic">{{ bill.paidDateTime }}</span></p>
            </div>
          </div>
          <div class="check-out-btn-container col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-12 col-xs-12">
            <q-btn v-if="bill.paid" class="full-width q-px-xl" :to="'/order'" unelevated size="22px" align="center" label="THANH TOÁN" rounded type="submit" color="btn_color"/>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import Vue from 'vue'
import router from 'vue-router'
Vue.use(router)
export default {
  name: 'PageIndex',
  data () {
    return {

    }
  },
  computed: {
    bill () {
      return this.$store.getters.getBillIfo
    }
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
  .q-btn__content{
    width: -webkit-fill-available;
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
  .bill-read-app {
    padding-top 30px;
    background-color #0A182E;
    width 100%;
    min-height calc(100vh - 60px);
    height auto;
  }
  .main-container{
    // padding 66px 0;
  }
  .bill-container{
    margin-bottom 40px;
  }
  .bill-header-container{
    display flex;
    justify-content flex-start;
    align-items center;
  }
  .bill-header{
    font-size 16px;
    color white;
    text-align center;
    margin 0 0 0 0;
  }
  .header-icon{
    font-size 16px;
    padding 0 10px 0 0;
  }
  .bill-content{
    width 100%;
    padding 20px 20px;
    border-radius 25px;
    background-color #0A2F4D;
  }
  .bill-info-data{
    padding 0 0 0 5px;
  }
  .check-out-btn{
    width 100%;
    height 50px;
    background-color #B72A28;
    outline none;
    border none;
    color white;
    border-radius 25px;
    font-size 22px;
    margin 20px 0 0 0;
  }
  .bill-info-head{
    font-size 14px;
    color white;
    padding 0 0 10px 0;
  }
  .bill-head-container{
    display flex;
    justify-content center;
    padding 0 0 20px 0;
  }
  .bill-head{
    text-align center;
    font-size 14px;
    color white;
  }
  @media only screen and (max-width: 599px) {
    .bill-header{
      font-size 14px;
    }
    .bill-info-head{
      font-size 12px;
      margin 0 0 5px 0;
    }
    .bill-head-container{
      padding 0 0 10px 0;
    }
    .bill-container{
      margin-bottom 20px;
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
