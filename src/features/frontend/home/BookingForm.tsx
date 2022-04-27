// import * as React from "react";
// import {useState} from "react";
// import { AxiosResponse } from 'axios';

// import Container from "@mui/material/Container";
// import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import { alpha, styled } from '@mui/material/styles';

// import {useDispatch} from 'react-redux';
// import {addBooking} from '../../../app/BookingSlice'


// import BookingServices from '../../../services/BookingService'



// interface IBookingFormProps {}

// const BookingForm: React.FunctionComponent<IBookingFormProps> = (props) => {

//   const dispatch = useDispatch()

//   const [booking,setBooking] = useState({source:"",destination:"",pickUpDate:"",pickUpTime:""})


//   const handleChange=(e:any)=>{
//     const {name,value}=e.target;
//     setBooking({...booking,[name]:value});
//   }

//   const handleSubmit =(e:any)=>{
//     e.preventDefault();

//     BookingServices.createBooking(booking).then((response:AxiosResponse)=>console.log(response.data))
//     .catch((err)=>console.log(err));
//     dispatch(addBooking(booking))
//   }

//   return (
//     <Container sx={{ marginTop: '-50px',position: 'relative'}} maxWidth="lg">
//       <Grid
//         container
//         spacing={1}
//         sx={{
//           backgroundColor:'white',
//           padding: 3,
//           position: 'relative',
//           zIndex:2,
//           alignItems: "center",
//           justifyContent: "center",
//           boxShadow: "0px 0px 20px rgba(0,0,0,0.3)",
//         }}
//       >
//         <Grid item xs={12} md={3}>

//         <TextField 
//         label="Source" 
//         fullWidth 
//         variant="outlined"
//         name="source"
//         className={classes.customInput}
//         value={booking.source}
//         onChange={handleChange}

//          />

//           {/* <TextField
//             fullWidth
//             variant="outlined"
//             label="Source"
//             name="source"
//             sx={{ backgroundColor: "#fff" }}
//           /> */}
//         </Grid>
//         <Grid item xs={12} md={3}>
//           <TextField
//             fullWidth
//             sx={{ backgroundColor: "#fff" }}
//             variant="outlined"
//             label="Desination"
//             name="destination"
//             value={booking.destination}
//             className={classes.customInput}
//         onChange={handleChange}

//           />
//         </Grid>
//         <Grid item xs={12} md={2}>
//           <TextField
//             fullWidth
//             sx={{ backgroundColor: "#fff" }}
//             variant="outlined"
//             type="date"
//             label="Pickup Date"
//             InputLabelProps={{ shrink: true }} 
//             name="pickUpDate"
//             className={classes.customInput}
//             value={booking.pickUpDate}
//         onChange={handleChange}

//           />
//         </Grid>
//         <Grid item xs={12} md={2}>

//           <TextField
//             sx={{ backgroundColor: "#fff" }}
//             fullWidth
//             InputLabelProps={{ shrink: true }} 
//             variant="outlined"
//             label='Pickup Time'
//             type="time"
//             defaultValue="Success"
//             name="pickUpTime"
//             className={classes.customInput}
//             value={booking.pickUpTime}
//         onChange={handleChange}

//             // color="yellow"
//           />
//         </Grid>
//         <Grid item xs={12} md={2}>
//           <Button onClick={handleSubmit} className={classes.customButton} variant="contained" sx={{padding:1.8}} fullWidth>Book</Button>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default BookingForm;

import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { addBooking } from "../../../app/BookingSlice";
import { makeStyles, withStyles } from '@mui/styles';
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import DateTimePicker from "@mui/lab/DateTimePicker";
import DateAdapter from "@mui/lab/AdapterLuxon";
import CarIcon from "@mui/icons-material/CarRental";
import CarIconRound from '@mui/icons-material/DirectionsCarFilled';
import BookingServices from '../../../services/BookingService'
import {useNavigate} from 'react-router-dom'

import { AxiosResponse } from 'axios';

import LocalizationProvider from "@mui/lab/LocalizationProvider";
function TabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

interface FormProps {
  type: number;
}

const useStyles = makeStyles({
  customButton: {
    backgroundColor: 'black',
    padding:"15px 34px",
    marginTop:'-1px',
    color:'white',
   '&:hover': {
    backgroundColor:'#3d3d3d ',
  color:'white'
  },
},
  customInput:{
    '& label.Mui-focused': {
      color: 'black',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'black',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#c4c4c4 !important'
      },
      '&.Mui-focused fieldset': {
        borderColor: 'black !important',
      },
      '.css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root.Mui-error':{
        color:'#666666 !important'
      }
    
    },
    
  },
  customDateTime:{
  '.css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline':{
    borderColor:'gray !important',
    color:'black',
  },
  
},
customTab:{
    flexDirection:'row',
    '& .css-aym9vq-MuiButtonBase-root-MuiTab-root':{
      minHeight:0
    },
    '& .Mui-selected':{
      color:'white',
      minHeight:0,
      background:'black',
      borderRadius:'5px',
      transition: '0.3s ease-in-out all'
    },
    '& .css-1aquho2-MuiTabs-indicator':{
      background: 'none',
    }
  }

});


const BForm = ({ type }: FormProps) => {
  const dispatch = useDispatch();
  const classes = useStyles()
  const navigate = useNavigate()

  const [bookingDetails, setBookingDetails] = React.useState({
    source: "",
    destination: "",
    pickupDate:"",
    dropDate:"",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;    

    setBookingDetails({ ...bookingDetails, [name]: value });
    console.log(bookingDetails);
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
      BookingServices.createBooking(bookingDetails).then((response:AxiosResponse)=>console.log(response.data))
    .catch((err)=>console.log(err));
    dispatch(addBooking(bookingDetails))
    dispatch(addBooking(bookingDetails));
    navigate('/bookingDetails')

  };

  const handleDateChange = (value: any, prop: string) => {
    setBookingDetails({ ...bookingDetails, [prop]: value });
  };
  const { source, destination, pickupDate, dropDate } = bookingDetails;

  return (

    <LocalizationProvider dateAdapter={DateAdapter}>
      <Grid
        container
        spacing={1}
        sx={{
          justifyContent:'center',
          // backgroundColor: (theme) => theme.palette.secondary.main,
          padding: 3,
          paddingTop:'0px',
          alignItems: "center",
          // boxShadow: "2px 2px 3px #666",
        }}
      >
        <Grid item xs={12} md={2}>
          <TextField
            fullWidth
            variant="outlined"
            label="Source"
            name="source"
            value={source}
            className={classes.customInput}
            onChange={handleChange}
            sx={{ backgroundColor: "#fff" }}
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <TextField
            fullWidth
            sx={{ backgroundColor: "#fff" }}
            variant="outlined"
            label="Desination"
            name="destination"
            value={destination}
            onChange={handleChange}
            className={classes.customInput}

          />
        </Grid>

        <Grid item xs={12} md={type == 2 ? 2.8 : 2.8}>
        <DateTimePicker
              label="Pcik Up Date"
              value={pickupDate}
              className={classes.customDateTime}
              onChange={(value) => handleDateChange(value, "pickupDate")}
              renderInput={(params) => (
                <TextField {...params}  className={classes.customInput} sx={{ backgroundColor: "#fff",'& .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root.Mui-error':{color:'#666 !important'}}} />
              )}
            />
        </Grid>

        {type == 2 && (
          <Grid item xs={12} md={2.8}>
            <DateTimePicker
              label="Drop Date"
              value={dropDate}
              className={classes.customDateTime}
              // InputLabelProps={{ shrink: true }} 
              onChange={(value) => handleDateChange(value, "dropDate")}
              renderInput={(params) => (
                <TextField {...params}  className={classes.customInput} sx={{ backgroundColor: "#fff",'& .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root.Mui-error':{color:'#666 !important'}}} />
              )}
            />
            {/* <TextField
            label="Drop Date"
            name='dropDate'
            value={dropDate}
            className={classes.customInput}
            InputLabelProps={{ shrink: true }} 
            onChange={handleChange}
            type="datetime-local"
          /> */}
          </Grid>
        )}
        <Grid item xs={12} md={2}>
          <Button onClick={handleSubmit} className={classes.customButton} variant="contained">
            Find a Cab
          </Button>
        </Grid>
      </Grid>
    </LocalizationProvider>
  );
};

interface IBookingFormProps {}

const BookingForm: React.FunctionComponent<IBookingFormProps> = (props) => {
  const [value, setValue] = React.useState(0);
  const classes = useStyles()

  const handleTabChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <Container sx={{ marginTop: 2 , justifyContent:'center'}} maxWidth='lg'>
      <Box
        sx={{
          position: "relative",
          top: "-80px",
          background: "white",
          justifyContent:'center',
          paddingTop:'20px',
          zIndex: 9,
          borderRadius:1.5,
          webkitBoxShadow:'0px 8px 20px rgb(0 0 0 / 6%)',
          boxShadow: '0px 8px 20px rgb(0 0 0 / 6%)',
        }}
      >
        <Box sx={{ border:'none' }}>
          <Tabs
           sx={{paddingTop:'20px'}}
            value={value}
            centered
            onChange={handleTabChange}
            aria-label="basic tabs example"
            className={classes.customTab}
          >
            <Tab label="One Way"  className={classes.customTab} icon={<CarIcon sx={{fontSize:'35px'}} />} {...a11yProps(0)} />
            <Tab label="Round Trip" className={classes.customTab} icon={<CarIconRound sx={{fontSize:'35px'}} />} {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <BForm type={1} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <BForm type={2} />
        </TabPanel>
      </Box>
    </Container>
  );
};

export default BookingForm;