import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import aaaPage from '@/components/aaaPage'

import Main from "@/view/main/main.vue"
import login from '@/view/login/login.vue'
import model from '@/components/model.vue'

import { parseComponent } from 'vue-template-compiler'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      name:'login',
      component:login

    },
    {
      path:"/home",
      name:"home",
      component:Main,
      children:[
        {
          path:"/model",
          name:"model",
          component:()=>import('@/components/model.vue'),
        }
      ]
    }

    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    // {
    //   path: '/aaa',
    //   name: 'aaa',
    //   component: aaaPage
    // }
  ]
})
