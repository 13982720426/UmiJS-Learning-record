import React from 'react';
import {Button} from 'antd'
const list = (props:any) => {
    console.log(props)
    return (
        <div>
            <h1 >Page list1</h1>
            <Button onClick={()=>{props.history.push('/')}}>回到首页</Button>
        </div>
    );
};

export default list;