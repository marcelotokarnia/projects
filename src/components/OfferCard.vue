<template>
  <div class="container-fluid offer-container">
  	<div class="float-right">
  	  <span class="text-danger" v-if="offer.isPremium">
  	    <b>PREMIUM</b>
      </span>
    </div>
    <div>
      <p>
        {{offer.name}}
      </p>
    </div>
    <div>
      <button class="btn" :class="{'btn-success btn-lg': offer.isPremium}">
        Shop Now
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: {
    offer: {
      type: Object
    }
  }
}
</script>

<style>
.offer-container {
  width: 100px;
  text-align: center;
  border-width: 1px;
  border-color: black;
  border-radius: 30px;
  border-style: double;
  padding: 30px;
  margin: 10px auto;
}
</style>