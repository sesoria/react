import React from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchResults = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q'); // Obtener el término de búsqueda de los parámetros

    return (
        <div>
            <h1>Resultados de búsqueda para: {query}</h1>
            {/* Aquí irían los resultados de la búsqueda */}
        </div>
    );
};

export default SearchResults;
