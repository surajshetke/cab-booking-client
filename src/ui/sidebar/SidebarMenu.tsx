import * as React from 'react';
import List from '@mui/material/List';
import { ListItemButton,ListItemIcon,ListItemText } from '@mui/material';
import AdminRoute from '../../shared/routes/AdminRoute';
import {NavLink} from 'react-router-dom';
import {makeStyles} from '@mui/styles'
import Button from "@mui/material/Button";



const useStyles = makeStyles({
    link:{
        color:'inherit',
        textDecoration:'none',
        margin:'0 10px',
        width:'100%',
        display: 'block',
        // borderBottom:'2px solid #1976D2',

    },
    active:{
        color:'#000',
        borderBottom:'2px solid #fff'
    }

})

interface IMenuItem{
    to:string;
    children:any;
}

const MenuItem = ({to,children}:IMenuItem)=>{
  const classes = useStyles()
    return(<NavLink to={to} className={({isActive})=>{return `${classes.link} ${isActive && classes.active}`}}>
        {children}
      </NavLink>)
}


interface ISidebarMenuProps {
    open:boolean
}

const SidebarMenu: React.FunctionComponent<ISidebarMenuProps> = ({open}) => {
  return (<>
  
  <List>
      {AdminRoute && AdminRoute.filter((route)=>route.showInMenu).map(({path,label,icon},index)=>(
          <MenuItem key={path+index} to={`/admin${path}`}>
              <ListItemButton sx={{minHeight:48,justifyContent:open?'initial':'center',px:2.5}}>
                <ListItemIcon sx={{minWidth:0,mr:open?'3':'auto'}}>{icon}</ListItemIcon>
                <ListItemText primary={label} sx={{opacity:open?1:0,marginRight:'10px'}}></ListItemText>
              </ListItemButton>
          </MenuItem>
      ))}
  </List>
  </>) ;
};

export default SidebarMenu;
