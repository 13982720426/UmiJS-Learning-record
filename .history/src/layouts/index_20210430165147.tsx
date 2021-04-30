import React from 'react';
import {Link,NavLink} from 'umi'

const index = (props:any) => {
    return (
        <div>
            <h2>header</h2>
            {/* <Link to='/list/1'>列表1</Link>
            <Link to='/list/2'>列表2</Link> */}
            <hr />
            <NavLink to='/list/1'>列表1</NavLink>
            <NavLink to='/list/2'>列表2</NavLink>

            {props.children}
            <h2>footer</h2>

        </div>
    );
};

export default index;