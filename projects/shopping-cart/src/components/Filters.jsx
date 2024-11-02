import { useContext, useId, useState } from 'react'
import { FiltersContext } from '../context/filters'
import { useFilters } from '../hooks/useFilter'

export function Filters(){
    const minPriceFilterId = useId()
    const categoryFilterId = useId()
    const { filters, setFilters } = useFilters()

    const HandleChangeMinPrice = (event) => {
        setFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }
    
    const HandleChangeCategory = (event) => {
        setFilters(prevState => ({
            ...prevState,
            category: event.target.value
        }))
        
    }
    return (
        <section className='filters'>
            <div>
                <label htmlFor={minPriceFilterId}>Precio a partir de:</label>
                <input
                    type='range'
                    id={minPriceFilterId}
                    min='0'
                    max='1000'
                    onChange={HandleChangeMinPrice}
                />
                <span>{filters.minPrice}</span>
            </div>

            <div>
                <label htmlFor={categoryFilterId}>Categoría</label>
                <select id={categoryFilterId} onChange={HandleChangeCategory}>
                    <option value='all'>Todas</option>
                    <option value='groceries'>Comestibles</option>
                    <option value='furniture'>Muebles</option>
                </select>
            </div>
        </section>
    )
}    
