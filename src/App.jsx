import React from 'react'
import { TooltipProvider } from "@/components/ui/tooltip"
import Home from './Pages/Home'
import Dashboard from './dashboard/Dashboard'
import Counter from './Pages/Counter'
import Product from './Pages/Product'
import ProductList from './Pages/ProductList'
import Conter from './Pages/Conter'

const App = () => {
  return (
    <TooltipProvider>
      {/* <Home /> */}
      {/* <Dashboard /> */}
      {/* <Counter /> */}
      {/* <ProductList /> */}
      <Conter />

      {/* <Product /> */}

    </TooltipProvider>
  )
}

export default App
