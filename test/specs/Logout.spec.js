import Vue from 'vue'
import store from '../store'
import router from '@/router.js'
import Logout from '@/components/Logout.vue'

describe('Logout.vue component in a Vue env with router and store', () => {
  it('should start with "mocked" username', (done) => {
    const vm = new Vue({
      store,
      router,
      components: {
      	Logout
      }, template: "<Logout />"
    }).$mount()
    Vue.nextTick().
      then(() => {
		expect(vm.$el.querySelector('div p b').innerText).to.equal('mocked')
		done()
      })
  })
})
