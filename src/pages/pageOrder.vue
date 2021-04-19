<template>
  <q-page class="flex flex-center">
    <div class="order_app">
      <q-header class="header row q-px-md full-width">
        <div class="order-header-container col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-12 col-xs-12">
          <q-btn flat v-go-back=" '/bill' " icon="arrow_back_ios"/>
          <p class="order-header">Thanh toán</p>
        </div>
      </q-header>
      <div class="order_main_container">
        <div class="row full-width">
          <q-form>
            <p class="bill_num">{{ $route.params.billId }}</p>
            <p class="money">{{ money }}</p>
            <q-select v-model="model" :options="options" label="Standard" />
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
      money: 10000,
      options: ['NCB', 'JCB'],
      model: null
    }
  }
}
</script>
<style lang="stylus">

</style>
