// The following line loads the standalone build of Vue instead of the runtime-only build,
// so you don't have to do: import Vue from 'vue/dist/vue'
// This is done with the browser options. For the config, see package.json
import Vue from 'vue'
import cssify from 'cssify'
import Sass from 'sass'
import App from './App.vue'

cssify.byUrl('https://cdnjs.cloudflare.com/ajax/libs/bulma/0.4.1/css/bulma.css')

new Vue({ // eslint-disable-line no-new
  el: '#app',
  render: (h) => h(App)
})
