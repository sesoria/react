import { useState, Suspense, lazy, useEffect } from "react";
import { Grid2, Button, Box, CircularProgress, useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";
const StreamCard = lazy(() => import("./StreamCard")); // Lazy load del componente



const StreamGrid = () => {
    const items = Array.from({ length: 6 }, (_, index) => `Item ${index + 1}`); // Lista de 20 elementos

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
    
    // Número inicial de elementos visibles según el tamaño de la pantalla
    const initialVisibleCount = isSmallScreen ? 2 : 3;
    const [visibleCount, setVisibleCount] = useState(initialVisibleCount);
    
    // Actualizar el número visible inicial cuando el tamaño de pantalla cambia
    useEffect(() => {
        setVisibleCount(initialVisibleCount);
    }, [initialVisibleCount]);
    
    
    // Función para cargar más elementos
    const showMoreItems = () => {
        if (visibleCount >= items.length) return; // Si no hay más elementos, no hacer nada
    
        // Incrementa el conteo visible en función de la cantidad de elementos visibles actual
        setVisibleCount(prevCount => {
            if (prevCount % 3 === 0) return prevCount + 3;
            if (prevCount % 2 === 0) return prevCount + 2;
            return prevCount + 2;
        });
    };

  return (
    <Box>
      <Grid2 container display={'flex'}>
        {items.slice(0, visibleCount).map((item, index) => (
          <Grid2
          size={{
              xs:12,
              sm:6,
              md:4,
              lg:4,
            }}
              key={index}
          >
            <Suspense fallback={<CircularProgress />}>
              <StreamCard title={item}/>
            </Suspense>
          </Grid2>
        ))}
      </Grid2>

      {visibleCount < items.length && (
        <Box mt={3} display="flex" justifyContent="center">
          <Button variant="contained" onClick={showMoreItems}>
            Mostrar más
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default StreamGrid;
