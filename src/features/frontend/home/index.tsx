import * as React from 'react';
import ImageSlider from './ImageSlider';
import BookingForm from './BookingForm';
import HeroUi from './HeroUi';
import Tarif from './Tarif';
import Services from './Services';
import DownloadApp from './DownloadApp';
import Footer from '../../../ui/footer/Footer';


interface IHomeProps {
}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  return (<>
  {/* <ImageSlider/> */}
  <HeroUi/>  
  <BookingForm/>
  <Tarif/>
  <Services/>
  {/* <h2>Home</h2> */}
  <DownloadApp/>
  <Footer/>
  </>);
};

export default Home;
