import React from 'react';
import {Button} from 'antd'
const Login = (props:any) => {
    console.log(props)
    return (
        <div>
            <h1 >Page login</h1>
            <Button>点击登录</Button>
        </div>
    );
};

export default Login;