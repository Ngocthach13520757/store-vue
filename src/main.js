// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './../node_modules/bulma/css/bulma.css'
import VeeValidate from 'vee-validate';

Vue.config.productionTip = false
Vue.use(VeeValidate, { events: 'blur' });

/* eslint-disable no-new */
new Vue({
  el: '#app',//inject to app id in index.html
  router,//inject router to use
  components: { App },//children component for use
  template: '<App/>' //template app.vue
})
