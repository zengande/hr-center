import { defineConfig } from 'umi';
import theme from './src/theme';

export default defineConfig({
  dynamicImport: {
    loading: '@/components/loading'
  },
  exportStatic: { },
  theme,
  locale: { antd: true },
  title: 'xx招聘HR中心',
  routes: [
    {
      path: '/',
      component: '@/layouts/BasicLayout',
      routes: [{
        path: '/',
        component: '@/pages/index.tsx'
      },{
        path:'/cvs',
        component: '@/pages/CVs.tsx'
      },{
        path:'/cvs/:id',
        component:'@/pages/CV.tsx'
      }]
    }
  ],
});
