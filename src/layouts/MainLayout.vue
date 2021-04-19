<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer class="nav-menu">
      <!-- <ul class="nav-ul col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-10 offset-sm-1 col-xs-10 offset-xs-1">
        <li class="nav-li">
          <router-link to="home">
            <q-icon id="tab1" class="layout-tabs-icon" @click="setTab(1)" v-bind:name="tabIndex.tabIndex==1 ? 'svguse:icon-SVG/icon.svg#home_active':'svguse:icon-SVG/icon.svg#home_white'"/>
          </router-link>
        </li>
        <li class="nav-li">
          <router-link to="reports">
            <q-icon id="tab2" class="layout-tabs-icon" @click="setTab(2)" v-bind:name="tabIndex.tabIndex==2 ? 'svguse:icon-SVG/icon.svg#report_active':'svguse:icon-SVG/icon.svg#report_white'"/>
          </router-link>
        </li>
        <li class="nav-li">
          <router-link to="notifications">
            <q-icon id="tab3" class="layout-tabs-icon" @click="setTab(3)" v-bind:name="tabIndex.tabIndex==3 ? 'svguse:icon-SVG/icon.svg#notification_active':'svguse:icon-SVG/icon.svg#notification_white'"/>
          </router-link>
        </li>
        <li class="nav-li">
          <router-link to="profile">
            <q-icon id="tab4" class="layout-tabs-icon" @click="setTab(4)" v-bind:name="tabIndex.tabIndex==4 ? 'svguse:icon-SVG/icon.svg#user_active':'svguse:icon-SVG/icon.svg#user'"/>
          </router-link>
        </li>
      </ul> -->
      <q-tabs align="justify" v-model="tab" indicator-color="primary_red" class="tabs">
        <q-route-tab to="home" v-bind:icon="tab=='1' ? 'svguse:icon-SVG/icon.svg#home_active' : 'svguse:icon-SVG/icon.svg#home_white'" name="1"/>
        <q-route-tab to="reports" v-bind:icon="tab=='2' ? 'svguse:icon-SVG/icon.svg#report_active':'svguse:icon-SVG/icon.svg#report_white'"  name="2"/>
        <q-route-tab to="notifications" v-bind:icon="tab=='3' ? 'svguse:icon-SVG/icon.svg#notification_active':'svguse:icon-SVG/icon.svg#notification_white'" name="3"/>
        <q-route-tab to="profile" v-bind:icon="tab=='4' ? 'svguse:icon-SVG/icon.svg#user_active':'svguse:icon-SVG/icon.svg#user'" name="4"/>
      </q-tabs>
    </q-footer>
  </q-layout>
</template>
<script>
export default {
  name: 'MainLayout',
  data () {
    return {
      mm: 2,
      io: null,
      tab: '1'
    }
  },
  computed: {
    tabIndex () {
      return this.$store.getters.getTab
    }
  },
  methods: {
    setTab (tab) {
      this.$store.dispatch('setTab', tab)
    }
  }
}
</script>
<style lang="stylus">
  *{
    margin 0;
  }
  .tabs{
    height 100%;
  }
  .layout-tabs-icon{
    font-size 28px;
  }
  .nav-menu{
    background-color: #0A182E;
    width: 100%;
    height: 60px;
    border-top 1px solid white;
    // z-index 1000;
    bottom 0;
  }
  .nav-menu,
  .nav-ul,
  .nav-li{
    margin 0;
    padding 0;
  }
  .nav-ul{
    display flex;
    justify-content space-between;
    box-sizing border-box;
    align-items center;
    width 100%;
  }
  li{
    list-style-type none;
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
    .layout-tabs-icon {
    font-size: 22px;
}
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
