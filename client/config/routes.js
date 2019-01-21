// import Todo from '../views/todo/todo.vue'
// import Logins from '../views/login/login.vue'

export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    // path: '/app/:id',
    path: '/app',
    props: true,
    component: () => import(/* webpackChunkName: "todo-view" */'../views/todo/todo.vue'),
    // component: Todo,
    name: 'app',
    meta: {
      title: 'this is app',
      description: 'asdfg'
    }

    /*,
    children: [
      {
        path: 'test',
        component: Logins
      }
    ] */
  },
  {
    path: '/login',
    component: () => import(/* webpackChunkName: "login-view" */'../views/login/login.vue')
    // component: Logins
  }
]
