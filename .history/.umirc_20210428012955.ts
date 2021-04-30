import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  hash:true,
//   base:'/admin/',
// publicPath:'https://xxx.com/cdn/',
outputPath:'build',
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
});
