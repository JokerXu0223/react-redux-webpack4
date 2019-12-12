/**
 * @component index.js
 * @description 用户银行卡路由导航
 * @time 2019/3/9
 * @author JUSTIN
 */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import loadable from '@loadable/component';

// constants
import routerId from 'constants/routerId';

// components
import Loading from 'components/loading';

export const view = loadable(() => import(/* webpackChunkName: "bankCard" */ './view'), {
  fallback: <Loading />,
});

export const navigation = {
  path: routerId.userBankCard,
  name: '用户银行卡',
  icon: 'home',
  exact: true,
  sort: 999, // 排序位置
};

export default [
  <Route exact path={navigation.path} key={navigation.path} component={view} />,
  <Route key='/notFound' path='*' component={() => <Redirect to={routerId.dashNotFound} />} />,
];
