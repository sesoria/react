import { useEffect, useState } from "react"
import { useCatFact } from '../hooks/useCatFact.js'
import { useCatImage } from '../hooks/useCatImage.js'

export function App() {
    const { fact, refreshFact } = useCatFact()
    const { imageUrl } = useCatImage(fact)

    return(
        <main>
            <h1>Holaasssas</h1>
            <button onClick={refreshFact} >Refresh Fact</button>
            <p>{fact}</p>
            <img src={imageUrl} alt={`Image extracted using the first three words for ${fact}`}/>
            </main>
    )
}