import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Container, Grid,Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { makeStyles, withStyles } from '@mui/styles';

const useStyles = makeStyles({
    customFont:{
        fontFamily:'Poppins,sans-serif',
        fontWeight:'600',
        marginTop: '10px'
    },
    customBody:{
        fontFamily:'Poppins,sans-serif',
        fontWeight:'400',
        color:'#7a7a7a'
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
interface ITarifProps {}

const Tarif: React.FunctionComponent<ITarifProps> = (props) => {
    const classes = useStyles()
  return (
    <>
<Typography className={classes.customFont} align='center'  variant='h3'>Available Cars</Typography>

      <Container sx={{margin:'80px auto 80px auto'}} >
        <Grid container spacing={3}  >
          <Grid item md={4}>
            <Box>
              <Paper  sx={{padding:"20px",backgroundColor:'#F5F4F2',}}>
                  <Box sx={{width:'100%',display: "flex",position: 'relative',justifyContent:'center',marginTop:'-70px'}}>
                      <img src="CAR 1.png" width="90%" />
                  </Box>
                <Typography className={classes.customFont} align='center'  variant='h5'>ECONOMY CAR</Typography>
                
                <Typography className={classes.customBody} sx={{mt:1}} align='center'  variant='body1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam tempore nulla veniam. Molestias, iure.</Typography>
                <Typography className={classes.customFont} sx={{mt:1}} align='center'  variant='h4'>₹ 11 / Km</Typography>
               <Box style={{display:'flex',justifyContent: 'center'}}>               
                  <Button className={classes.customButton} variant="contained">
            Read More
          </Button>
          </Box>

              </Paper>
            </Box>
          </Grid>
          <Grid item md={4} >
          <Box>
              <Paper  sx={{padding:"20px",backgroundColor:'#F5F4F2',}}>
                  <Box sx={{width:'100%',display: "flex",position: 'relative',justifyContent:'center',marginTop:'-70px'}}>
                      <img src="CAR 2.png" width="90%" />
                  </Box>
                  <Typography className={classes.customFont} align='center'  variant='h5'>STANDARD CAR</Typography>
               
                <Typography className={classes.customBody} sx={{mt:1}} align='center'  variant='body1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam tempore nulla veniam. Molestias, iure.</Typography>
                <Typography className={classes.customFont} sx={{mt:1}} align='center'  variant='h4'>₹ 25 / Km</Typography>
               <Box style={{display:'flex',justifyContent: 'center'}}>               
                  <Button className={classes.customButton} variant="contained">
            Read More
          </Button>
          </Box>

              </Paper>
            </Box>
          </Grid>
          <Grid item md={4} >
          <Box>
              <Paper  sx={{padding:"20px",backgroundColor:'#F5F4F2',}}>
                  <Box sx={{width:'100%',display: "flex",position: 'relative',justifyContent:'center',marginTop:'-70px'}}>
                      <img src="CAR 3.png" width="90%" />
                  </Box>
                  <Typography className={classes.customFont} align='center'  variant='h5'>LUXURY CAR</Typography>
               
                <Typography className={classes.customBody} sx={{mt:1}} align='center'  variant='body1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam tempore nulla veniam. Molestias, iure.</Typography>
                <Typography className={classes.customFont} sx={{mt:1}} align='center'  variant='h4'>₹ 45 / Km</Typography>
               <Box style={{display:'flex',justifyContent: 'center'}}>               
                  <Button className={classes.customButton} variant="contained">
            Read More
          </Button>
          </Box>

              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Tarif;
