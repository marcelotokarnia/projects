import Vue from 'vue'

import '@/router.js'
import '@/store'

const testsContext = require.context('./specs', true, /\.spec.js$/)
testsContext.keys().forEach(testsContext)