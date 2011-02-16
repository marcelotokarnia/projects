import store from './store/index.js'

const isAllowed = (isPublic) => 
  isPublic || !!store.getters.username

const proceed = ({meta}, _, next) => 
  isAllowed(meta && meta.isPublic)
  	? next() 
  	: next({ name: 'login' })

export default proceed
