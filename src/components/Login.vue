<template>
  <div class="center-wrapper">
    <div v-if="!authenticated">
    	<div>
    	  Type your username and place your eye near camera
    	</div>
    	<form>
        <div class="form-row">
          <div class="col">
      	    <input class="form-control" type="text" v-model="username" @keyup.enter="login()">
          </div>
          <div class="col">
        	  <button class="btn btn-primary" @click="login">
              <i v-if="loading">---</i>
              Confirmar
            </button>
          </div>
        </div>
  	   </form>
    </div>
    <Logout v-if="authenticated"></Logout>
  </div>
</template>

<script>
import Logout from '@/components/Logout.vue'

export default {
  data () {
    return {
      authenticated: !!this.$store.getters.username,
  	  username: this.$store.getters.username,
  	  loading: false
	  }
  },
  methods: {
  	login() {
  	  this.loading = true
      const { username, $router, $store } = this
      $store.dispatch('LOGIN', { username })
      	.then(() => {
  	      $router.go('/')
  	      this.loading = false
        })

  	},
  },
  components: {Logout}
}
</script>

<style scope>
.center-wrapper {
  width: 50vw;
  height: 50vh;
  margin: 0 auto;
  padding: 30px 0;
}
</style>