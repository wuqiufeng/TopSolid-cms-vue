const workshopRouter = {
  route: null,
  name: null,
  title: '无纸车间',
  type: 'folder', // 类型: folder, tab, view
  icon: 'iconfont icon-tushuguanli',
  filePath: 'views/workshop/', // 文件路径
  order: null,
  inNav: true,
  children: [
    {
      title: '新增资料',
      type: 'tab',
      name: 'workshopAdd',
      route: '/workshop/add',
      filePath: 'views/workshop/WorkshopAdd.vue',
      inNav: true,
      icon: 'iconfont icon-tushuguanli',
      children: [
        {
          route: '/workshop/add',
          type: 'view',
          name: 'workshpAdd',
          inNav: true,
          filePath: 'views/workshop/WorkshopAdd.vue',
          title: '新增资料',
          icon: 'iconfont icon-add',
          right: ['超级管理员独有权限'],
        },
        {
          route: '/workshop/Change',
          type: 'view',
          name: 'groupAdd',
          filePath: 'views/workshop/WorkshopChange.vue',
          inNav: true,
          title: '工程更改',
          icon: 'iconfont icon-edit',
          right: ['超级管理员独有权限'],
        },
      ],
    },
    {
      title: '工程更改',
      type: 'view',
      name: 'workshopChange',
      route: '/workshop/Change',
      filePath: 'views/workshop/WorkshopChange.vue',
      inNav: true,
      icon: 'iconfont icon-tushuguanli',
    },
  ],
}

export default workshopRouter
