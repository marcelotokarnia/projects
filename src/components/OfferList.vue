<template>
  <div>
  	<Logout />
  	<div class="container-fluid">
  	  <div class="row" v-for="(offer, index) of offers" v-if="index%2 === 0">
  	    <OfferCard :offer="offer" class="col-xs-5 col-sm-6 col-lg-4"></OfferCard>
  	    <OfferCard :offer="offers[index + 1]" class="col-xs-5 col-sm-6 col-lg-4" v-if="offers.length > index + 1"></OfferCard>
  	  </div>
  	</div>
  </div>
</template>

<script>
import {not, sort, contains, prop, filter, compose} from 'ramda'
import {isOfferEnabled} from '@/utils.js'
import Logout from '@/components/Logout.vue'
import OfferCard from '@/components/OfferCard.vue'
export default {
  data () {
  	return {
  	  offers: sort(compose(not, prop('isPremium')))(filter(isOfferEnabled)(this.$store.getters.offers))
  	}
  }, 
  components: {Logout, OfferCard}, 
  created () {
    this.$store.subscribe((mutation, state) => {
      if (contains(mutation.type)(['SAVE_FORM', 'REMOVE_FORM'])){
        this.offers = state.offers
      }
    })
  }
}
</script>

<style scoped>
</style>