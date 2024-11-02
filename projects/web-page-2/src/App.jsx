import React, { useState } from 'react';
import { Box, CssBaseline, Grid } from '@mui/material';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import StreamGrid from './components/StreamGrid';

function App() {
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarToggle = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <Box sx={{ display: 'flex', backgroundColor: '#18181b', height: '100vh' }}>
      <CssBaseline />
      {/* Header */}
      <Header onSidebarToggle={handleSidebarToggle} />
      
      {/* Sidebar */}
      <Sidebar open={openSidebar} onToggle={handleSidebarToggle} />

      {/* Main Content
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <StreamGrid />
      </Box> */}
    </Box>
  );
}

export default App;
