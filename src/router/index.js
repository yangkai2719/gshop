import  Vue from 'vue'
import VueRouter from 'vue-router'

import MSite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'

import Login from '../pages/Login/Login.vue'
import Shop from '../pages/Shop/Shop.vue'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods.vue'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings.vue'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo.vue'

import A from '../pages/test/A.vue'
import B from '../pages/test/B.vue'
import B1 from '../pages/test/B1.vue'
import B2 from '../pages/test/B2.vue'




Vue.use(VueRouter)

const router= new VueRouter({
  mode:'history',
  routes: [
    {
      path: '/msite',
      component: MSite,
      meta:{
        showFoot:true
      }
    },
    {
      path: '/search',
      component: Search,
      meta:{
        showFoot:true
      }
    },
    {
      path: '/order',
      component: Order,
      meta:{
        showFoot:true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta:{
        showFoot:true
      }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/shop',
      component: Shop,
      children:[
        {
          path:'/shop/goods',
          component:ShopGoods
        },
        {
          path:'/shop/ratings',
          component:ShopRatings
        },
        {
          path:'/shop/info',
          component:ShopInfo
        },
        {  path:'',
          redirect:'/shop/goods'
        }
      ]
    },
    {
      path:'/a',
      component:A
    },
    {
      path:'/b',
      component:B,
      children:[
        {
          path:'/b/b1',
          component:B1
        },
        {
          path:'/b/b2',
          component:B2
        },
      ]
    },
    {
      path: '/',
      redirect: '/msite'
    }
  ]
})
const paths=['/a','/b']
router.beforeEach((to,from,next)=>{
 console.log('beforeEach()',to,from)
  if (paths.indexOf(to.path)>=0) {
      if (Vue.store.state.user._id) {
          next()
      } else {
          next('/login')
  }
} else {
    next()
  }
})
export default router
