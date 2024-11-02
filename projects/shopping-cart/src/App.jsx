import { useState } from 'react'
import { products as initialProducts } from './mocks/products.json'
import './App.css'
import { Products } from './components/Products'
import { Header } from './components/Header'
import { useFilters } from './hooks/useFilter'
import { Footer } from './components/Footer'
import { Cart } from './components/Cart'
import { CartProvider } from './context/cart'
function App() {
  const { filters, filterProducts } = useFilters()
  const filteredProducts = filterProducts(initialProducts)
  return (
    <CartProvider>
      <Header/>
      <Cart/>
      <Products products={filteredProducts} />
      <Footer filters/>
    </CartProvider>
  )
}

export default App
