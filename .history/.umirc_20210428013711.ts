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
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
});
