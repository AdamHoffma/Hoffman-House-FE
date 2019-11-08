import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import Home from './components/home/homePage.js'
import Footer from './components/footer/footer.js'
import Nav from './components/nav/nav.js'
import ItemForm from './components/form/newItem.js'
import UploadContainer from './containers/UploadContainers.js'
import "antd/dist/antd.css";

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Nav}/>
      <Route exact path='/' component={Home}/>
      <Route exact path='/' component={Footer}/>
      <Route path='/additems' component={ItemForm}/>
      <UploadContainer/>
    </div>
  );
}

export default App;
