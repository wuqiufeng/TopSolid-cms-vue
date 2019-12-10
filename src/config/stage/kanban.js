const kanbanRouter = {
    route: null,
    name: null,
    title: '看板管理',
    type: 'folder', // 类型: folder, tab, view
    icon: 'iconfont icon-tushuguanli',
    filePath: 'views/book/', // 文件路径
    order: null,
    inNav: true,
    children: [
      {
        title: '生产看板',
        type: 'folder',
        name: 'bookAdd',
        route: '/book/add',
        filePath: 'views/book/BookAdd.vue',
        inNav: true,
        icon: 'iconfont icon-tushuguanli',
        children: [
            {
              title: '工单看板',
              type: 'view',
              name: 'userList',
              route: '/admin/user/list',
              filePath: 'views/admin/user/UserList.vue',
              inNav: true,
              icon: 'iconfont icon-huiyuanguanli',
            },
            {
                title: '工序看板',
                type: 'view',
                name: 'userList',
                route: '/admin/user/list',
                filePath: 'views/admin/user/UserList.vue',
                inNav: true,
                icon: 'iconfont icon-huiyuanguanli',
            }
        ],
      },
      {
        title: '生管看板',
        type: 'folder',
        name: 'bookAdd',
        route: '/book/list',
        filePath: 'views/book/BookList.vue',
        inNav: true,
        icon: 'iconfont icon-tushuguanli',
        children: [
            {
              title: '生产进度',
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
  
  export default kanbanRouter
  