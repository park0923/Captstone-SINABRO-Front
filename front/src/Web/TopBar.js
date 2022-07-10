import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SchoolIcon from '@mui/icons-material/School';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from 'react-router-dom';

const TopBar = () => {
    
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });
    
      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
      
      const icons = (index) => {
        switch (index) {
            case 0:
                return(<DashboardIcon fontSize="large"/>)                                
            case 1:
                return(<NotificationsIcon fontSize="large"/>)    
            case 2:
                return(<SchoolIcon fontSize="large"/>)                
            case 3:
                return(<VolunteerActivismIcon fontSize="large"/>)                
            case 4:
                return(<FactCheckIcon fontSize="large"/>)                      
            case 5:
                return(<BookmarkAddedIcon fontSize="large"/>)                            
            default:
                return;
        }
      }
      
      const link = (text) => {
        switch (text) {
            case '대시보드':
                return('/UserDashBoard')                                
            case '공지':
                return('/Notice')
            case '교육':
                return('/Education')                
            case '봉사':
                return('/Work')                
            case '검수':
                return('/inspection')                      
            case '인증':
                return('/Certified')                            
            default:
                return;
        }
      }
      const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItemButton>    
                    <ListItemIcon>
                        <PersonIcon fontSize="large" />
                    </ListItemIcon>                
                    <ListItemText primary={'user'} />
                </ListItemButton>
            </List>
            <Divider />
            <List>
                {['대시보드', '공지', '교육', '봉사', '검수', '인증'].map((text, index) => (
                <Link to={link(text)}>
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>                                                
                                {icons(index)}
                            </ListItemIcon>                        
                            <ListItemText primary={text} />                        
                        </ListItemButton>                        
                    </ListItem>
                </Link>
                ))}
            </List>
            <Divider />
           
        </Box>
      );
    
    return(
        <div>
            <Box>
                <AppBar sx={{ position:"fixed",top: 0, left: 0, right: 0, justifyContent: 'center', alignItems: 'center', height: '8vh'}}>
                    <Toolbar sx={{width:'100%', }}>                
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                Synabro
                            </Typography>
                            <IconButton
                                size="medium"
                                edge="start"
                                color="inherit"
                                aria-label="menu"                                
                            >                        
                                {['right'].map((anchor) => (
                                    <React.Fragment key={anchor}>
                                    <MenuIcon  variant="outlined" onClick={toggleDrawer(anchor, true)}>{anchor}</MenuIcon>
                                    <Drawer
                                        anchor={anchor}
                                        open={state[anchor]}
                                        onClose={toggleDrawer(anchor, false)}
                                    >
                                        {list(anchor)}
                                    </Drawer>
                                    </React.Fragment>
                                ))}
                            </IconButton>                           
                                         
                    </Toolbar>
                </AppBar>
            </Box>            
        </div>
    )
}

export default TopBar;
