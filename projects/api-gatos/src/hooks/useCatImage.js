import { useEffect, useState } from 'react';

export function useCatImage(fact){
    const URL_IMAGE = 'https://cataas.com/cat/says/'
    const [ urlImage, setUrlImage ] = useState();

    useEffect(() => {
        if (!fact) return

        fetch(`${URL_IMAGE}${fact}`)
            .then(resp => {
                const url = resp.url
                setUrlImage(url)
            })
    },[fact]);
    return { imageUrl: urlImage}
}