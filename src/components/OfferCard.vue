<template>
  <div class="container-fluid offer-container">
  	<div class="float-right">
  	  <span class="text-danger" v-if="offer.isPremium">
  	    <b>PREMIUM</b>
      </span>
    </div>
    <div>
      <button class="btn" :class="{'btn-warning btn-lg': offer.isPremium}">
        <a :href="offer.url" target="__blank">
          Shop Now at {{offer.name}}
          <p v-if="offer.ends" class="text-muted">
            Valid until {{(new Date(offer.ends)).toLocaleDateString()}}
          </p>
        </a>
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