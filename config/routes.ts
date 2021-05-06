export default [
    { 
        // path: '/', component: '@/layouts/index',
        routes:[
            {path:'/',component:'@/pages/Index/index'},
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
            },
            {
                path:'/login',
                component:'@/pages/login'
            }
        ]
    },
    {component:'@/pages/404'}
  ]