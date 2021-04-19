<template>
  <q-page class="flex flex-center">
    <div class="report-read-app">
      <q-header class="header row q-px-md full-width">
        <div class="report-header-container col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-12 col-xs-12">
          <q-btn flat v-go-back=" '/main/reports' " icon="arrow_back_ios"/>
          <!-- <q-icon class="header-icon" name="arrow_back_ios" @click="back"/> -->
          <p class="report-header">Báo cáo sử dụng nước ngày 29/05/2020</p>
        </div>
      </q-header>
      <div class="main-container q-px-md">
        <div class="row full-width">
          <div class="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-xs-12 offset-xl-1 offset-lg-1 offset-md-1">
            <div class="report-overview-container">
              <p class="report-overview-head meter-id">Mã đông hồ: <span class="report-overview-data">{{ reportInfo.meterID }}</span></p>
              <p class="report-overview-head consume">Lượng tiêu thu nước trong ngày: <span class="report-overview-data">{{ reportInfo.consumeValue }}m<sup>3</sup></span></p>
              <p class="report-overview-head intensity">Cường độ sóng: <span class="report-overview-data">{{ reportInfo.intensity }} dbm</span></p>
              <p class="report-overview-head meter-status">Trạng thái đồng hồ: <span class="report-overview-data">Đồng hồ không có dấu hiệu bị rò rỉ hoặc sử dụng nước vượt mức</span></p>
              <p class="report-overview-head report-date">Ngày báo cáo: <span class="report-overview-data text-italic">{{ reportInfo.reportDate }}</span></p>
            </div>
          </div>
        </div>
        <div class="row full-width">
          <div class="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-xs-12 offset-xl-1 offset-lg-1 offset-md-1">
            <div class="detail-heading">
              <p class="heading-text">Chi tiết nước sử dụng</p>
              <p class="heading-text">Ngày {{reportInfo.consumedDate}}</p>
            </div>
            <div class="detail-container">
              <div class="detail-item" v-for="item in period" :key="item.time">
                <p class="period"> {{ item.time }}</p>
                <p class="consumed-head">Sử dụng: <span class="consumed-value">{{ item.consumed }} m<sup>3</sup></span></p>
              </div>
            </div>
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
  data () {
    return {

    }
  },
  computed: {
    reportInfo () {
      return this.$store.getters.getReport
    },
    period () {
      return this.$store.getters.getPeriod
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
  .header{
    height 60px;
    border-bottom 1px solid white;
    position fixed;
    top 0;
    z-index 1000;
    width: 100%;
    background-color #0A182E;
  }
  .report-read-app {
    padding-top 30px;
    background-color #0A182E;
    width 100%;
    min-height calc(100vh - 60px);
    height auto;
  }
  .main-container{}
  .report-header-container{
    display flex;
    justify-content flex-start;
    align-items center;
  }
  .return-btn{
    // display flex;
    // justify-content flex-start;
    // align-items center;
  }
  .header-icon{
    font-size 16px;
    padding 0 10px 0 0;
    color white;
  }
  .report-header{
    font-size 16px;
    color white;
    text-align center;
    margin 0 0 0 0;
  }
  .report-overview-container{
    background-color #0A2F4D;
    padding 10px 20px;
    border-radius 25px;
  }
  .meter-id,
  .consume,
  .intensity,
  .meter-status,
  .report-date{
    font-size 12px;
    color white;
    padding 0 10px 0 0;
  }
  .report-overview-data{
    padding 0 0 0 15px;
  }
  .meter-id,
  .idensity-value{
    font-weight 900;
  }
  .detail-container{
    padding 0 0 30px 0;
  }
  .detail-item{
    display flex;
    justify-content space-between;
    align-items center;
    background-color #0A2F4D;
    padding 10px 20px;
    margin 0 0 3px 0;
  }
  .detail-item:first-child{
    border-radius 20px 20px 0 0;
  }
  .detail-item:last-child{
    border-radius 0 0 20px 20px;
  }
  .consumed-value{
    font-size 12px;
    color #42A3FD;
    padding 0 0 0 5px;
  }
  .consumed-head{
    padding 0 10px 0 0;
    color white;
    font-size 16px;
  }
  .period{
    font-size 12px;
    color white;
  }
  .detail-heading{
    display flex;
    justify-content space-between;
    padding 20px 20px;
  }
  .heading-text{
    font-size 14px;
    color #42A3FD;
  }
  @media only screen and (max-width: 599px) {
    .report-header{
      font-size 14px;
    }
    .report-overview-head{
      font-size 12px;
      margin 0 0 10px 0;
    }
    .report-overview-head.meter-status .report-overview-data{
      display block;
      padding 0 0 0 0;
    }
    .detail-item {
      padding: 5px 20px;
      margin: 0 0 2px 0;
    }
    .consumed-head{
      font-size 12px;
    }
    .period,
    .consumed-head{
      margin 0 0 0 0;
      padding 5px 0;
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
