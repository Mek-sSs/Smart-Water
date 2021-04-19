<template>
  <q-page class="flex flex-center">
    <router-link :to="{ name: 'login'}" class="start-link">
      <div class="cover"></div>
    </router-link>
    <div class="start-app">
      <div class="row full-width">
        <div class="start-app-info-container col-xl-4 offset-xl-4 col-lg-4 offset-lg-4 col-md-4 offset-md-4 col-sm-4 offset-sm-4 col-xs-8 offset-xs-2">
          <div class="start-app-icon">
            <img class="img-stech-icon" src="../assets/logo/logo SSW.png" alt="">
            <p class="start-app-name">STech Smart Water</p>
            <p class="start-app-discription">Đồng hồ nước thông minh</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="stech-logo col-xl-4 offset-xl-4 col-lg-4 offset-lg-4 col-md-4 offset-md-4 col-sm-4 offset-sm-4 col-xs-8 offset-xs-2">
          <div class="start-app-stech-logo">
            <img src="../assets/logo/Stech.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
// import Vue from 'vue'
// import router from 'vue-router'
// Vue.use(router)
export default {
  methods: {
    wait () {
      setTimeout(this.go(), 2000)
    },
    go () {
      // this.$router.push({ name: 'login' })
      // console.log('Hello')
    }
  },
  mounted () {
    this.wait()
  }
}
</script>
<style lang="stylus">
  .cover{
    cursor auto;
    position absolute;
    top 0;
    bottom 0;
    left 0;
    right 0;
    z-index 100;
    background-color transparent;
  }
  .start-app {
    background-color #0A182E;
    width 100%;
    height 100vh;
    display flex;
    flex-direction column;
    justify-content center;
  }
  .start-app-icon,
  .stech-logo{
    display flex;
    flex-direction column;
    align-items center;
    justify-content center;
  }
  .start-app-icon{
    // margin 50px 0 0 0;
  }
  .start-app-name{
    font-size 22px;
    color white;
    text-align center;
    line-height 26px;
    padding 20px 0 10px 0;
    font-family SanFranciscoText-BoldG1;
  }
  .start-app-discription{
    font-family 'Roboto';
    font-size 14px;
    color white;
    text-align center;
    line-height 12px;
  }
  .start-app-stech-logo{
    margin-top 80px;
  }
  @media only screen and (max-width: 599px) {
    .img-stech-icon{
      width 45%;
    }
  }
  @media only screen and (max-width: 1023px) and (min-width: 600px) {
    .img-stech-icon{
      width 50%;
    }
  }
  @media only screen and (max-width: 1439px) and (min-width: 1024px) {

  }
  @media only screen and (max-width: 1919px) and (min-width: 1439px) {

  }
  @media only screen and (min-width: 1920px) {

  }
</style>
