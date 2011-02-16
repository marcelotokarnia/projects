<template>
  <div class="wrapper">
    <h2 class="text-center"><b>Available Offers</b></h2>
    <table class="table">
      <tr>
        <th scope="col" @click="orderBy('id')">Id</th>
        <th scope="col" @click="orderBy('name')">Name</th>
        <th scope="col" @click="orderBy('url')">Url</th>
        <th scope="col" @click="orderBy('status')">Status</th>
        <th scope="col" >Actions</th>
  	  </tr>
	  <tr v-for="offer of offers">
	    <th scope="row" >{{offer.id}}</th>
	    <td>{{offer.name}}</td>
	    <td>{{offer.url}}</td>
	    <td>{{offer.status ? 'enabled' : 'disabled'}}</td>
	    <td>
	  	  <button class="btn btn-primary" @click="edit(offer)">edit</button>
	  	  <button class="btn" :class="{'btn-success': !offer.status, 'btn-danger': offer.status}" @click="enable(offer)">{{offer.status ? 'disable' : 'enable'}}</button>
	  	  <button class="btn btn-danger" @click="remove(offer)">destroy</button>
  	    </td>
	  </tr>
	</table>
  </div>
</template>

<script>
import {contains, sort, prop, map, assoc} from 'ramda'
import {isOfferEnabled} from '@/utils.js'
export default {
  data() {
    return {offers: this.newData(this.$store.getters.offers)}
  }, 
  created() {
  	this.$store.subscribe((mutation, state) => {
  	  if(contains(mutation.type)(['SAVE_OFFER', 'REMOVE_OFFER', 'ENABLE_OFFER'])) {
  	  	this.offers = this.newData(state.offers)
  	  }
  	})
  },
  methods: {
  	edit(offer){
  	  this.$store.dispatch('EDIT_OFFER', offer)
  	  window.scrollTo(0,0)
  	},
  	enable(offer){
  	  const currentTime = +(new Date())
  	  if ((offer.ends && currentTime > offer.ends) || currentTime < offer.starts) {
  	  	alert('Try changing the start and end date to enable this offer')
  	  } else {
  	  	this.$store.dispatch('ENABLE_OFFER', offer)
  	  }
  	},
  	remove({id}){
  	  this.$store.dispatch('REMOVE_OFFER', id)
  	},
    newData(offers) {
      return map(
        offer => assoc('status', isOfferEnabled(offer))(offer)
	  )(offers)
    }, 
    orderBy(attr) {
      return sort(prop(attr))(this.offers)
    }
  }
}
</script>

<style scoped>
.wrapper {
  padding: 20px;
}
</style>