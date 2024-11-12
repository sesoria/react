import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import MuiListItemButton from '@mui/material/ListItemButton';
import MuiListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Toolbar } from '@mui/material';
import { useContext } from 'react';
import SidebarContext from '../context/SidebarContext';

const drawerWidth = 140;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

// DrawerHeader para la parte superior del Drawer
const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

// Estilo del Drawer
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open ? openedMixin(theme) : closedMixin(theme)), // Aplica mixin al contenedor del Drawer
        '& .MuiDrawer-paper': {
            backgroundColor: theme.palette.primary.dark, // Color primario para el fondo
            color: theme.palette.primary.contrastText, // Color del texto
            ...(open ? openedMixin(theme) : closedMixin(theme)), // Aplica mixin según el estado
        },
    })
);

// Estilo del ListItemButton
const ListItemButton = styled(MuiListItemButton)(
    ({ theme, open }) => ({
        minHeight: 48,
        px: 2.5,
        '&:hover': { backgroundColor: theme.palette.primary.light },
        justifyContent: open ? 'initial' : 'center'
    })
)

// Estilo del ListItemIcon
const ListItemIcon = styled(MuiListItemIcon)(
    ({ theme, open }) => ({
        minWidth: 0,
        justifyContent: 'center',
        color: theme.palette.primary.contrastText,
        marginRight: open ? '8px' : '8px', // Ajusta el margen aquí
    })
)

export default function SideBar() {
    const {open, setOpen} = useContext(SidebarContext) 
    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Drawer variant="permanent" open={open}>
            <Toolbar />
            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    <ChevronRightIcon sx={[
                        {
                            mr: -1,
                            opacity: 1,
                            transition: '0.7s',
                        },
                        open
                            ? {
                                transform: 'rotate(-180deg)',
                            }
                            : {
                                transform: 'rotate(0)',
                            },
                    ]} />
                </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton open={open}>
                            <ListItemIcon open={open}>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText
                                primary={text}
                                sx={[
                                    open
                                        ? {
                                            opacity: 1,
                                        }
                                        : {
                                            opacity: 0,
                                        },
                                ]}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton open={open}>
                            <ListItemIcon open={open}>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText
                                primary={text}
                                sx={[
                                    open
                                        ? {
                                            opacity: 1,
                                        }
                                        : {
                                            opacity: 0,
                                        },
                                ]}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
}
