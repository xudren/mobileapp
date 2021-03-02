import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
const originalPush = Router.prototype.push

//修改原型对象中的push方法

Router.prototype.push = function push(location) {

  return originalPush.call(this, location).catch(err => err)

}
export default new Router({
  routes: [{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/city',
      name: 'city',
      component: () => import('../components/city/city')
    },
    {
      path: '/detail/:id',
      name: 'DeTAIL',
      component: () => import('../components/detail/Detail')
    },
    {
      path: '/personal',
      name: 'personal',
      component: () => import('../components/personalInformation')
    }
  ]
})
