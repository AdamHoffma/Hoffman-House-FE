import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import Home from './components/home/homePage.js'
import Footer from './components/footer/footer.js'
import Nav from './components/nav/nav.js'
import ItemForm from './components/form/newItem.js'
import imgUpload from './components/imgUpload/imgUpload.js'
import Merchandise from './components/merchandise/merchandise'
import ProductForm from './components/ProductForm/ProductForm'
import ProductPreview from './components/ProductPreview/ProductPreview'
import ProductCard from './components/ProductCard/ProductCard'

function App() {
  return (
    <div className="App">
      <Route exact path='/' render={props => <Nav history={props.history} />} />
      <Route exact path='/' component={Home}/>
      <Route exact path='/' component={Footer}/>
      <Route path='/additems' component={ItemForm}/>
      <Route path='/upload' component={imgUpload}/>
      <Route path='/merchandise/:id' component={Merchandise} />
      <Route path ='/products'  render={props => <ProductForm history={props.history} />} />
      <Route path='/preview' render={props => <ProductPreview history={props.history} />} />
      <Route path='/productcard/:id' component={ProductCard} />
    </div>
  );
}

export default App;
