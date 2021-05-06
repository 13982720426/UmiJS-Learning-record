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
    { 
        // path: '/', component: '@/layouts/index',
        routes:[
            {path:'/',component:'@/pages/index'},
            { 
                path: '/list', 
                routes:[
                    {path:'/list/1',component: '@/pages/list1',title:'页面1'},
                    {path:'/list/2',component: '@/pages/list2',title:'页面2'},
                ]
            },
            {
                path:'/dva',
                component:'@/pages/dva'
            }
        ]
    },
    {component:'@/pages/404'}
  ],
  fastRefresh: {},
//   mock:false,
});
