import Vue from 'vue'
import App from './App.vue'

import vuePayPop from './vue-pay-pop.vue'
const PayPop = {
  install(Vue, options) {
    Vue.component(vuePayPop.name, vuePayPop)
  }
}
if (typeof window !== 'undefined' && window.Vue) {
  window.PayPop = PayPop
  Vue.use(PayPop)
}
export default PayPop

new Vue({
  el: '#app',
  render: h => h(App)
})
