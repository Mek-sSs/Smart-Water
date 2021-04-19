<template>
  <q-page class="flex flex-center">
    <div class="password-app">
      <q-header class="header row q-px-lg full-width">
        <div class="password-header-container col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-12 col-xs-12">
          <q-btn flat v-go-back=" '/main/profile' " icon="arrow_back_ios"/>
          <p class="password-header">Đổi mật khẩu</p>
        </div>
      </q-header>
      <div class="main-container q-px-lg">
        <div class="main-inner-container row">
        <div class="col-xl-4 offset-xl-4 col-lg-4 offset-lg-4 col-md-8 offset-md-2 col-sm-10 offset-sm-1 col-xs-12">
          <q-form class="" @submit="submit()">
            <div class="q-gutter-y-md" style="max-weight: 500px">
              <q-input class="full-width" v-model="oldPass" rounded standout bg-color="white" type="password" placeholder="Mật khẩu cũ">
                <template v-slot:prepend>
                  <q-icon class="password-textbox-icon" name="svguse:icon-SVG/icon.svg#password_grey"/>
                </template>
              </q-input>
              <q-input class="full-width" v-model="newPass" rounded standout bg-color="white" type="password" placeholder="Mật khẩu mới">
                <template v-slot:prepend>
                  <q-icon class="password-textbox-icon" name="svguse:icon-SVG/icon.svg#password_grey"/>
                </template>
              </q-input>
              <q-input class="full-width" v-model="confirmPass" rounded standout bg-color="white" type="password" placeholder="Xác nhận mật khẩu">
                <template v-slot:prepend>
                  <q-icon class="password-textbox-icon" name="svguse:icon-SVG/icon.svg#password_grey"/>
                </template>
              </q-input>
              <q-btn class="q-px-sm float-right"  no-wrap unelevated size="22px" align="center" label="XÁC NHẬN" rounded type="submit" color="btn_color"/>
            </div>
          </q-form>
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
    oldPass: {
      get () {
        return this.$store.getters.getOld
      },
      set (value) {
        this.$store.dispatch('setOld', value)
      }
    },
    newPass: {
      get () {
        return this.$store.getters.getNew
      },
      set (value) {
        this.$store.dispatch('setNew', value)
      }
    },
    confirmPass: {
      get () {
        return this.$store.getters.getConfirm
      },
      set (value) {
        this.$store.dispatch('setConfirm', value)
      }
    }
  },
  methods: {
    loginStatus () {
      if (!this.$store.getters.getToken) {
        return this.$router.push({ name: 'login' })
      }
    },
    submit () {
      if (this.newPass === this.confirmPass && this.oldPass === '12345678') {
        this.$router.push({ name: 'profile' })
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
  .password-app {
    padding-top 30px;
    background-color #0A182E;
    width 100%;
    min-height calc(100vh - 60px);
    height auto;
  }
  .header-icon{
    font-size 16px;
    padding 0 10px 0 0;
  }
  .bill-header{
    font-size 16px;
    color white;
    text-align center;
    margin 0 0 0 0;
  }
  .main-container{}
  .main-inner-container{
    width: 100%;
  }
  .password-header-container{
    display flex;
    justify-content flex-start;
    align-items center;
  }
  .password-header{
    font-size 16px;
    color white;
    text-align center;
    margin 0 0 0 0;
  }
  .q-field__inner{
    width 100%;
  }
  .btn-fixed-width{
    width: 300px;
  }
  .q-field__control-container{
    width: -webkit-fill-available;
  }
  .q-checkbox__label{
    color white;
  }
  .q-checkbox__svg {
    color: #000;
  }
  .q-btn__content{
    width: -webkit-fill-available;
  }
  .q-field--standout.q-field--highlighted .q-field__native{
    color grey !important;
    font-size 16px;
  }
  .q-field--standout{
    font-size 16px;
  }
  @media only screen and (max-width: 599px) {

  }
  @media only screen and (max-width: 1023px) and (min-width: 600px) {

  }
  @media only screen and (max-width: 1439px) and (min-width: 1024px) {

  }
  @media only screen and (max-width: 1919px) and (min-width: 1439px) {

  }
  @media only screen and (min-width: 1920px) {

  }
</style>
