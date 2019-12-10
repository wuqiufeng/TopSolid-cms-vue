const mrpRouter = {
    route: null,
    name: null,
    title: '物料管理',
    type: 'folder',
    icon: 'iconfont icon-huiyuanguanli',
    filePath: 'views/mrp/',
    order: null,
    inNav: true,
    children: [
      {
        route: '/mrp',
        name: null,
        title: '五金采购',
        type: 'view', // 取 route 为默认加载页
        icon: 'iconfont icon-huiyuanguanli',
        filePath: 'views/admin/user/',
        inNav: true,
      },
      {
        route: '/worksheet',
        name: null,
        title: '外购部件',
        type: 'view', // 取 route 为默认加载页
        icon: null,
        filePath: 'views/admin/group',
        inNav: true,
      },
      {
        route: '/worksheet',
        name: null,
        title: '通用部件',
        type: 'view', // 取 route 为默认加载页
        icon: null,
        filePath: 'views/admin/group',
        inNav: true,
      },
      {
        route: '/worksheet',
        name: null,
        title: '辅料采购',
        type: 'view', // 取 route 为默认加载页
        icon: null,
        filePath: 'views/admin/group',
        inNav: true,
      },
    ],
  }
  
  export default mrpRouter
  