/* eslint-disable no-new */
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import selection from 'vue-text-selection'
import CreateJson from './components/CreateJson.vue'
import Home from './components/Home.vue'

Vue.use(VueRouter)
Vue.directive('selection', selection)

// const swName = 'service-worker.js'
// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', function () {
//     navigator.serviceWorker.register(swName).then(function (registration) {
//       // Registration was successful
//       console.log('Enregistrement du service worker')
//     }, function (err) {
//       // registration failed :(
//       console.log('ServiceWorker registration failed: ', err)
//     })
//   })
// }

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/createjson', component: CreateJson },
  ]
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
