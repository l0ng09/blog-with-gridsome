// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import '../static/css/index.css'
import day from 'dayjs'

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.filter('date', function(value, format = 'YYYY-MM-DD HH:mm:ss') {
    return day(value).format(format)
  })
  Vue.mixin({
    data() {
      return { GRIDSOME_API_URL: process.env.GRIDSOME_API_URL }
    },
  })
}
