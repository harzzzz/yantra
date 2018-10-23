import React, { Component } from 'react';

class SearchComponent extends Component {
    state = {
        term: ''
    };

    handleChange = event => {
        this.setState({
            term: event.target.value
        });

        this.props.onSearch(event.target.value);
    }

    render() {
        return (
            <input className='col-10 col-md-10' onChange={ this.handleChange }/>
        );
    }
}

export default SearchComponent;
