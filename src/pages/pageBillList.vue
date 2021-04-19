<template>
  <q-page class="flex flex-center">
    <div class="bill-app">
      <q-header class="header row q-px-md">
        <div class="bill-header-container col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-12 col-xs-12">
          <q-btn flat v-go-back=" '/main/profile' " icon="arrow_back_ios"/>
          <!-- <q-icon class="header-icon" name="arrow_back_ios" @click="back"/> -->
          <p class="bill-header">Hóa đơn năm nay</p>
        </div>
      </q-header>
      <div class="main-container q-px-md">
        <div class="row full-width">
        <div class="q-gutter-y-sm col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-12 col-xs-12">
          <q-list class="q-gutter-y-sm">
              <q-item class="bill-item-container" :to="'/bill/' + key" clickable v-ripple v-for="(item, key) in billList" :key ="key">
                <q-item-section>
                  <q-item-label class="bill-head">{{ item.billHead }}</q-item-label>
                  <q-item-label class="bill-detail">{{ item.billDetail }}</q-item-label>
                  <q-item-label class="bill-time">Mã hóa đơn: {{ item.billID }}</q-item-label>
                </q-item-section>
                <q-item-section side>
                <q-item-label class="text-white"  v-if="item.paid">{{ item.money }} đ</q-item-label>
                <q-item-label class="text-money" v-else>{{ item.money }} đ</q-item-label>
                <q-badge outline color="white" label="Đã thanh toán" v-if="item.paid"/>
                <q-badge outline color="primary_red" label="Chưa thanh toán" v-else/>
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
    billList () {
      return this.$store.getters.getBills
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
  p{
    margin 0;
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
  .bill-app {
    padding 16px 0 16px;
    background-color #0A182E;
    width 100%;
    min-height calc(100vh - 60px);
    height auto;
  }
  .main-container{
    // padding 66px 0;
  }
  .bill-item-container{
    background-color #0A243E;
    padding 10px 20px;
    border-radius 5px;
  }
  .billList-item-link{
    display flex;
    justify-content space-between;
    align-items center;
    text-decoration none;
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
    color white;
  }
  .bill-head{
    font-size 14px;
    color white;
  }
  .bill-detail{
    font-size 12px;
    color white;
    margin 16px 0 !important;
  }
  .bill-time{
    font-size 12px;
    color white;
    font-style italic;
    margin 0;
  }
  .item-arrow-icon{
    font-size 25px;
    color white;
  }
  .bill-item-info{
    width: -webkit-fill-available;
  }
  @media only screen and (max-width: 599px) {
    .bill-head{
      font-size 12px;
    }
    .bill-detail{
      font-size 11px;
    }
    .bill-time{
      font-size 11px;
    }
    .bill-item-container{
      padding 10px 15px;
    }
    .q-item__section--main~.q-item__section--side{
      padding 0 !important;
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
