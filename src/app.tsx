import {history} from 'umi'

//定义额外路由变量
let extraRoutes;


//动态添加路由
export function patchRoutes({ routes }) {
  routes.unshift({
    path: '/foo',
    title: 'foo',

    // exact: true,
    component: require('@/pages/list1').default,
  });
    //合并服务端返回的路由
  extraRoutes.map(item=>{
      routes.unshift({
          path:item.path,
          component:require(`@/pages${item.component}`).default
      })
  })
}

//复写render，会在patchRoutes之前执行
export function render(oldRender) {
    //模拟从服务端请求获得的路由
    //   fetch('/api/routes').then(res=>res.json()).then((res) => { }

    extraRoutes=[
        {path:'/server',component:'/list2'}
    ]
    //渲染之前，做一些权限校验
    const isLogin=true
    if(!isLogin) { 
      history.push('/login'); 
    }
    oldRender();
}

//在初始加载和路由切换时做一些事情。，在patchRoutes之后执行

export function onRouteChange({ location, routes, action,matchedRoutes }) {
    //比如用于做埋点统计
    console.log(location.pathname,'被访问了')
    //设置标题
    if (matchedRoutes.length) {
    document.title ="jack-" +( matchedRoutes[matchedRoutes.length - 1].route.title || '');
  }

}