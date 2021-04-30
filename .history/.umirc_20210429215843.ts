import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  hash:true,
//   base:'/admin/',
// publicPath:'https://1111111111111111111.com/cdn/',
outputPath:'build',
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
    { path: '/user', redirect: '/list/1' },

    { path: '/list', 
    
        component:'@/layouts/index',
        wrappers: [
            '@/wrappers/auth',
        ],
        routes:[
            {path:'/list/1',component: '@/pages/list',title:'列表1'},
            {path:'/list/2',component: '@/pages/index',title:'列表2'},
            {component:'@pages/404'}
        ]
    },
    {component:'@pages/404'}

  ],
  fastRefresh: {},
  
});
