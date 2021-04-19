<template>
  <q-page class="flex flex-center">
    <div class="login-app">
      <div class="row q-px-lg full-width">
        <div class="login-app-info-container col-xl-4 offset-xl-4 col-lg-4 offset-lg-4 col-md-4 offset-md-4 col-sm-4 offset-sm-4 col-xs-12">
          <div class="login-app-icon">
            <img class="img-stech-icon" src="../assets/logo/logo SSW.png" alt="">
            <p class="login-app-name">STech Smart Water</p>
            <p class="login-app-discription">Đồng hồ nước thông minh</p>
          </div>
        </div>
      </div>
      <div class="row q-px-lg full-width">
        <div class="col-xl-4 offset-xl-4 col-lg-4 offset-lg-4 col-md-8 offset-md-2 col-sm-10 offset-sm-1 col-xs-12">
          <q-form @submit="login">
            <div class="q-gutter-y-md" style="max-weight: 500px">
              <q-input class="full-width" required v-model="username" rounded standout bg-color="white" color="primary" placeholder="Tên đăng nhập">
                <template v-slot:prepend>
                  <q-icon class="login-textbox-icon" name="svguse:icon-SVG/icon.svg#user_grey"/>
                </template>
                <template v-slot:append>
                  <q-icon class="login-textbox-icon" name="svguse:icon-SVG/icon.svg#qr_grey"/>
                </template>
              </q-input>
              <q-input class="full-width" required v-model="password" rounded standout bg-color="white" type="password" placeholder="Mật khẩu">
                <template v-slot:prepend>
                  <q-icon class="login-textbox-icon" name="svguse:icon-SVG/icon.svg#password_grey"/>
                </template>
              </q-input>
              <q-checkbox size="xs" keep-color v-model="remember_check" label="Ghi nhớ tên đăng nhập" color="check_color"/>
              <q-btn class="full-width q-px-lg"  no-wrap unelevated size="22px" align="center" label="ĐĂNG NHẬP" rounded type="submit" color="btn_color"/>
            </div>
          </q-form>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>

export default {
  data () {
    return {
      // remember_check: []
    }
  },
  computed: {
    username: {
      get () {
        return this.$store.getters.getUsername
      },
      set (value) {
        this.$store.dispatch('setUsername', value)
      }
    },
    password: {
      get () {
        return this.$store.getters.getPassword
      },
      set (value) {
        this.$store.dispatch('setPassword', value)
      }
    },
    remember_check: {
      get () {
        return this.$store.getters.getRemember
      },
      set (value) {
        this.$store.dispatch('setRemember', value)
      }
    }
  },
  methods: {
    async login () {
      const user = {
        username: this.username,
        password: this.password
      }
      const res = await this.$api.post('token', user)
      if (res.data.status === '0') {
        console.log('Username or password incorrect!')
      } else if (res.data.status === '1') {
        this.$store.dispatch('setPassword', '')
        localStorage.setItem('user-token', res.data.token)
        this.$router.push({ name: 'home' })
      }
    }
  },
  mounted () {

  }
}
</script>
<style lang="stylus">
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
  .login-app {
    background-color #0A182E;
    width 100%;
    height 100vh;
    display flex;
    flex-direction column;
    justify-content center;
  }
  .login-app-icon{
    display flex;
    flex-direction column;
    align-items center;
    justify-content center;
    width 100%;
  }
  .login-app-name{
    font-size 22px;
    color white;
    text-align center;
    padding 20px 0 30px 0;
  }
  .login-app-discription{
    font-size 14px;
    color white;
    margin 0 0 30px 0;
  }
  @media only screen and (max-width: 599px) {
    .img-stech-icon{
      width 45%;
    }
    .login-app-name{
      margin 0 0 0 0;
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
    .q-px-lg{
      padding-left 0 !important;
      padding-right 0 !important;
    }
  }
  @media only screen and (min-width: 1920px) {
    .q-px-lg{
      padding-left 0 !important;
      padding-right 0 !important;
    }
  }
</style>
