import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AuthService from '../../../services/AuthService';
import { AxiosResponse } from 'axios';
import {useDispatch} from 'react-redux' ;
import {useNavigate} from 'react-router-dom'
import{AlertColor}from '@mui/material'
import {addUser} from '../../../app/AuthSlice';
import Snackbar from '../../../ui/snackbar/Snackbar'

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  );
}

interface AlertStateType{
  severity:AlertColor;
  open:boolean;
  message:string;
}

const theme = createTheme();

const SignIn = () => {

  const navigate = useNavigate()

  const dispatch = useDispatch();

  
  const [alertState,setAlertState]=React.useState<AlertStateType>({
    severity:'success',
    open:false,
    message:""
  })

  const handleAlertClose = ()=>{
    setAlertState({...alertState,open:false})
  }

  const [user,setUser]=React.useState({email:"",password:""})


  const handleChange = (e:any)=>{
    const {value,name}=e.target;
    setUser({...user,[name]:value});
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    


    AuthService.userLogin(user)
    .then((response:AxiosResponse)=>{
      console.log(response.headers)       
      dispatch(addUser(response?.data?.data));
      // alert(response?.data?.message)
      navigate('/admin')
    }).catch((err:any)=>{
      let message = err.response.data.message
      // alert(message)
      setAlertState({
        open:true,
        message:message,
        severity:'error',
      })
      // console.log(err);
    })
  };

  const {open,message, severity} = alertState

  return (
    <ThemeProvider theme={theme}>

<Snackbar open={open} handleClose={handleAlertClose} message={message} severity={severity} />

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={user.email}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={user.password}
              onChange={handleChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}

export default SignIn