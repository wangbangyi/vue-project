export default [
  {
    path: '/auth/register',
    name: 'Register',
    component: () => import('@/views/auth/Register')
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home')
  },
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/auth/login',
    name: 'Login',
    component: () => import('@/views/auth/Login')
  },

  

  // 编辑资料路由
  {
    path: '/users/1/edit',
    component: () => import('@/views/users/Edit.vue'),
    children: [
      {
        path: '',
        name: 'EditProfile',
        component: () => import('@/views/users/Profile.vue'),
        meta: { auth: true }
      },
      // 添加编辑头像路由
      {
        path: '/users/1/edit_avatar',
        name: 'EditAvatar',
        component: () => import('@/views/users/Avatar.vue'),
        meta: { auth: true }
      },
      // 添加修改密码路由
      {
        path: '/users/1/edit_password',
        name: 'EditPassword',
        component: () => import('@/views/users/Password.vue'),
        meta: { auth: true }
      }
    ]
  },

  // 创作文章路由
  {
    path: '/articles/create',
    name: 'Create',
    component: () => import('@/views/articles/Create'),
    // 我们在配置项中设置 meta 为 { auth: true }，以标识当前路由需要登录才能访问
    meta: { auth: true }
  },
  
]