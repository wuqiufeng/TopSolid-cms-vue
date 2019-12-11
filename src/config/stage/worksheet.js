const worksheetRouter = {
    route: null,
    name: null,
    title: '工单数据',
    type: 'folder',
    icon: 'iconfont icon-huiyuanguanli',
    filePath: 'views/worksheet/',
    order: null,
    inNav: true,
    children: [
      {
        route: '/worksheet',
        name: null,
        title: '工单数据',
        type: 'folder', // 取 route 为默认加载页
        icon: 'iconfont icon-huiyuanguanli',
        filePath: 'views/error-page/',
        inNav: true,
        children: [
          {
            title: '加工单数据',
            type: 'view',
            name: 'userList',
            route: '/worksheet/list',
            filePath: 'views/error-page/404.vue',
            inNav: true,
            icon: 'iconfont icon-huiyuanguanli',
          }
        ],
      },
      {
        route: '/worksheet',
        name: null,
        title: '项目管理',
        type: 'folder', // 取 route 为默认加载页
        icon: null,
        filePath: 'views/admin/group',
        inNav: true,
        children: [
          {
            route: '/worksheet',
            type: 'view',
            name: 'groupList',
            inNav: true,
            filePath: 'views/error-page/404.vue',
            title: '立项管理',
            icon: 'iconfont icon-huiyuanguanli',
          },
          {
            route: '/worksheet',
            type: 'view',
            name: 'groupAdd',
            filePath: 'views/error-page/404.vue',
            inNav: true,
            title: '立项跟踪',
            icon: 'iconfont icon-add',
          },
        ],
      },
    ],
  }
  
  export default worksheetRouter