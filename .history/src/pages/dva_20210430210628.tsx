
//1.创建ui组件
//2.创建model
//3.将ui组件和model进行连接

import React from 'react';
import {connect} from 'umi';
import {Button} from 'antd'

const Dva = (props) => {
    console.log(props)
    return (
        <div>
            <h3>Dva的使用</h3>
            <Button>获取列表数据</Button>
        </div>
    );
};

export default connect(({tags})=>({tags}))(Dva);