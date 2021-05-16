const c1 = () => import(/* webpackChunkName: "page--src-templates-journal-vue" */ "E:\\Coding\\blog-with-gridsome\\src\\templates\\Journal.vue")
const c2 = () => import(/* webpackChunkName: "page--src-pages-journal-vue" */ "E:\\Coding\\blog-with-gridsome\\src\\pages\\Journal.vue")
const c3 = () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "E:\\Coding\\blog-with-gridsome\\src\\pages\\Index.vue")
const c4 = () => import(/* webpackChunkName: "page--src-pages-contact-vue" */ "E:\\Coding\\blog-with-gridsome\\src\\pages\\Contact.vue")
const c5 = () => import(/* webpackChunkName: "page--src-pages-about-vue" */ "E:\\Coding\\blog-with-gridsome\\src\\pages\\About.vue")
const c6 = () => import(/* webpackChunkName: "page--src-pages-404-vue" */ "E:\\Coding\\blog-with-gridsome\\src\\pages\\404.vue")

export default [
  {
    path: "/journal/:id/",
    component: c1
  },
  {
    path: "/journal/",
    component: c2
  },
  {
    path: "/home/",
    component: c3
  },
  {
    path: "/contact/",
    component: c4
  },
  {
    path: "/about/",
    component: c5
  },
  {
    name: "404",
    path: "/404/",
    component: c6
  },
  {
    name: "home",
    path: "/",
    component: c3
  },
  {
    name: "*",
    path: "*",
    component: c6
  }
]
