import { useContext, useState } from "react"
import { FiltersContext } from "../context/filters.jsx"

export function useFilters(){
    
    const { filters, setFilters } = useContext(FiltersContext)
    
    const filterProducts = (products) => {
      return (
        products.filter(product => {
          console.log(filters)
          return (
            product.price >= filters.minPrice && (
              filters.category === 'all' ||
              product.category === filters.category
            )
          )
        })
      )
    }
    return { filters, filterProducts, setFilters }
  }