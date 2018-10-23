import React, { Component } from 'react';
import './App.css';

import List from './List';
import Name from './Name';

class App extends Component {
  // constructor (props) {
  //   super(props);

  //   this.state = {
  //     defaultVal: 'Test',
  //     hobbies: ['Badminton', 'Cricket', 'Volleyball', 'Video games'],
  //     name: 'Heading' 
  //   };

  //   console.log('constructor of app');
  // }
  // componentWillMount() {
  //   console.log('componentWillMount');
  // }

  // componentDidMount() {
  //   console.log('componentDidMount of App');
  // }

  // componentWillUpdate(props) {
  //   console.log('componentWillUpdate', props);
  // }

  // componentDidUpdate() {
  //   console.log('componentDidUpdate');
  // }

  // handleChange = event => {
  //   this.setState({
  //     defaultVal: event.target.value
  //   });
  // };

  // changeName = event => {
  //   this.setState({
  //     name: 'new Name'
  //   });
  // };

  // render() {
  //   console.log('render of App')
  //   const { defaultVal, hobbies, name } = this.state;
    
  //   return (
  //     <div className="App">
  //       <Name name={ name }>
  //         <div>This is inside App component</div>
  //       </Name> 
  //       <input 
  //         value={ defaultVal } 
  //         onChange={ this.handleChange }/>
  //       <div className={ defaultVal.length > 10 ? 'colorRed' : '' }>
  //         { defaultVal}
  //       </div>
  //       {
  //         defaultVal.length > 10 ? (<div>List dummy</div>) : 
  //         (<List 
  //           keys={ hobbies } 
  //           defaultAge='28' 
  //           name={ name }
  //           onChangeName = { this.changeName }
  //         />)
  //       }
  //     </div>
  //   );
  // }

  state = {
    editMode: false,
    textValue: 'test'
  }

  handleClick = event => {
    const { editMode } = this.state

    if (editMode) {
      this.setState({
        editMode: !editMode,
        textValue: this.refs.myText.value
      });
    } else {
      this.setState({
        editMode: !editMode
      });
    }
  }

  render() {
    const { textValue, editMode } = this.state;

    if (editMode) {
      return (
        <div className='App'>
          <input type='text' ref='myText' defaultValue={ textValue }/>
          <button onClick={ this.handleClick }>
            Finished
          </button>
        </div>
      );
    }
    return (
      <div className='App'>
        <span> { textValue }  </span>
        <button onClick={ this.handleClick }>
          Edit
        </button>
      </div>
    );
  }
}

export default App;
