/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/views/layout/Layout'

const busiRouter = {
  path: '/busi',
  component: Layout,
  redirect: 'noredirect',
  name: 'weapp',
  meta: {
    title: '小程序管理',
    icon: 'component'
  },
  children: [
    {
      path: 'busiApp',
      component: () => import('@/busi/busiApp'),
      name: 'busiApp',
      meta: { title: '小程序管理' }
    },
    {
      path: 'busiAppPage',
      component: () => import('@/busi/busiAppPage'),
      name: 'busiAppPage',
      meta: { title: '小程序模板' }
    },
  ]
}

export default busiRouter
