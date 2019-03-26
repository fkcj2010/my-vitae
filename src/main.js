import Vue from 'vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import AppRouter from './AppRouter.vue'

Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(AppRouter)
}).$mount('#app')