<template>
  <div>
    <p>Você está logado como <b>{{username}}</b>!</p>
    <button class="btn btn-danger" @click="logout">
      <i v-if="loading">---</i>
      Logout
    </button>
    <button class="btn btn-success" v-if="$route.name !== 'list'" >
      <router-link :to="{name: 'list'}" class="text-white">Offers</router-link>
    </button>
    <button class="btn btn-primary" v-if="$route.name !== 'manage'" >
      <router-link :to="{name: 'manage'}"" class="text-white">Manage</router-link>
    </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
  	  username: this.$store.getters.username,
  	  loading: false
	  }
  },
  methods: {
    logout() {
      this.loading = true
      const { $store } = this
      $store.dispatch('LOGOUT')
        .then(() => {
          this.loading = false
          this.username = ''
          this.$router.go({
            path: this.$route.fullPath,
            force: true
          })
        })

    }
  }
}
</script>

<style>
</style>
