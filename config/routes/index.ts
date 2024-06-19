import common from './common';
import permission from './permission';

export default [
  ...common,
  ...permission,
  { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
