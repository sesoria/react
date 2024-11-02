import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';

const Sidebar = ({ open, onToggle }) => {
  return (
    <Drawer
      variant="temporary"
      open={open}
      onClose={onToggle}
      sx={{
        '& .MuiDrawer-paper': {
          backgroundColor: '#18181b',
          width: 240,
          color: 'white',
        },
      }}
    >
      <List>
        <ListItem button>
          <ListItemIcon sx={{ color: 'white' }}>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Inicio" />
        </ListItem>

        <ListItem button>
          <ListItemIcon sx={{ color: 'white' }}>
            <ExploreIcon />
          </ListItemIcon>
          <ListItemText primary="Explorar" />
        </ListItem>

        <ListItem button>
          <ListItemIcon sx={{ color: 'white' }}>
            <SubscriptionsIcon />
          </ListItemIcon>
          <ListItemText primary="Suscripciones" />
        </ListItem>
      </List>

      <Divider sx={{ backgroundColor: '#2f2f2f' }} />
    </Drawer>
  );
};

export default Sidebar;
