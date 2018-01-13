<template>
  <div class="center-wrapper">
    <div v-if="!authenticated">
    	<div>
    	  Type your username and place your eye near camera
    	</div>
    	<div class="form">
        <div class="form-row">
          <div class="col">
      	    <input class="form-control" type="text" v-model="username" @keyup.enter="login()">
          </div>
          <div class="col">
        	  <button type="button" class="btn btn-primary" @click="login()">
              <i v-if="loading">---</i>
              Confirmar
            </button>
          </div>
        </div>
  	   </div>
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
  created () {
    this.$store.subscribe((mutation, state) => {
      if(mutation.type === 'LOGIN') {
        this.username = state.username
        this.authenticated = !!this.username
        if (this.authenticated) {
          this.$router.go('/')
        }
      }
    })
  },
  methods: {
  	login() {
  	  this.loading = true
      const { username, $router, $store } = this
      $store.dispatch('LOGIN', { username })
        .then(() => {
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