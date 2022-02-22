import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// TEMPORARIO!
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkFsZXhhbmRlciBBbHZlcyIsImVtYWlsIjoiYWVjYTc3OTFAZ21haWwuY29tIiwiYWRtaW4iOnRydWUsImlhdCI6MTY0NTU0MzAyMSwiZXhwIjoxNjQ1ODAyMjIxfQ.y17WdnIvvviU9IpYzeRY3B9Clc3-BO4fvBxnp5-bwLQ'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')