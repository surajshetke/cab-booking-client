 import * as React from "react";
 import Box from "@mui/material/Box";
 import Paper from "@mui/material/Paper";
 import { Container, Grid,Typography } from "@mui/material";
 import Button from "@mui/material/Button";
 import List from '@mui/material/List';
 import ListItem from '@mui/material/ListItem';
 import Divider from '@mui/material/Divider';
 import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
 import ListItemText from '@mui/material/ListItemText';
 import ListItemAvatar from '@mui/material/ListItemAvatar';
 import Avatar from '@mui/material/Avatar';
 import { makeStyles, withStyles } from '@mui/styles';
 import ListItemIcon from '@mui/material/ListItemIcon';

 const useStyles = makeStyles({
     customFont:{
         fontFamily:'Poppins,sans-serif',
         fontWeight:'600',
         marginTop: '10px'
     },
     customBody:{
         fontFamily:'Poppins,sans-serif',
         fontWeight:'400',
         color:'#e7e7e7'
     },
     customButton: {
         backgroundColor: 'black',
         padding:"15px 34px",
         // marginTop:'-1px',
         color:'white',
         marginTop:'20px',
         margin:'0 auto',
         textAlign:'center',
        '&:hover': {
         backgroundColor:'#3d3d3d ',
       color:'white'
       },
     },
 })

interface IListServicesProps {
}

const ListServices: React.FunctionComponent<IListServicesProps> = (props) => {
    const classes = useStyles()

  return<>
 <List sx={{ width: '100%', maxWidth: 360, backgroundColor:'transparent' }}>

 <ListItem alignItems="flex-start">
 <ListItemIcon>
          <PersonPinCircleIcon sx={{color:'white',fontSize:'45px'}}/>
        </ListItemIcon>
   <ListItemText
     secondary={
       <React.Fragment>
         <Typography
           sx={{ display: 'block' }}
           component="span"
           variant="h5"
           color="white"
         >
           Home Pickup
         </Typography>
         <Typography
           sx={{ display: 'block' }}
           component="span"
           variant="body2"
           color="white"
           className={classes.customBody}
         >
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam tempore nulla veniam. Molestias, iure
         </Typography>
       </React.Fragment>
     }
   />
 </ListItem>
 <Divider variant="inset" component="li" />
 <ListItem alignItems="flex-start">
 <ListItemIcon>
          <PersonPinCircleIcon sx={{color:'white',fontSize:'45px'}}/>
        </ListItemIcon>
   <ListItemText
     secondary={
       <React.Fragment>
         <Typography
           sx={{ display: 'block' }}
           component="span"
           variant="h5"
           color="white"
         >
           Home Pickup
         </Typography>
         <Typography
           sx={{ display: 'block' }}
           component="span"
           variant="body2"
           color="white"
           className={classes.customBody}
         >
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam tempore nulla veniam. Molestias, iure
         </Typography>
       </React.Fragment>
     }
   />
 </ListItem>
 </List>
  </> ;
};

export default ListServices;
