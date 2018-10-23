import React, { Component } from 'react';

import MyIn from './MyInput';

class RefExample extends Component {
    render() {
        return (
            <div>
                <h1>Hello</h1>
                <MyIn myref={ x => x.focus()}/>
            </div>
        )
    }
}

export default RefExample;
