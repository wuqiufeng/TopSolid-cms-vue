
const scheduleRouter = {
    route: null,
    name: null,
    title: '现场管理',
    type: 'folder',
    icon: 'iconfont icon-huiyuanguanli',
    filePath: 'views/admin/',
    order: null,
    inNav: true,
    children: [
      {
        route: '/admin/user/list',
        name: null,
        title: '生产排产',
        type: 'folder', // 取 route 为默认加载页
        icon: 'iconfont icon-huiyuanguanli',
        filePath: 'views/admin/user/',
        inNav: true,
        children: [
          {
            title: '手工计划',
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
        route: '/admin/group/list',
        name: null,
        title: '进度管控',
        type: 'folder', // 取 route 为默认加载页
        icon: null,
        filePath: 'views/admin/group',
        inNav: true,
        children: [
          {
            route: '/admin/group/list',
            type: 'view',
            name: 'groupList',
            inNav: true,
            filePath: 'views/admin/group/GroupList.vue',
            title: '备料扫描',
            icon: 'iconfont icon-huiyuanguanli',
          },
          {
            route: '/admin/group/add',
            type: 'view',
            name: 'groupAdd',
            filePath: 'views/admin/group/GroupAdd.vue',
            inNav: true,
            title: '自身扫码',
            icon: 'iconfont icon-add',
          },
          {
            route: '/admin/group/add',
            type: 'view',
            name: 'groupAdd',
            filePath: 'views/admin/group/GroupAdd.vue',
            inNav: true,
            title: '油漆扫描',
            icon: 'iconfont icon-add',
          },
          {
            route: '/admin/group/add',
            type: 'view',
            name: 'groupAdd',
            filePath: 'views/admin/group/GroupAdd.vue',
            inNav: true,
            title: '进度查询',
            icon: 'iconfont icon-add',
          },
        ],
      },
      {
        route: '/admin/group/list',
        name: null,
        title: '数据管理',
        type: 'folder', // 取 route 为默认加载页
        icon: null,
        filePath: 'views/admin/group',
        inNav: true,
        children: [
          {
            route: '/admin/group/list',
            type: 'view',
            name: 'groupList',
            inNav: true,
            filePath: 'views/admin/group/GroupList.vue',
            title: '计划警报',
            icon: 'iconfont icon-huiyuanguanli',
          },
          {
            route: '/admin/group/add',
            type: 'view',
            name: 'groupAdd',
            filePath: 'views/admin/group/GroupAdd.vue',
            inNav: true,
            title: '进度查询',
            icon: 'iconfont icon-add',
          },
          {
            route: '/admin/group/add',
            type: 'view',
            name: 'groupAdd',
            filePath: 'views/admin/group/GroupAdd.vue',
            inNav: true,
            title: '进度记录',
            icon: 'iconfont icon-add',
          },
        ],
      },

    ],
  }
  
  export default scheduleRouter
  