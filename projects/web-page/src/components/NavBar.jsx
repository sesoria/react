import { Toolbar, IconButton, InputBase, Box } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useContext } from 'react';
import { SidebarContext } from '../context/SidebarContext';
import { Link } from 'react-router-dom';
// Estilos personalizados para la barra de búsqueda
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: theme.spacing(2),
  marginRight: theme.spacing(2),
  width: '90%',
  [theme.breakpoints.up('sm')]: {
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // padding: theme.spacing(1, 1, 1, 6),
    paddingLeft: `calc(1em + ${theme.spacing(3)})`,
    transition: theme.transitions.create('width', {
      duration: 10000,  // Duración más larga (1000ms = 1 segundo)
      easing: theme.transitions.easing.easeInOut,  // Curva de aceleración más dramática
    }),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  position: 'fixed',
  top: 0, // Ensure the AppBar is fixed to the top
  left: 0,
  right: 0
}));



const Navbar = () => {
  const { open, setOpen } = useContext(SidebarContext)

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <AppBar component='nav'>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Menú (a la izquierda) */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                marginRight: 5,
              },
              open && { display: 'none' },
            ]}
          >
            <MenuIcon />
          </IconButton>
          <Link to="/"> {/* Reemplaza "/home" con la ruta a la que desees redirigir */}
            <Box
              component='img'
              src='../../public/urjc-removebg-preview.png'
              width='70px'
              height='60px'
              alt='URJC logo'
              sx={{ cursor: 'pointer' }} // Añade un cursor de puntero para indicar que es clicable
            />
          </Link>
        </Box>

        {/* Barra de búsqueda */}
        <Box sx={{ flexGrow: 1, maxWidth: '600px' }}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Box>

        {/* Íconos (a la derecha) */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>
          <IconButton color="inherit">
            <AccountCircleIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar >
  );
};

export default Navbar;
