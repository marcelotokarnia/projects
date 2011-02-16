import Vue from 'vue'
import Router from 'vue-router'
import Manage from '@/components/Manage.vue'
import auth from '@/auth'
import Login from '@/components/Login.vue'
import OfferList from '@/components/OfferList.vue'

Vue.use(Router)

const route = (path, name, component, isPublic) => ({
  path,
  name,
  component,
  meta: {isPublic}
})

const router = new Router({
  routes: [
    route('/', 'list', OfferList, false),
    route('/manage', 'manage', Manage, false),
    route('/login', 'login', Login, true)
  ],
})

router.beforeEach(auth)

export default router