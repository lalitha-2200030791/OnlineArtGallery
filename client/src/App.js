import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'; 
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Artwork from './components/Artwork';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import feature1 from './components/feature1.jpg';
import feature2 from './components/feature2.jpg';
import feature3 from './components/feature3.jpg';
import bg from './components/bg.png';

function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, 
    centerMode: true,
    centerPadding: '60px',
  };
  const element = (
    <Router>
       <App />
    </Router>
   );
   
   const container = document.getElementById('root');
   ReactDOM.render(element, container);

  return (
    <div className="App" style={{ backgroundImage: {bg}, backgroundSize: 'cover', 
    backgroundPosition: 'center', backgroundRepeat: 'no-repeat',}}>
      <Header />
      
      <div className="Dashboard">
        <h2>START YOUR ART JOURNEY FROM US !</h2>
        <p>Join our online art gallery to showcase your talent to the world.</p>
        <Slider {...settings}>
          <div className="Feature">
            <img src={feature1} alt="Feature 1" style={{ maxWidth: '80%', height: 'auto', margin: '0 auto' }} />
            <h3>Wide Selection</h3>
            <p>Discover a diverse collection of artworks from talented artists around the globe.</p>
          </div>
          <div className="Feature">
            <img src={feature2} alt="Feature 2" style={{ maxWidth: '80%', height: 'auto', margin: '0 auto' }} />
            <h3>Easy Navigation</h3>
            <p>Explore artworks conveniently categorized by genre, style, and artist.</p>
          </div>
          <div className="Feature">
            <img src={feature3} alt="Feature 3" style={{ maxWidth: '80%', height: 'auto', margin: '0 auto' }} />
            <h3>Interactive Gallery</h3>
            <p>Immerse yourself in our interactive gallery experience with high-quality images of artworks.</p>
          </div>
        </Slider>
      </div>
      <Routes>
        <Route path="/Artwork" element={<Artwork/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
