import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Post from '@/components/Post'
// import Detail from '@/components/Detail'
import Iken from '@/components/Iken'
import PostInfo from '@/components/PostInfo'
import PostShow from '@/components/PostShow'

Vue.use(Router)

const NotFound = {template: '<div>Not Found</div>'}
// const Post = {template: '<div>Post <br/><router-view></router-view></div>'}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/iken',
      name: 'Iken',
      component: Iken
    },
    {
      path: '/posts',
      component: Post,
      children: [
        {
          path: 'new', component: {template: '<div>New Post</div>'}
        },
        {
          path: 'postinfo', name: 'PostInfo', component: PostInfo
        }
      ]
    },
    {
      path: '/posts/:id',
      name: 'PostShow',
      component: PostShow
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
