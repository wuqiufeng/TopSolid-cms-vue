const cncRouter = {
    route: null,
    name: null,
    title: '数控加工',
    type: 'folder', // 类型: folder, tab, view
    icon: 'iconfont icon-tushuguanli',
    filePath: 'views/book/', // 文件路径
    order: null,
    inNav: true,
    children: [
      {
        title: '备料设备',
        type: 'folder',
        name: 'bookAdd',
        route: '/book/add',
        filePath: 'views/book/BookAdd.vue',
        inNav: true,
        icon: 'iconfont icon-tushuguanli',
        children: [
            {
              title: '电子锯',
              type: 'view',
              name: 'userList',
              route: '/admin/user/list',
              filePath: 'views/admin/user/UserList.vue',
              inNav: true,
              icon: 'iconfont icon-huiyuanguanli',
            },
            {
                title: '实木手工备料',
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
        title: '机加工设备',
        type: 'folder',
        name: 'bookAdd',
        route: '/book/list',
        filePath: 'views/book/BookList.vue',
        inNav: true,
        icon: 'iconfont icon-tushuguanli',
        children: [
            {
              title: '加工中心',
              type: 'view',
              name: 'userList',
              route: '/admin/user/list',
              filePath: 'views/admin/user/UserList.vue',
              inNav: true,
              icon: 'iconfont icon-huiyuanguanli',
            },
            {
                title: '数控钻',
                type: 'view',
                name: 'userList',
                route: '/admin/user/list',
                filePath: 'views/admin/user/UserList.vue',
                inNav: true,
                icon: 'iconfont icon-huiyuanguanli',
            },
            {
                title: '数控组框机',
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
        title: '油漆设备',
        type: 'folder',
        name: 'bookAdd',
        route: '/book/list',
        filePath: 'views/book/BookList.vue',
        inNav: true,
        icon: 'iconfont icon-tushuguanli',
        children: [
            {
              title: '往复式喷涂式',
              type: 'view',
              name: 'userList',
              route: '/admin/user/list',
              filePath: 'views/admin/user/UserList.vue',
              inNav: true,
              icon: 'iconfont icon-huiyuanguanli',
            },
            {
                title: 'UV线',
                type: 'view',
                name: 'userList',
                route: '/admin/user/list',
                filePath: 'views/admin/user/UserList.vue',
                inNav: true,
                icon: 'iconfont icon-huiyuanguanli',
            },
            {
                title: '油漆封边机',
                type: 'view',
                name: 'userList',
                route: '/admin/user/list',
                filePath: 'views/admin/user/UserList.vue',
                inNav: true,
                icon: 'iconfont icon-huiyuanguanli',
            }
        ],
      },
    ],
  }
  
  export default cncRouter
  