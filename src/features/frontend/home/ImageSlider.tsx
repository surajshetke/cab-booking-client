import { Container, Grid } from '@mui/material';
import * as React from 'react';
import { Carousel } from 'react-bootstrap';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
interface IImageSliderProps {
}

const ImageSlider: React.FunctionComponent<IImageSliderProps> = (props) => {
  return <>
  {/* <Container> */}
      <Grid container>
      <Grid item xs={12}>
      <Carousel>
  <Carousel.Item style={{height:'70vh'}}>
    <img
      className="d-block w-100"
      src="carousel/1.jpeg"
      alt="First slide"
    />

  </Carousel.Item>
  <Carousel.Item style={{height:'70vh'}}>
    <img
      className="d-block w-100"
      src="carousel/2.jpeg"
      alt="Second slide"
    />


  </Carousel.Item>
  <Carousel.Item style={{height:'70vh'}}>
    <img
      className="d-block w-100"
      src="carousel/3.webp"
      alt="Third slide"
    />

   
  </Carousel.Item>
  <Carousel.Item style={{height:'70vh'}}>
    <img
      className="d-block w-100"
      src="carousel/4.webp"
      alt="Third slide"
    />

  </Carousel.Item>
</Carousel>
      </Grid>
      </Grid>
  {/* </Container> */}

  </>;
};

export default ImageSlider;
