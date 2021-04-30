
//1.创建ui组件
//2.创建model
//3.将ui组件和model进行连接

import React from 'react';
import {connect} from 'umi';
import {Button} from 'antd'



const Dva = (props) => {
    //使用model，获取数据
    const getData=()=>{
        dispatchEvent({
            type: 'tags/fetchTags',//model的命名空间  / 方法
            payload:null
        })
    }
    console.log(props)
    return (
        <div>
            <h3>Dva的使用</h3>
            <Button onClick={getData}>获取列表数据</Button>
        </div>
    );
};

export default connect(({tags})=>({tags}))(Dva);