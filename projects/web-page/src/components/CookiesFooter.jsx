import { useState } from 'react';
import { Box, Stack, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function CookiesFooter() {
  const [topHidden, setTopHidden] = useState(false);

  if (topHidden) return null;

  return (
    
<Box
      sx={{
        position: 'fixed',   // Para mantenerlo fijo en la parte inferior
        bottom: 0,           // Lo coloca en la parte inferior de la página
        width: '100%',       // Ocupa todo el ancho
        background: 'linear-gradient(to right, #4f46e5, #0ea5e9)',
        color: '#fff',
        height: '48px',
      }}
    >
      <Stack
        spacing={1}
        direction="row"
        alignItems="center"
        justifyContent="center"
        height="100%"
      >
        <div>
            This website uses cookies to ensure you get the best experience on our website.
        </div>
        <a href="https://www.enzuzo.com/privacy-policy" id="notificationPolicyLink" target="_blank" rel="noreferrer">Learn More About Privacy Policies</a>
        <IconButton
          color="inherit"
          size="small"
          onClick={() => setTopHidden(true)}
        >
          <CloseIcon/>
        </IconButton>
      </Stack>
    </Box>
  );
}
