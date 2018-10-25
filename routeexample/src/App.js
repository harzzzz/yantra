import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <h3>
              <Link to='/'>Home</Link>
            </h3>
          </li>
          <li>
            <h3>
              <Link to='/about'>About</Link>
            </h3>
          </li>
          <li>
            <h3>
              <Link to='/cats'>Categories</Link>
            </h3>
          </li>
        </ul>

        <hr />

        <Route exact path='/' component = {Home}/>
        <Route path='/about' component = {About}/>
        <Route path='/cats' component = {Categories}/>
      </div>
    </Router>
  );
}

const Home = () => (<div>This is Home page</div>);
const About = () => (<div>This is About page</div>);
const Categories = ({match}) => {
  return (<div>
    <ul>
      <li>
        <Link to={`${match.url}/games`}>Games</Link>
      </li>
      <li>
        <Link to={`${match.url}/books`}>Books</Link>
      </li>
      <li>
        <Link to={`${match.url}/vgames`}>VGames</Link>
      </li>
    </ul>
    <Route path={`${match.url}/:category`} component={Category} />
    <Route 
      exact
      path={match.url} 
      render={()=>(<div>Please select any one of the category</div>)} 
    />
  </div>);
};

const Category = ({match}) => {
  return (<div>{match.params.category}</div>)
}


export default App;
