import type { AppRouteModule } from '/@/router/types'

import { LAYOUT } from '/@/router/constant'
import { t } from '/@/hooks/web/useI18n'

const demo: AppRouteModule = {
  path: '/demo',
  name: 'AirDemo',
  component: LAYOUT,
  redirect: '/demo/index',
  meta: {
    orderNo: 1,
    icon: 'whh:paintroll',
    title: '演示',
  },
  children: [
    {
      path: 'index',
      name: 'air',
      component: () => import('/@/views/air/index.vue'),
      meta: {
        title: '空预器系统',
      },
    },
  ],
}

export default demo
