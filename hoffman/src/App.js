import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import Home from './components/home/homePage.js'
import Footer from './components/footer/footer.js'
import Nav from './components/nav/nav.js'

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Nav}/>
      <Route exact path='/' component={Home}/>
      <Route exact path='/' component={Footer}/>
    </div>
  );
}

export default App;
