// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import {Link,NavLink} from 'react-router-dom'
// import {makeStyles} from '@mui/styles';
// import FrontendRoutes from '../../shared/routes/FrontendRoutes';

// const useStyles = makeStyles({
//     link:{
//         color:'#000',
//         textDecoration:'none',
//         margin:'0 10px',
//         borderBottom:'2px solid transparent',

//     },
//     active:{
//         color:'#000',
//         borderBottom:'2px solid black'
//     }

// })

// interface IMenuItem{
//     to:string;
//     children:any;
// }

// const MenuItem = ({to,children}:IMenuItem)=>{
//   const classes = useStyles()
//     return(<NavLink to={to} className={({isActive})=>{return `${classes.link} ${isActive && classes.active}`}}>
//         {children}
//       </NavLink>)
// }

//  const Header = () => {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="absolute" sx={{backgroundColor:'transparent',boxShadow:'none',fill:'black'}}>
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             // color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1,color:'black' }}>
//         RentalCAB
//           </Typography>

//             {Array.isArray(FrontendRoutes) && FrontendRoutes
//             .filter(({showInMenu})=>showInMenu)
//             .map(({path,label},i)=>{return <MenuItem key={path+i} to={path}>{label}</MenuItem>})
//             }
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }

// export default Header;

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {Link,NavLink} from 'react-router-dom'
import {makeStyles} from '@mui/styles';
import FrontendRoutes from '../../shared/routes/FrontendRoutes';

interface IMenuItemTwo{
    to:string;
    children:any;
}


const MenuItemTwo = ({to,children}:IMenuItemTwo)=>{
  const classes = useStyles()
    return(<NavLink to={to} className={({isActive})=>{return `${classes.link} ${isActive && classes.active}`}}>
        {children}
      </NavLink>)
}


const useStyles = makeStyles({
    link:{
        color:'#000',
        textDecoration:'none',
        margin:'0 10px',
        borderBottom:'2px solid transparent',

    },
    active:{
        color:'#000',
        borderBottom:'2px solid black'
    }

})

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{backgroundColor: "#fff" ,boxShadow:'none'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' },color:'black' }}
          >
            <a>RentalCAB</a>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{color:'black'}}
>
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {FrontendRoutes.filter(({showInMenu})=>showInMenu).map(({path,label})=> {

                return (<MenuItem onClick={handleCloseNavMenu}>
            <MenuItemTwo key={path+label} to={path} >{label}</MenuItemTwo>
                  </MenuItem>)
              })}
            </Menu>
          </Box>
          
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' },justifyContent:'end' }}>
         {Array.isArray(FrontendRoutes) && FrontendRoutes
            .filter(({showInMenu})=>showInMenu)
            .map(({path,label},i)=>{return <MenuItemTwo key={path+i} to={path}>{label}</MenuItemTwo>})
            }
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
