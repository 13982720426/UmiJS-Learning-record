import React from 'react';

const index = (props:any) => {
    return (
        <div>
            <h2>header</h2>

            {props.children}
            <h2>footer</h2>

        </div>
    );
};

export default index;