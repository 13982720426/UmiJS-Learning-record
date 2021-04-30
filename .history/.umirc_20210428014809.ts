import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  hash:true,
//   base:'/admin/',
// publicPath:'https://xxx.com/cdn/',
// outputPath:'build',
    title:'UmiJs',
//   history:{
//       type:'hash'
//   },
//     targets: {
//       ie: 11,
//     },
// proxy: {
//     '/api': {
//       'target': 'http://jsonplaceholder.typicode.com/',
//       'changeOrigin': true,
//       'pathRewrite': { '^/api' : '' },
//     },
//   },
theme: {
    '@primary-color': '#1DA57A',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
});
