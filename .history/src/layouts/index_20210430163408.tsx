import React from 'react';
import {Link} from 'umi'

const index = (props:any) => {
    return (
        <div>
            <h2>header</h2>
        <Link to='/list/1'>列表1</Link>
        <Link to='/list/2'>列表2</Link>

            {props.children}
            <h2>footer</h2>

        </div>
    );
};

export default index;