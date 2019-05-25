/* eslint-disable no-new */
import Vue from 'vue'
import App from './App.vue'

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

new Vue({
  el: '#app',
  render: h => h(App)
})
