import React from 'react';

const Name  = props => {
    console.log(props.children);
    return (
        <div>
            { props.children }
            <h6>{ props.name }</h6>
        </div>
    )
}

export default Name;
