import React, { Component } from 'react';

class List extends Component {
    constructor(props) {
        super(props); 
        
        this.state = {
            age: props.defaultAge
        }
    }

    shouldComponentUpdate(state, props) {
        console.log('shouldComponentUpdate');

        console.log(state, props);

        return true
    }

    componentWillUnmount() {
        console.log('Unmounted');
    }

    increaseAge = event => {
        let { age } = this.state;

        this.setState({
            age: parseInt(age) + 5
        });
    } 

    render() {
        const { keys, name, onChangeName } = this.props;
        const { age } = this.state;

        return (
            <div>
                <ul>
                    { 
                        keys.map((ele, i) => {
                        return (<li key={i}>{ ele }</li>);
                        })
                    }
                </ul>
                <div>{ age }</div>
                <button onClick={ this.increaseAge }>
                    Increase My age by 5
                </button>  
                <button onClick={ onChangeName }>
                    Change Name
                </button>
                <div>{ name }</div>
            </div>
        )
    }
}

export default List;
