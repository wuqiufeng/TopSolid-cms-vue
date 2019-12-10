const saveRouter = {
  route: null,
  name: null,
  title: '优化备料',
  type: 'folder',
  icon: 'iconfont icon-huiyuanguanli',
  filePath: 'views/mrp/',
  order: null,
  inNav: true,
  children: [
    {
      route: '/mrp',
      name: null,
      title: '优化排版',
      type: 'folder', // 取 route 为默认加载页
      icon: 'iconfont icon-huiyuanguanli',
      filePath: 'views/admin/user/',
      inNav: true,
      children: [
        {
          title: '优化组合',
          type: 'view',
          name: 'userList',
          route: '/admin/user/list',
          filePath: 'views/admin/user/UserList.vue',
          inNav: true,
          icon: 'iconfont icon-huiyuanguanli',
        },
      ],
    },
    {
      route: '/mrp',
      name: null,
      title: '项目管理',
      type: 'folder', // 取 route 为默认加载页
      icon: 'iconfont icon-huiyuanguanli',
      filePath: 'views/admin/user/',
      inNav: true,
      children: [
        {
          title: '裁板锯数据管理',
          type: 'view',
          name: 'userList',
          route: '/admin/user/list',
          filePath: 'views/admin/user/UserList.vue',
          inNav: true,
          icon: 'iconfont icon-huiyuanguanli',
        },
        {
          title: '手工数据管理',
          type: 'view',
          name: 'userList',
          route: '/admin/user/list',
          filePath: 'views/admin/user/UserList.vue',
          inNav: true,
          icon: 'iconfont icon-huiyuanguanli',
        },
      ],
    },
  ],
}

export default saveRouter
