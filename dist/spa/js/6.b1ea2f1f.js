(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"7bda":function(t,a,l){"use strict";l.r(a);var s=function(){var t=this,a=t.$createElement,l=t._self._c||a;return l("q-page",{staticClass:"flex flex-center"},[l("div",{staticClass:"bill-read-app"},[l("q-header",{staticClass:"header row q-px-md"},[l("div",{staticClass:"bill-header-container col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-12 col-xs-12"},[l("q-btn",{directives:[{name:"go-back",rawName:"v-go-back",value:"/main/profile",expression:" '/main/profile' "}],attrs:{flat:"",icon:"arrow_back_ios"}}),l("p",{staticClass:"bill-header"},[t._v("Hóa đơn tiền nước định kỳ")])],1)]),l("div",{staticClass:"main-container q-px-md"},[l("div",{staticClass:"row full-width"},[l("div",{staticClass:"bill-container col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-12 col-xs-12"},[l("div",{staticClass:"bill-content"},[l("div",{staticClass:"bill-head-container"},[l("p",{staticClass:"bill-head"},[t._v("Hóa đơn tiền nước tháng 5/2020")])]),l("p",{staticClass:"bill-info-head"},[t._v("Tên khách hàng: "),l("span",{staticClass:"bill-info-data"},[t._v(t._s(t.bill.customerName))])]),l("p",{staticClass:"bill-info-head"},[t._v("Mã đồng hồ: "),l("span",{staticClass:"bill-info-data"},[t._v(t._s(t.bill.meterID))])]),l("p",{staticClass:"bill-info-head"},[t._v("Số nước đầu, ngày tính: "),l("span",{staticClass:"bill-info-data"},[t._v(t._s(t.bill.meterStart.value)+" m"),l("sup",[t._v("3")]),t._v(" - "+t._s(t.bill.meterStart.date))])]),l("p",{staticClass:"bill-info-head"},[t._v("Số nước cuối, ngày tính: "),l("span",{staticClass:"bill-info-data"},[t._v(t._s(t.bill.meterEnd.value)+" m"),l("sup",[t._v("3")]),t._v(" - "+t._s(t.bill.meterEnd.date))])]),l("p",{staticClass:"bill-info-head"},[t._v("Chi tiết công thức tính tiền: "),l("span",{staticClass:"bill-info-data"},[t._v(t._s(t.bill.calculationMethod))])]),l("p",{staticClass:"bill-info-head"},[t._v("Thành tiền: "),l("span",{staticClass:"bill-info-data"},[t._v(t._s(t.bill.total))])]),l("p",{staticClass:"bill-info-head"},[t._v("Ngày thanh toán: "),l("span",{staticClass:"bill-info-data text-italic"},[t._v(t._s(t.bill.paidDateTime))])])])]),l("div",{staticClass:"check-out-btn-container col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-12 col-xs-12"},[t.bill.paid?l("q-btn",{staticClass:"full-width q-px-xl",attrs:{unelevated:"",size:"22px",align:"center",label:"THANH TOÁN",rounded:"",type:"submit",color:"btn_color"}}):t._e()],1)])])],1)])},i=[],e=l("2b0e"),n=l("8c4f");e["a"].use(n["a"]);var c={name:"PageIndex",data(){return{}},computed:{bill(){return this.$store.getters.getBillIfo}},methods:{back(){this.$router.go(-1)}}},o=c,d=(l("bef0"),l("2877")),r=l("9989"),b=l("e359"),f=l("9c40"),p=l("0016"),v=l("2eeb"),h=l("eebe"),_=l.n(h),m=Object(d["a"])(o,s,i,!1,null,null,null);a["default"]=m.exports;_()(m,"components",{QPage:r["a"],QHeader:b["a"],QBtn:f["a"],QIcon:p["a"]}),_()(m,"directives",{GoBack:v["a"]})},bef0:function(t,a,l){"use strict";l("da28")},da28:function(t,a,l){}}]);