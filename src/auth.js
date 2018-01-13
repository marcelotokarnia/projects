import store from './store/index.js'

const isAllowed = (isPublic) => 
  isPublic || !!store.getters.username

const proceed = ({meta, path}, to, next) => 
  isAllowed(meta && meta.isPublic)
  	? next() 
  	: next({ name: 'login' })

export default proceed
