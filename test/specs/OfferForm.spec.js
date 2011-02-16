import Vue from 'vue'
import store from '../store'
import router from '@/router.js'
import OfferForm from '@/components/OfferForm.vue'
import { mount } from 'avoriaz'

describe('OfferForm.vue component', () => {
  it('testing some components methods', () => {

    const vm = mount(OfferForm, {store})
    expect(!!vm.methods().isValidUrl('www.airbnb.com')).to.be.true
    expect(!!vm.methods().isValidUrl('wwwairbnbcom')).to.be.false
    expect(!!vm.methods().isValidDescription('')).to.be.false
  })
})
