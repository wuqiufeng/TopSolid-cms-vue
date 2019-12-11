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
            type: 'view',
            name: 'workshopAdd',
            route: '/workshop/add',
            filePath: 'views/workshop/WorkshopAdd.vue',
            inNav: true,
            icon: 'iconfont icon-tushuguanli',
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
