import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Admin from '@/pages/admins/Index'
import Cart from '@/pages/Cart'
import New from '@/pages/admins/New'
import Edit from '@/pages/admins/Edit'
import Products from '@/pages/admins/Products'

Vue.use(Router)

export default new Router({
  mode: "history",
  linkExactActiveClass: "is-active",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/admin",
      name: "Admin",
      component: Admin,
      children: [
        {
          path: "new",
          name: "New",
          component: New
        },
        {
          path: "",
          name: "Products",
          component: Products,
        },
        {
          path: "edit/:id",
          name: "Edit",
          component: Edit,
        }
      ]
    },
    {
      path: "/cart",
      name: "Cart",
      component: Cart
    }
  ]
})
