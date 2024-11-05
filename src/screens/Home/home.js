import React from 'react';
import { Link } from 'react-router-dom'

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import yourPerfectPairBanner from '../../Assets/images/your-perfect-pair-banner.webp';
import crystalClearVisionBanner from '../../Assets/images/crystal-clear-vision-banner.webp';
import textBanner from '../../Assets/images/text_banner.webp';
import aviatorVector from '../../Assets/images/goggles/aviator-vector.webp';
import catsEye from '../../Assets/images/goggles/cats-eye.webp';
import rectangleVector from '../../Assets/images/goggles/rectangle-vector.webp';
import roundVector from '../../Assets/images/goggles/round-vector.webp';
import squareVector from '../../Assets/images/goggles/square-vector.webp';
import wayfarerVector from '../../Assets/images/goggles/wayfarer-vector.webp';
import heliusGlasses from '../../Assets/images/Helius.webp'; // Add your Helius Eyewear image
import pawerGlass from '../../Assets/images/power_glass.png'
import computerGlassMen from '../../Assets/images/computer-glass-men.webp'
import sunglasses from '../../Assets/images/sunglasses-image.webp'
import prescription from '../../Assets/images/prescription-glasses.webp'
import zeroPawer from '../../Assets/images/zero-power-glasses.webp'
import lykosEyewear from '../../Assets/images/lykos-banner.webp'
import forMenSection from '../../Assets/images/for-men-section.webp'
import forWomenSection from '../../Assets/images/for-women-section.webp'
import forChildSection from '../../Assets/images/for-child-section.webp'
import stayAheadInStyleBanner from '../../Assets/images/stay-ahead-in-style-banner.webp'
import Blinkers from '../../Assets/images/Blinkers.webp'
import EyePoppin from '../../Assets/images/EyePoppin.webp'

import './home.css';

const Home = () => {
  return (
    <>
      <Header />
      <div className='home-bg-container'>
        <div className='home-main-container'>
          {/* Top Banners */}
          <Link to="/product-display">
            <div className='your-perfect-pair'>
              <div className='yourPerfectPairBanner-container'>
                <img src={yourPerfectPairBanner} className='yourPerfectPairBanner' alt='Your Perfect Pair Banner' />
              </div>

              <div className='crystalClearVisionBanner-container'>
                <img src={crystalClearVisionBanner} className='crystalClearVisionBanner' alt='Crystal Clear Vision Banner' />
              </div>
            </div>
          </Link>

          {/* Glasses Categories Section */}
          <div className="glasses-category-container">
            <div className="category-banner">
              <img src={textBanner} className='text-banner' alt={textBanner} />
            </div>

            <div className="categories-grid">
              <div className="category-item">
                <Link to="/product-display"><img src={aviatorVector} alt="Aviator" className="category-icon" /></Link>
                <p>Aviator</p>
              </div>
              <div className="category-item">
                <Link to="/product-display"><img src={catsEye} alt="Cats Eye" className="category-icon" /></Link>
                <p>Cats Eye</p>
              </div>
              <div className="category-item">
                <Link to="/product-display"><img src={rectangleVector} alt="Rectangle" className="category-icon" /></Link>
                <p>Rectangle</p>
              </div>
              <div className="category-item">
                <Link to="/product-display"><img src={roundVector} alt="Round" className="category-icon" /></Link>
                <p>Round</p>
              </div>
              <div className="category-item">
                <Link to="/product-display"><img src={squareVector} alt="Square" className="category-icon" /></Link>
                <p>Square</p>
              </div>
              <div className="category-item">
                <Link to="/product-display"><img src={wayfarerVector} alt="Wayfarer" className="category-icon" /></Link>
                <p>Wayfarer</p>
              </div>
            </div>
          </div>

          {/* Helius Eyewear Section */}
          <div className="helius-text">
            <h2 className='Helius-Eyewear'>Helius Eyewear</h2>
            <hr className='hr-line' />
          </div>
          <Link to="/product-display"> <img src={heliusGlasses} alt="Helius Glasses" className="helius-glasses-image" /></Link>

          {/* Eyeglasses-container */}
          <div className='Eyeglasses-container'>
            <div className='Eyeglasses-container-main'>
              <h1 className='Eyeglasses-text'>Eyeglasses</h1>
              <hr className='hr-line' />
              <div className='Eyeglasses-home'>

                <div className='pawerGlass-container'>
                  <Link to="/product-display"> <img src={pawerGlass} className='pawerGlass' /></Link>
                  <div className='pawerglass-text-container'>
                    <p className='Power-Glasses-text'>Power Glasses</p>
                    <h1 className='Rim-Rectangle-text'>Black Full Rim Rectangle</h1>
                    <h2 className='More-Details-text'>More Details</h2>
                  </div>
                </div>
                <div className='pawerGlass-container'>
                  <Link to="/product-display"><img src={pawerGlass} className='pawerGlass' /></Link>
                  <div className='pawerglass-text-container'>
                    <p className='Power-Glasses-text'>Power Glasses</p>
                    <h1 className='Rim-Rectangle-text'>Black Full Rim Rectangle</h1>
                    <h2 className='More-Details-text'>More Details </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='eyeglasses-container'>
            <h1 className='eyeglasses-title'>Eyeglasses for Every Occasion</h1>
            <hr className='hr-line' />
            <div className='eyeglasses-grid'>

              {/* Computer Glasses */}
              <div className='eyeglasses-card' style={{ backgroundImage: `url(${computerGlassMen})` }}>
                <div className='eyeglasses-info'>
                  <h2 className='eyeglasses-card-title'>Computer Glasses</h2>
                  <p className='eyeglasses-card-description'>Protect Your Eyes - Blue Light Filtering</p>
                </div>
                <div className='eyeglasses-arrow'>&#8250;</div>
              </div>

              {/* Sunglasses */}
              <div className='eyeglasses-card' style={{ backgroundImage: `url(${sunglasses})` }}>
                <div className='eyeglasses-info'>
                  <h2 className='eyeglasses-card-title'>Sunglasses</h2>
                  <p className='eyeglasses-card-description'>Stay Stylish - 100% UV Protection</p>
                </div>
                <div className='eyeglasses-arrow'>&#8250;</div>
              </div>

              {/* Prescription Glasses */}
              <div className='eyeglasses-card' style={{ backgroundImage: `url(${prescription})` }}>
                <div className='eyeglasses-info'>
                  <h2 className='eyeglasses-card-title'>Prescription</h2>
                  <p className='eyeglasses-card-description'>Perfect Clarity - Tailored to Your Needs</p>
                </div>
                <div className='eyeglasses-arrow'>&#8250;</div>
              </div>

              {/* Zero Power Glasses */}
              <div className='eyeglasses-card' style={{ backgroundImage: `url(${zeroPawer})` }}>
                <div className='eyeglasses-info'>
                  <h2 className='eyeglasses-card-title'>Zero Power Glasses</h2>
                  <p className='eyeglasses-card-description'>Style without Prescription</p>
                </div>
                <div className='eyeglasses-arrow'>&#8250;</div>
              </div>

            </div>
          </div>

          {/* Helius Eyewear Section */}
          <div className="helius-text">
            <h2 className='Lykos-Eyewear'>Lykos Eyewear</h2>
            <hr className='hr-line' />
          </div>
          <Link to="/product-display"><img src={lykosEyewear} alt="Helius Glasses" className="helius-glasses-image" /></Link>

          {/* Eyeglasses-container */}
          <div className='Eyeglasses-container'>
            <div className='Eyeglasses-container-main'>
              <h1 className='Eyeglasses-text'>Eyeglasses</h1>
              <div className='Eyeglasses-home'>

                <div className='pawerGlass-container'>
                  <img src={pawerGlass} className='pawerGlass' />
                  <div className='pawerglass-text-container'>
                    <p className='Power-Glasses-text'>Power Glasses</p>
                    <h1 className='Rim-Rectangle-text'>Black Full Rim Rectangle</h1>
                    <h2 className='More-Details-text'>More Details</h2>
                  </div>
                </div>
                <div className='pawerGlass-container'>
                  <img src={pawerGlass} className='pawerGlass' />
                  <div className='pawerglass-text-container'>
                    <p className='Power-Glasses-text'>Power Glasses</p>
                    <h1 className='Rim-Rectangle-text'>Black Full Rim Rectangle</h1>
                    <h2 className='More-Details-text'>More Details </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='eyeglasses-container'>
            <h1 className='eyeglasses-title'>Eyeglasses for Every Occasion</h1>
            <hr className='hr-line' />
            <div className='eyeglasses-grid eyeglasses-grid1'>

              {/* Computer Glasses */}
              <div className='eyeglasses-card eyeglasses-card1' style={{ backgroundImage: `url(${forMenSection})` }}>
                <div className='eyeglasses-info'>
                  <h2 className='eyeglasses-card-title'>Computer Glasses</h2>
                  <p className='eyeglasses-card-description'>Protect Your Eyes - Blue Light Filtering</p>
                </div>
                <div className='eyeglasses-arrow'>&#8250;</div>
              </div>

              {/* Sunglasses */}
              <div className='eyeglasses-card eyeglasses-card1' style={{ backgroundImage: `url(${forWomenSection})` }}>
                <div className='eyeglasses-info'>
                  <h2 className='eyeglasses-card-title'>Sunglasses</h2>
                  <p className='eyeglasses-card-description'>Stay Stylish - 100% UV Protection</p>
                </div>
                <div className='eyeglasses-arrow'>&#8250;</div>
              </div>

              {/* Prescription Glasses */}
              <div className='eyeglasses-card eyeglasses-card1' style={{ backgroundImage: `url(${forChildSection})` }}>
                <div className='eyeglasses-info'>
                  <h2 className='eyeglasses-card-title'>Prescription</h2>
                  <p className='eyeglasses-card-description'>Perfect Clarity - Tailored to Your Needs</p>
                </div>
                <div className='eyeglasses-arrow'>&#8250;</div>
              </div>

            </div>
          </div>

          {/* Lykos Eyewear Section */}
          <div className="helius-text">
            <h2 className='Helius-Eyewear'>Lykos Eyewear</h2>
            <hr className='hr-line' />
          </div>
          <Link to="/product-display"> <img src={stayAheadInStyleBanner} alt="Helius Glasses" className="helius-glasses-image" /></Link>

          {/* Eyeglasses-container */}
          <div className='Eyeglasses-container'>
            <div className='Eyeglasses-container-main'>
              <h1 className='Eyeglasses-text'>Premium Sunglasses</h1>
              <div className='Eyeglasses-home'>

                <div className='pawerGlass-container'>
                  <img src={pawerGlass} className='pawerGlass' />
                  <div className='pawerglass-text-container'>
                    <p className='Power-Glasses-text'>Power Glasses</p>
                    <h1 className='Rim-Rectangle-text'>Black Full Rim Rectangle</h1>
                    <h2 className='More-Details-text'>More Details</h2>
                  </div>
                </div>
                <div className='pawerGlass-container'>
                  <img src={pawerGlass} className='pawerGlass' />
                  <div className='pawerglass-text-container'>
                    <p className='Power-Glasses-text'>Power Glasses</p>
                    <h1 className='Rim-Rectangle-text'>Black Full Rim Rectangle</h1>
                    <h2 className='More-Details-text'>More Details </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Blinkers Eyeglasses Section */}
          <div className="helius-text">
            <h2 className='Helius-Eyewear'>Blinkers Eyeglasses</h2>
            <hr className='hr-line' />
          </div>
          <Link to="/product-display"><img src={Blinkers} alt="Helius Glasses" className="helius-glasses-image" /></Link>

          {/* Eyeglasses-container */}
          <div className='Eyeglasses-container'>
            <div className='Eyeglasses-container-main'>
              <h1 className='Eyeglasses-text'>Eyeglasses</h1>
              <div className='Eyeglasses-home'>

                <div className='pawerGlass-container'>
                  <img src={pawerGlass} className='pawerGlass' />
                  <div className='pawerglass-text-container'>
                    <p className='Power-Glasses-text'>Power Glasses</p>
                    <h1 className='Rim-Rectangle-text'>Black Full Rim Rectangle</h1>
                    <h2 className='More-Details-text'>More Details</h2>
                  </div>
                </div>
                <div className='pawerGlass-container'>
                  <img src={pawerGlass} className='pawerGlass' />
                  <div className='pawerglass-text-container'>
                    <p className='Power-Glasses-text'>Power Glasses</p>
                    <h1 className='Rim-Rectangle-text'>Black Full Rim Rectangle</h1>
                    <h2 className='More-Details-text'>More Details </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* EyePoppin Eyeglasses Section */}
          <div className="helius-text">
            <h2 className='Helius-Eyewear'>EyePoppin Eyeglasses</h2>
            <hr className='hr-line' />
          </div>
          <Link to="/product-display"> <img src={EyePoppin} alt="Helius Glasses" className="helius-glasses-image" /></Link>

          {/* Eyeglasses-container */}
          <div className='Eyeglasses-container'>
            <div className='Eyeglasses-container-main'>
              <h1 className='Eyeglasses-text'>Eyeglasses</h1>
              <div className='Eyeglasses-home'>

                <div className='pawerGlass-container'>
                  <img src={pawerGlass} className='pawerGlass' />
                  <div className='pawerglass-text-container'>
                    <p className='Power-Glasses-text'>Power Glasses</p>
                    <h1 className='Rim-Rectangle-text'>Black Full Rim Rectangle</h1>
                    <h2 className='More-Details-text'>More Details</h2>
                  </div>
                </div>
                <div className='pawerGlass-container'>
                  <img src={pawerGlass} className='pawerGlass' />
                  <div className='pawerglass-text-container'>
                    <p className='Power-Glasses-text'>Power Glasses</p>
                    <h1 className='Rim-Rectangle-text'>Black Full Rim Rectangle</h1>
                    <h2 className='More-Details-text'>More Details </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
