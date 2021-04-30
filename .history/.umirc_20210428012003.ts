import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  hash:true,
  base:'/admin/',
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
});
