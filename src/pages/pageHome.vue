<template>
  <q-page class="flex flex-center">
    <div class="home-app">
      <q-header class="header q-px-md">
        <div class="row" style="height: 100%">
          <div class="head-container col-xl-5 offset-xl-1 col-lg-5 offset-lg-1 col-md-5 offset-md-1 col-sm-6 col-xs-6">
          <p class="header-head">Đồng hồ nước thông minh</p>
        </div>
        <div class="stech-logo-container col-xl-5 col-lg-5 col-md-5 col-sm-6 col-xs-6">
          <img class="header-stech-logo" src="../assets/logo/Stech.png" alt="">
          </div>
        </div>
      </q-header>
      <div class="home-main-container q-px-md">
        <div class="row q-gutter-y-lg full-width">
        <div class="col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-12 col-xs-12 info-container">
          <div class="info">
            <div class="info-customer">
              <div class="info-customer-row">
                <p class="info-customer-head">Khách hàng: <span class="info-customer-data">{{ customer.name }}</span></p>
                <p class="info-customer-head">Mã đồng hồ: <span class="info-customer-data">{{ customer.meterID }}</span></p>
              </div>
              <div class="info-customer-row">
                <p class="info-customer-head">Số điện thoại: <span class="info-customer-data">{{ customer.phone }}</span></p>
              </div>
              <div class="info-customer-row">
                <p class="info-customer-head">
                  Trạng thái đồng hồ:
                    <span v-if="customer.meterStatus=='online'" class="status-light-green">Đang hoạt động</span>
                    <span v-else class="status-light-red">Đóng van</span>
                </p>
                <div class="info-customer-btn-container">
                  <q-btn v-if="!customer.meterStatus" unelevated no-wrap no-caps padding="xs sm" align="center" label="Thanh toán" rounded color="btn_color"/>
                </div>
              </div>
            </div>
            <div class="info-consume">
              <div class="water">
                <p class="info-consume-head">Chỉ số nước hiện tại</p>
                <p class="info-consume-value">{{ water_bill.water }} m<sup>3</sup></p>
              </div>
              <div class="money">
                <p class="info-consume-head">Thành tiền</p>
                <p class="info-consume-money">{{ water_bill.money }} đ</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-12 col-xs-12 statistic-container">
          <div class="statistic">
            <div class="menu">
              <p class="statistic-head">Biểu đồ</p>
              <div class="menu-row">
                <div class="menu-col">
                  <div class="month-select" v-if="app.chartMode">
                    <q-btn flat icon="arrow_back_ios" color="btn_color" @click="monthDecrease()"/>
                    <p class="month">{{ app.monthToShow }}/{{ app.thisYear }}</p>
                    <q-btn flat icon="arrow_forward_ios" color="btn_color" @click="monthIncrease()"/>
                  </div>
                  <div class="year-select" v-else>
                    <q-btn flat icon="arrow_back_ios" color="btn_color" @click="yearDecrease()"/>
                    <p class="year">{{ app.yearToShow }}</p>
                    <q-btn flat icon="arrow_forward_ios" color="btn_color" @click="yearIncrease()"/>
                  </div>
                </div>
                <div class="menu-col">
                  <q-btn v-bind="{flat: !app.chartMode}" @click="modeChange(true)" unelevated dense no-caps size="none" padding="xs md" align="center" label="Tháng" rounded color="btn_color"/>
                  <q-btn v-bind="{flat: app.chartMode}" @click="modeChange(false)" unelevated dense no-caps size="none" padding="xs md" align="center" label="Năm" rounded color="btn_color"/>
                </div>
              </div>
            </div>
            <div class="chart-container">
              <apexchart v-if="chartMode" width="100%" :options="m_options" :series="m_getSerie" height="100%"></apexchart>
              <apexchart v-else width="100%" :options="y_options" :series="y_getSerie" height="100%"></apexchart>
            </div>
            <div class="type-contaier">
              <p class="type-head">Loại tiêu thụ nước: <span class="type-text">{{ app.type }}</span></p>
            </div>
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
      m_options: {
        title: {
          text: 'Lượng nước sử dụng (m3)',
          align: 'left',
          margin: 30,
          style: {
            fontSize: '14px',
            fontWeight: '500',
            fontFamily: 'Helvetica, Arial, sans-serif',
            color: '#397CBD'
          }
        },
        stroke: {
          curve: 'smooth',
          width: 3,
          colors: '#42A3FD'
        },
        chart: {
          type: 'line',
          id: 'vuechart-example',
          toolbar: {
            show: false
          }
        },
        xaxis: {
          show: true,
          categories: [1, 5, 10, 15, 20, 25, 30],
          labels: {
            show: true,
            style: {
              colors: ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff'],
              fontSize: '14px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 400,
              cssClass: 'apexcharts-xaxis-label'
            }
          },
          axisTicks: {
            show: false
          }
        },
        yaxis: {
          show: true,
          labels: {
            show: true,
            style: {
              colors: ['#fff'],
              fontSize: '14px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 400,
              cssClass: 'apexcharts-yaxis-label'
            }
          }
        },
        grid: {
          show: true,
          borderColor: '#42A3FD'
        }
      },
      y_options: {
        title: {
          text: 'Lượng nước sử dụng (m3)',
          align: 'left',
          margin: 30,
          style: {
            fontSize: '14px',
            fontWeight: '500',
            fontFamily: 'Helvetica, Arial, sans-serif',
            color: '#397CBD'
          }
        },
        stroke: {
          curve: 'smooth',
          width: 3,
          colors: '#42A3FD'
        },
        chart: {
          type: 'line',
          id: 'vuechart-example',
          toolbar: {
            show: false
          }
        },
        xaxis: {
          show: true,
          categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          labels: {
            show: true,
            style: {
              colors: ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff'],
              fontSize: '14px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 400,
              cssClass: 'apexcharts-xaxis-label'
            }
          },
          axisTicks: {
            show: false
          }
        },
        yaxis: {
          show: true,
          labels: {
            show: true,
            style: {
              colors: ['#fff'],
              fontSize: '14px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 400,
              cssClass: 'apexcharts-yaxis-label'
            }
          }
        },
        grid: {
          show: true,
          borderColor: '#42A3FD'
        }
      }
    }
  },
  computed: {
    customer () {
      return this.$store.getters.home_getCustomer
    },
    water_bill () {
      return this.$store.getters.getWater_Bill
    },
    app () {
      return this.$store.getters.getApp
    },
    m_getSerie () {
      return this.$store.getters.getSerie_m
    },
    y_getSerie () {
      return this.$store.getters.getSerie_y
    },
    getChart () {
      return this.$store.getters.getChart
    },
    chartMode () {
      return this.$store.getters.getChart_Mode
    }
  },
  methods: {
    modeChange (mode) {
      this.$store.dispatch('setChart_Mode', mode)
      this.$store.dispatch('setSerie')
    },
    showSerie () {
      this.chart.serie_showing = this.chart.serie_month
    },
    monthIncrease () {
      this.$store.dispatch('monthIncrement')
      this.$store.dispatch('setSerie')
    },
    monthDecrease () {
      this.$store.dispatch('monthDecrement')
      this.$store.dispatch('setSerie')
    },
    yearIncrease () {
      this.$store.dispatch('yearIncrement')
      this.$store.dispatch('setSerie')
    },
    yearDecrease () {
      this.$store.dispatch('yearDecrement')
      this.$store.dispatch('setSerie')
    },
    async loadUser () {
      // console.log(this.$store.getters.getToken)
      const res = await this.$api.get('customer', {
        headers: {
          Authorization: 'token ' + this.$store.getters.getToken
        }
      })
      console.log(res.data)
      const customer = {
        name: res.data.profile.name,
        meterID: res.data.payment.meter.name,
        phone: '',
        meterStatus: res.data.payment.meter.Status
      }
      this.$store.dispatch('setCustomerInfo', customer)
      // console.log(customer)
    },
    loginStatus () {
      if (!this.$store.getters.getToken) {
        this.$router.push({ name: 'login' })
      }
    }
  },
  beforeMount () {
    this.$store.dispatch('setSerie')
    // this.loadUser()
  },
  mounted () {
    // this.loginStatus()
  }
}
</script>
<style lang="stylus">
  .control-icon{
    font-size 15px;
  }
  .home-app {
    background-color #0A182E;
    width 100%;
    // min-height 100vh;
    height auto;
    min-height calc(100vh - 120px);
  }
  .statistic-head{
    color white;
  }
  .type-head{
    color white;
  }
  .header{
    height 60px;
    border-bottom 1px solid white;
    box-sizing border-box;
    background-color: #0A182E;
  }
  .head-container{
    display flex;
    justify-content flex-start;
    align-items center;
  }
  .stech-logo-container{
    display flex;
    justify-content flex-end;
    align-items center;

  }
  .header-stech-logo{
    // padding-right 30px;
  }
  .header-head{
    font-size 20px;
    color white;
    text-align center;
    margin 0 0 0 0;
  }
  .home-main-container{}
  .info,
  .statistic{
    margin 10px 0 0 0;
  }
  .info{
    width 100%;
    height auto;
    background-color white;
    border-radius 30px;
  }
  .info-customer{
    width 100%;
    height auto;
    border-bottom 2px solid black;
    padding 30px;
    display flex;
    flex-wrap wrap;
    align-items flex-start;
  }
  .info-customer-row{
    display flex;
    justify-content space-between;
    width 100%;
    padding 0 0 5px 0;
  }
  .info-customer-head{
    color black;
    font-weight 700;
    font-family 'Roboto';
  }

  .info-consume-head{
    color gray;
    margin 0 0 5px 0;
  }
  .info-consume-value{
    color #145CA6;
    margin 0;
  }
  .info-consume-money{
    color #FF9400;
    margin 0;
  }
  .info-consume-value,
  .info-consume-money{
    font-size 20px;
  }
  .money,
  .water{
    display flex;
    flex-direction column;
    justify-content center;
    align-items center;
    padding 20px 20px;
    background-color transparent;
    width 50%;
    height 100%;
  }
  .info-consume{
    width 100%;
    height auto;
    display flex;
    border-radius 0 0 30px 30px;
    background-color white;
  }
  .water{
    border-right 1px solid black;
  }
  .money{
    border-left 1px solid black;
  }
  .statistic{
    width 100%;
    height 100%;
  }
  .menu-row{
    display flex;
    justify-content space-between;
  }
  .menu-col{
    display flex;
  }
  .month,
  .year{
    color white;
    margin 0 0 0 0;
  }
  .year-select,
  .month-select{
    display flex;
    align-items center;
    justify-content space-between;
  }
  .info-container,
  .statistic-container{
    height: 80%;
  }
  .status-light-red,
  .status-light-green{
    position relative;
    padding 0 0 0 15px;
    font-weight 400;
  }
  .status-light-green::before{
    content '';
    background-color green;
    height 10px;
    width 10px;
    border-radius 50%;
    position absolute;
    left 1px;
    top 3px;
  }
  .status-light-red::before{
    content '';
    background-color red;
    height 10px;
    width 10px;
    border-radius 50%;
    position absolute;
    left 1px;
    top 3px;
  }
  .info-customer-data{
    font-weight 400;
  }
  .status-head div{
    display flex;
    align-items center;
  }
  .chart-container{
    min-height 300px;
    padding 0 0 20px 0;
  }
  .type-text{
    padding 0 0 0 15px;
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
      font-size 12px;
    }
    .info-consume-head{
      font-size 12px;
    }
    .info-customer-head,
    .info-customer-data{
      font-size 12px;
    }
  }
  @media only screen and (max-width: 1023px) and (min-width: 600px) {
    .info-customer{
      padding: 20px 20px;
    }
    .chart-container{
      height 500px;
    }

  }
  @media only screen and (max-width: 1439px) and (min-width: 1024px) {
    .chart-container{
      height 500px;
    }
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
