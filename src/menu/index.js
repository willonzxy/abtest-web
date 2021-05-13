import { uniqueId } from 'lodash'

// // 插件
// import demoPlugins from './modules/demo-plugins'
// // 组件
// import demoComponents from './modules/demo-components'
// // 功能
// import demoPlayground from './modules/demo-playground'

/**
 * @description 给菜单数据补充上 path 字段
 * @description https://github.com/d2-projects/d2-admin/issues/209
 * @param {Array} menu 原始的菜单数据
 */
function supplementPath (menu) {
  return menu.map(e => ({
    ...e,
    path: e.path || uniqueId('d2-menu-empty-'),
    ...e.children ? {
      children: supplementPath(e.children)
    } : {}
  }))
}

// 菜单 侧边栏
export const menuAside = supplementPath([
  {
    path: '/index',
    title: '首页',
    icon: 'home',
    children: [
      { path:'/index/app',title:'应用管理',icon:'home' },
      { path:'/index/layer',title:'场景管理',icon:'database' },
      // { path:'/index/experiment',title:'实验管理',icon:'pencil' },
      { path:'/index/launch',title:'启动分流',icon:'rocket' },
    ]
  }
])

// 菜单 顶栏
export const menuHeader = supplementPath([

])
