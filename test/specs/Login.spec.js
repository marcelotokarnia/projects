import Vue from 'vue'
import Login from '@/components/Login.vue'

describe('Login.vue component', () => {
  it('should start with empty username', async () => {
    const Constructor = Vue.extend(Login)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('input').value).to.equal('')
  })
})
