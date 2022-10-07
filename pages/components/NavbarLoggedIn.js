
import { useState } from 'react';
import Cookie from 'universal-cookie';
import  Router  from 'next/router'
import Head from 'next/head';
// design import //
      import { styled, alpha } from '@mui/material/styles';
      import AppBar from '@mui/material/AppBar';
      import Box from '@mui/material/Box';
      import Toolbar from '@mui/material/Toolbar';
      import IconButton from '@mui/material/IconButton';
      import Typography from '@mui/material/Typography';
      import InputBase from '@mui/material/InputBase';
      import Badge from '@mui/material/Badge';
      import MenuItem from '@mui/material/MenuItem';
      import Menu from '@mui/material/Menu';
      import MenuIcon from '@mui/icons-material/Menu';
      import SearchIcon from '@mui/icons-material/Search';
      import AccountCircle from '@mui/icons-material/AccountCircle';
      import MailIcon from '@mui/icons-material/Mail';
      import NotificationsIcon from '@mui/icons-material/Notifications';
      import MoreIcon from '@mui/icons-material/MoreVert';
// design import

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
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
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));


export default function NavbarLoggedIn() {
  const cookie = new Cookie();  
    
  const [anchorE1, setAnchorE1] = useState(null);
  const [anchorE2, setAnchorE2] = useState(null);//message
  const [anchorE3, setAnchorE3] = useState(null);//notification
  const [mobileMoreAnchorE1, setMobileMoreAnchorE1] = useState(null);
  const [mobileMoreAnchorE2, setMobileMoreAnchorE2] = useState(null);
  const [mobileMoreAnchorE3, setMobileMoreAnchorE3] = useState(null);

  const isMenuOpen = Boolean(anchorE1);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorE1);
  const isMessageOpen = Boolean(anchorE2);
  const isMobileMessageOpen = Boolean(mobileMoreAnchorE2);
  const isNotificationOpen = Boolean(anchorE3);
  const isMobileNotificationOpen = Boolean(mobileMoreAnchorE3);
  


  const handleProfileMenuOpen = (event) => {
    setAnchorE1(event.currentTarget);
  };
  const handleNotificationOpen = (event) => {
    setAnchorE2(event.currentTarget);
  };
  const handleMessagesOpen = (event) => {
    setAnchorE3(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorE1(null);
  };
  const handleMobileMessageClose = () => {
    setMobileMoreAnchorE2(null);
  };
  const handleMobileNotificationClose = () => {
    setMobileMoreAnchorE3(null);
  };

  const handleMenuClose = () => {
    setAnchorE1(null);
    handleMobileMenuClose();
  };
  const handleMessageClose = () => {
    setAnchorE2(null);
    handleMobileMessageClose();
  };
  const handleNotificationClose = () => {
    setAnchorE3(null);
    handleMobileNotificationClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorE1(event.currentTarget);
  };
  const handleMobileMessageOpen = (event) => {
    setMobileMoreAnchorE2(event.currentTarget);
  };
  const handleMobileNotificationOpen = (event) => {
    setMobileMoreAnchorE3(event.currentTarget);
  };
  const logout = () => {
    cookie.remove('token');
    Router.push('/login');
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorE1}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem onClick={logout}>Log out</MenuItem>
    </Menu>
  );
  const renderNotifications = (
    <Menu
      anchorEl={anchorE3}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isNotificationOpen}
      onClose={handleNotificationClose}
      // notifications should be rendered from here using custom array
    >
        <MenuItem onClick={handleNotificationClose}>Note1</MenuItem>
        <MenuItem onClick={handleNotificationClose}>Note2</MenuItem>
    </Menu>
  );
  const renderMessages = (
    <Menu
      anchorEl={anchorE2}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMessageOpen}
      onClose={handleMessageClose}
      // notifications should be rendered from here using custom array
    >
        <MenuItem onClick={handleMessageClose}>Note1</MenuItem>
        <MenuItem onClick={handleMessageClose}>Note2</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorE1}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleMessagesOpen}>
        <IconButton size="large" aria-label="show 12 new mails" color="inherit">
          <Badge badgeContent={12} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem onClick={handleNotificationOpen}>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

    const messagesNumber = 17;
    const notificationNumber = 21;

 
  return (
    <>
    <Head>
      <title>Connecteen | Community</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Box sx={{
                boxShadow: 3,
                borderRadius: 2,
                marginTop:10,
                minWidth: 300,
                
    }} >
      <AppBar position="fixed" sx={{height:"75px",paddingTop:"5px"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Connecteen
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton 
              size="large" 
              aria-label="show new mails" 
              color="inherit"
              onClick={handleMessagesOpen}
              >
              <Badge badgeContent={messagesNumber} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              onClick={handleNotificationOpen}
            >
              <Badge badgeContent={notificationNumber} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit">
              <MoreIcon />
            </IconButton>
            
          </Box>      
        </Toolbar>
      </AppBar> 
                {renderMobileMenu} {renderMenu} {renderMessages} {renderNotifications}
    </Box>


  </>
  );
      
      
}
