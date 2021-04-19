<template>
  <q-page class="flex flex-center">
    <div class="notify-read-app">
      <q-header class="header row q-px-md full-width">
        <div class="notify-header-container col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-12 col-xs-12">
          <q-btn flat v-go-back=" '/main/notifications' " icon="arrow_back_ios"/>
          <!-- <q-icon class="header-icon" name="arrow_back_ios" @click="back"/> -->
          <p class="notify-header">{{ notify.head }}</p>
        </div>
      </q-header>
      <div class="main-container q-px-md">
        <div class="row full-width">
          <div class="notify-container col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-12 col-xs-12">
            <div class="notify-content">
              <div class="notify-head-container">
                <p class="notify-head">{{ notify.head }}</p>
              </div>
              <p class="message">{{ notify.message }}</p>
              <p class="notify-info-head">Ngày thông báo: <span class="notify-info-data text-italic">{{ notify.date }}</span></p>
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
  name: 'PageIndex',
  data () {
    return {

    }
  },
  computed: {
    notify () {
      return this.$store.getters.getNotify
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
  .notify-read-app {
    padding-top 30px;
    background-color #0A182E;
    width 100%;
    min-height calc(100vh - 60px);
    height auto;
  }
  .main-container{}
  .notify-container{
    margin-bottom 40px;
  }
  .notify-header-container{
    display flex;
    justify-content flex-start;
    align-items center;
  }
  .notify-header{
    font-size 16px;
    color white;
    text-align center;
    margin 0 0 0 0;
  }
  .header-icon{
    font-size 16px;
    padding 0 10px 0 0;
  }
  .notify-content{
    width 100%;
    padding 20px 20px;
    border-radius 25px;
    background-color #0A2F4D;
  }
  .notify-info-data{
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
  .notify-info-head,
  .message{
    font-size 14px;
    color white;
    padding 0 0 10px 0;
  }
  .message{
    text-align justify !important;
  }
  .notify-head-container{
    display flex;
    justify-content center;
    padding 0 0 20px 0;
  }
  .notify-head{
    text-align center;
    font-size 14px;
    color white;
  }
  @media only screen and (max-width: 599px) {
    .notify-header{
      font-size 14px;
    }
    .notify-info-head{
      font-size 12px;
      margin 0 0 5px 0;
    }
    .notify-head-container{
      padding 0 0 10px 0;
    }
    .notify-container{
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
