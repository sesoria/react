import { Box, Toolbar } from '@mui/material';
import Navbar from './components/NavBar';
import SideBar from './components/SideBar';
import { SidebarProvider } from './context/SidebarContext';
import { useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';

function App() {
  const parentRef = useRef(null);
  useEffect(() => {
    if (parentRef.current) {
      const parentWidth = parentRef.current.offsetWidth;
      console.log('Ancho del padre:', parentWidth);
      // Aquí puedes utilizar el ancho para realizar acciones, como aplicar estilos
    }
  });
  return (
    <SidebarProvider>
      <Box display={'flex'}>
        <Navbar />
        <SideBar />
        <Box component='main' sx={{ flexGrow: 1, p: 1, paddingTop: 3 }}>
          <Toolbar />
          <Outlet></Outlet>
        </Box>
      </Box>
    </SidebarProvider>
  );
}

export default App;



