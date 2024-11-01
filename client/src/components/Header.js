import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, TextField, Button, styled, Popover } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import logo from './logo.png';

// Customizing the Drawer component
const StyledDrawer = styled(Drawer)(({ theme }) => ({
 '& .MuiDrawer-paper': {
    top: '64px',
    width: '300px',
    backgroundColor: '#8a2be2',
    color: '#ffffff',
 },
}));

// Customizing the Toolbar component
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
 minHeight: '100px',
 backgroundColor: 'white',
 display: 'flex',
 justifyContent: 'space-between',
 alignItems: 'center',
}));

const LogoContainer = styled('div')({
 display: 'flex',
 alignItems: 'center',
 marginLeft: 'auto',
 marginRight: 'auto',
});

const RightSection = styled('div')({
 display: 'flex',
 alignItems: 'center',
});

const LargeLogo = styled('img')({
 width: '150px',
});

function Header() {
 const [openDrawer, setOpenDrawer] = useState(false);
 const [searchQuery, setSearchQuery] = useState('');
 const [anchorEl, setAnchorEl] = useState(null);

 const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
 };

 const handleLoginClick = () => {
    // Implement login functionality here
 };

 const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
 };

 const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
 };

 const handleClose = () => {
    setAnchorEl(null);
 };

 const open = Boolean(anchorEl);

 return (
    <div>
      <AppBar position="static">
        <StyledToolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer} sx={{ color: 'black' }}>
            <MenuIcon />
          </IconButton>
          <LogoContainer>
            <LargeLogo src={logo} alt="logo" />
          </LogoContainer>
          <RightSection>
            <IconButton color="black" sx={{ mx: 1 }}>
              <SearchIcon />
            </IconButton>
            <TextField
              id="search"
              label="Search"
              variant="standard"
              size="small"
              value={searchQuery}
              onChange={handleSearchChange}
              sx={{ mx: 1 }}
            />
            <IconButton color="black" aria-describedby={open ? 'notification-popover' : undefined} onClick={handleClick}>
              <NotificationsIcon />
            </IconButton>
            <Popover
              id="notification-popover"
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <List>
                <ListItem button>
                 <ListItemText primary="No messages" />
                </ListItem>
              </List>
            </Popover>
            <Button variant="outlined" sx={{ color: 'black', borderColor: 'black', mx: 1 }} onClick={handleLoginClick}>
              Login
            </Button>
          </RightSection>
        </StyledToolbar>
      </AppBar>
      <StyledDrawer anchor="top" open={openDrawer} onClose={toggleDrawer}>
        <List>
          <ListItem button>
            <ListItemText primary="Paintings" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Sculptures" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Photography" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Artwork" />
          </ListItem>
        </List>
      </StyledDrawer>
    </div>
 );
}

export default Header;
