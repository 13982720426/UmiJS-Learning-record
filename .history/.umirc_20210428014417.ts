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
export default {
    targets: {
      ie: 11,
    },
  }
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
});
