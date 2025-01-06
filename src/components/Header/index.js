import React, { useState, useEffect, useContext } from 'react';
import { GlobleInfo } from '../../App';
import { FaBars, FaSearch, FaShoppingCart } from 'react-icons/fa'; // Importing icons
import dceyewrLogo from '../../Assets/images/dceyewr-logo-no-text.png';

import './index.css';

const Header = () => {
  const { productCount } = useContext(GlobleInfo)
  const [isSearchOpen, setIsSearchOpen] = useState(false);  // State to toggle the search popup
  const [searchQuery, setSearchQuery] = useState('');        // State for search input
  const [searchType, setSearchType] = useState('relative');  // State for search type
  const [cartlength, setCartItems] = useState("")



  const toggleSearchPopup = () => {
    setIsSearchOpen(!isSearchOpen);  // Toggle popup
  };

  const handleSearch = () => {
    console.log(`Search Query: ${searchQuery}`);
    console.log(`Search Type: ${searchType}`);
  };

  return (
    <div className='header-bg-container'>
      <header className="header-main-container">
        {/* Left - Menu Icon */}
        <div className="left-section">
          <FaBars className="menu-icon" />
          <span className="nav-link">Sunglasses</span>
          <span className="nav-link">Eyeglasses</span>
          <span className="nav-link nav-link-modifiy">New Arrivals</span>
          <span className="nav-link">Collection</span>
        </div>

        {/* Center - Logo */}
        <div className="logo-section">
          <img src={dceyewrLogo} className="logo-icon" alt="Logo" />
        </div>

        {/* Right - Search and Cart */}
        <div className="right-section">
          <FaSearch className="icon" onClick={toggleSearchPopup} /> {/* Clickable search icon */}
          <div className="cart-container">
            <FaShoppingCart className="icon" />
            <div className="cart-badge">{productCount}</div>
          </div>
        </div>
      </header>

      {/* Search Popup */}
      {isSearchOpen && (
        <div className="search-popup">
          <div className="search-input-container">
            <input
              type="text"
              className="search-input"
              placeholder="Search Product"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="search-button" onClick={handleSearch}>
              <FaSearch />
            </button>
          </div>

          <div className="search-type-container">
            <label className="search-type-label">Search Type:</label>
            <input
              type="radio"
              id="relative"
              name="searchType"
              value="relative"
              checked={searchType === 'relative'}
              onChange={(e) => setSearchType(e.target.value)}
            />
            <label htmlFor="relative">Relative</label>

            <input
              type="radio"
              id="exact"
              name="searchType"
              value="exact"
              checked={searchType === 'exact'}
              onChange={(e) => setSearchType(e.target.value)}
            />
            <label htmlFor="exact">Exact Match</label>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
