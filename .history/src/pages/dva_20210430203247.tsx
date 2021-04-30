
//1.创建ui组件
//2.创建model
//3.将ui组件和model进行连接

import React from 'react';
import {connect} from 'umi';

const Dva = () => {
    return (
        <div>
            <h3>Dva的使用</h3>
        </div>
    );
};

export default connect(({dva})=>({}))(Dva);