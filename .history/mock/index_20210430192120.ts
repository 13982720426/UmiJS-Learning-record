import mockjs from 'mockjs';

export default{
    'GET /api/index':{
        id:1,
        name:'Tom',
        age:12
    },
    'GET /api/person':{
        id:2,
        name:'Tom2',
        age:22
    },
      // 使用 mockjs 等三方库
  'GET /api/tags': mockjs.mock({
    'list|100': [{ name: '@city', 'value|1-100': 50, 'type|0-2': 1 }],
  }),
}