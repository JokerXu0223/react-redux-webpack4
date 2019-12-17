/**
 * @component index.js
 * @description home路由导航
 * @time 2019/3/9
 * @author JUSTIN XU
 */
import React from 'react';
import loadable from '@loadable/component';

// constants
import routerId from 'pages/app/constants/routerId';

// components
import Loading from 'components/loading';

export const view = loadable(() => import(/* webpackChunkName: "reactTicky" */ './view'), {
  fallback: <Loading />,
});

export const navigation = {
  path: routerId.sticky,
  name: 'Sticky',
  icon: 'area-chart',
  exact: true,
};
