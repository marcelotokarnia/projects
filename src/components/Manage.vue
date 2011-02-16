<template>
  <div>
    <OfferForm />
    <OfferTable />
  </div>
</template>

<script>
import OfferForm from '@/components/OfferForm.vue'
import OfferTable from '@/components/OfferTable.vue'

export default {
  data() {
  	return {

  	}
  },
  components: {OfferForm, OfferTable},
}
</script>

<style>
</style>