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
        filePath: 'views/admin/user/',
        inNav: true,
        children: [
          {
            title: '加工单数据',
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
        route: '/worksheet',
        name: null,
        title: '项目管理',
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
            title: '立项管理',
            icon: 'iconfont icon-huiyuanguanli',
          },
          {
            route: '/admin/group/add',
            type: 'view',
            name: 'groupAdd',
            filePath: 'views/admin/group/GroupAdd.vue',
            inNav: true,
            title: '立项跟踪',
            icon: 'iconfont icon-add',
          },
        ],
      },
    ],
  }
  
  export default worksheetRouter