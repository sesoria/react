import { AppBar, Toolbar, IconButton, Typography, InputBase, Avatar, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Header = ( ) => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#18181b', zIndex: 1201 }}>
      <Toolbar sx={{ justifyContent: 'space-around' }}>
        {/* Menu Icon for Sidebar */}
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={()=>{}}>
          <MenuIcon />
        </IconButton>

        {/* App Logo */}
        <Avatar src='../../public/urjc.jpeg' sx= {{width: 70, height: 40}}></Avatar>

        {/* Search Bar */}
        <Box sx={{ display: 'flex', alignItems: 'left', backgroundColor: '#2f2f2f', borderRadius: 1, px: 2, py: 0.5 }}>
          <SearchIcon />
          <InputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            sx={{ ml: 1, color: 'inherit' }}
          />
        </Box>

        {/* Icons */}
        <IconButton color="inherit">
          <NotificationsIcon />
        </IconButton>
        <IconButton color="inherit">
          <Avatar alt="User Avatar" src="/static/images/avatar/1.jpg" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
