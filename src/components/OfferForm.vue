<template>
  <div>
    <Logout />
    <form class="wrapper">
      <h2 class="text-center"><b>New offer</b></h2>
      <div class="row">
        <label class="form-check-label" for="name">* Name</label>
        <input id="name" class="form-control" v-model="offer.name" type="text">
        <small class="form-text text-danger" v-show="!isValidName(offer.name)">
        * This attribute is required and it must be unique
        </small>

      </div>
      <div class="row">
        <label class="form-check-label" for="url">* Url</label>
        <input id="url" class="form-control" type="text" v-model="offer.url">
        <small class="form-text text-danger" v-show="!isValidUrl(offer.url)">
        * This attribute is required and it must be a valid url
        </small>
      </div>
      <div class="row">
        <label class="form-check-label" for="description">* Description</label>
        <input id="description" class="form-control" type="text" v-model="offer.description">
        <small class="form-text text-danger" v-show="!isValidDescription(offer.description)">
        * This attribute is required and must have less than 500 characters
        </small>
      </div>
      <div class="row">
        <label class="form-check-label" for="starts">* Starts at</label>
        <input id="starts" class="form-control" type="date" v-model="offer.starts">
        <small class="form-text text-danger" v-show="!offer.starts">
        * This attribute is required
        </small>
      </div>
      <div class="row">
        <label class="form-check-label" for="ends">Ends at</label>
        <input id="ends" class="form-control" type="date" v-model="offer.ends">
      </div>
      <div class="form-check form-check-inline">
        <label class="form-check-label" for="premium">Premium</label>
        <input id="premium" class="form-check-input" type="checkbox" v-model="offer.isPremium">
      </div>
      <div class="row">
      	<button class="btn btn-primary h-center" :class="{'disabled': !isValidForm()}" @click="submit">
          <i v-if="loading">---</i>
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
  import Logout from '@/components/Logout.vue'
  import {contains, prop, map, not} from 'ramda'

  export default {
    data () {
      return {
        offers: this.$store.getters.offers,
        offer: {
          name: '',
          url: '',
          description: '',
          starts: null,
          ends: null,
          isPremium: false,
        },
        loading: false,
      }
    },
    created() {
      this.$store.subscribe((mutation, state) => {
        if(mutation.type === 'EDIT_OFFER') {
          this.offer = state.offer
        } else if (contains(mutation.type)(['SAVE_FORM', 'REMOVE_FORM'])){
          this.offers = state.offers
        }
      })
    },
    components: {Logout},
    methods: {
      clearForm () {
        this.loading = false
        this.offer = {
          name: '',
          url: '',
          description: '',
          starts: null,
          ends: null,
          isPremium: false,
        }
      },
      convertIntToStringDate (dateInt) {
        const dt = new Date(dateInt)
        return `${dt.getFullYear()}-${dt.getMonth() < 9 ? '0' : ''}${dt.getMonth() + 1}-${dt.getDate() < 9 ? '0' : ''}${dt.getDate()}`

      },
      isValidUrl(url) {
        return url.match(/[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/)
      },
      isValidName(name) {
        return not(
          contains(name)(
            map(
              prop('name')
            )(this.offers)
          )
        )
      },
      isValidDescription(description) {
        return description && description.length <= 500; 
      },
      isValidForm() {
        const {name, url, description, starts} = this.offer
        return this.isValidDescription(description) && 
          starts && 
          this.isValidName(name) && 
          this.isValidUrl(url)
      },
      submit () {
        const { offer, $store, isValidForm } = this
        if (!isValidForm()) {
          return
        }
        this.loading = true
        $store.dispatch(
          'SAVE_OFFER', 
          {...offer, starts: +(new Date(offer.starts)), ends: +(new Date(offer.ends))})
            .then(() => {
              this.clearForm()
            })
      },
    }
  }
</script>

<style scoped>
.wrapper {
  border-width: 1px;
  border-color: black;
  border-radius: 30px;
  border-style: dotted;
  max-width: 400px;
  padding: 10px 30px;
  margin: 0 auto;
}
.h-center {
  position: relative;
  left: 40%;
}
</style>