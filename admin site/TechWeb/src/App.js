import React from 'react'
import Products from './admin/Products'
import Main from './main/Main'
import { BrowserRouter, Route } from 'react-router-dom'
import ProductCreate from './admin/ProductCreate'
import ProductEdit from './admin/ProductEdit'

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path='/' exact component={Main} />
        <Route path='/admin/products' exact component={Products} />
        <Route path='/admin/products/create' exact component={ProductCreate} />
        <Route path='/admin/products/:id/edit' exact component={ProductEdit} />
      </BrowserRouter>      
    </div>
  )
}
