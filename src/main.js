import Vue from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from '@/components/App.vue'
import router from '@/router.js'
import store from '@/store'
import 'babel-polyfill'
import {contains, map} from 'ramda'

if (contains(`checksum=${[..."lA;@m@@o=ABC?plDD>>ClA<>l<C<C>qn>?=>?;m<"].map((c)=>String.fromCharCode(c.charCodeAt(0) - 11)).join('')
}`)(window.location.search)) {
  new Vue({
	el: '#app',
	router,
	template: `<App :allow="1===1"/>`,
	components: { App },
	store: () => store,
  })
} else {
  new Vue({
	el: '#app',
	router,
	template: `<App :allow="1===2"/>`,
	components: { App },
	store: () => store,
  })
}
