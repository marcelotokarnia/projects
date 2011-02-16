<template>
  <div>
  	<router-view v-if="allow"/>
  	<div v-if="!allow">
  	  You should send a GET request to this same host with the parameter 'checksum' containing the computed checksum of the first commit from this repository.
  	</div>
  </div>
</template>

<script>
export default {
  props: ['allow']
}
</script>

<style>
</style>