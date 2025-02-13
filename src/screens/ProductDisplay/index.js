import React, { useEffect, useState, useContext } from 'react';
import { GlobleInfo } from '../../App';
import { Link } from 'react-router-dom';
import { SERVER_API_URL } from '../../server/server';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from "../../components/Header";
import { LuArrowDownUp } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
// import { ImFire } from "react-icons/im";
// import { SlFire } from "react-icons/sl";
import { BsBagHeart } from "react-icons/bs";
import { BsBagHeartFill } from "react-icons/bs";
import tdesign from '../../Assets/images/tdesign_cart.png';

import Aviator from '../../Assets/images/Aviator.png'
import CatsEye from '../../Assets/images/CatsEye.png'
import Rectangle from '../../Assets/images/Rectangle.png'
import Round from '../../Assets/images/Round.png'
import Square from '../../Assets/images/Square.png'
import Sports from '../../Assets/images/Sports.png'
import Hexagonal from '../../Assets/images/Hexagonal.png'
import Oval from '../../Assets/images/Oval.png'

import Fullrim from '../../Assets/images/Fullrim.svg'
import Halfrim from '../../Assets/images/Halfrim.svg'
import Rimless from '../../Assets/images/Rimless.svg'
import "./index.css";

const frameType = ['Fullrim', 'Halfrim', 'Rimless',];
const frameShapes = [
  'Aviator', 'CatsEye', 'Rectangle', 'Round', 'Square', 'Oval'];
// Mapping frame shapes to their respective imported images
const frameImages = {
  Aviator,
  CatsEye,
  Rectangle,
  Round,
  Square,
  Sports,
  Hexagonal,
  Oval,
  Fullrim,
  Halfrim,
  Rimless,
};

const genders = ['Men', 'Women', 'Unisex', 'Kids'];
const frameColors = [
  { name: "Black" },
  { name: "Gold" },
  { name: "Brown" },
  { name: "Blue" },
  { name: "Silver" },
  { name: "Transparent" },
  { name: "Green" },
  { name: "Grey" },
  { name: "Pink" },
  { name: "Red" },
  { name: "White" },
  { name: "Purple" },
  { name: "Orange" },
];
const lensColors = [
  { name: "Blue", count: 0 },
  { name: "Green", count: 0 },
  { name: "Yellow", count: 0 },
  { name: "Transparent", count: 0 },
  { name: "Pink", count: 0 },
  { name: "Brown", count: 0 },
  { name: "Grey", count: 0 },
  { name: "Black", count: 0 },
  { name: "Red", count: 0 },
  { name: "Violet", count: 0 },
  { name: "White", count: 0 },
];
const ProductDisplay = () => {
  const { category } = useParams();
  const { getProductCount } = useContext(GlobleInfo);
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  // State to track hovered images
  const [hoveredImages, setHoveredImages] = useState({});

  const [selectedFrameShape, setSelectedFrameShape] = useState([]);
  const [selectedFrameType, setSelectedFrameType] = useState([]);
  const [selectedGender, setSelectedGender] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedLensColor, setSelectedLensColor] = useState([]);
  const [selectedFrameColor, setSelectedFrameColor] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(5000);
  const [sortOption, setSortOption] = useState('Price: High to Low');
  const [wishlistItems, setWishlistItems] = useState(() => {
    return JSON.parse(localStorage.getItem('wishlist')) || [];
  });
  const [hoveredColor, setHoveredColor] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;
  

  const handleMouseEnter = (productId, hoverImage) => {
    setHoveredImages((prev) => ({
      ...prev,
      [productId]: hoverImage,
    }));
  };

  const handleMouseLeave = (productId, defaultImage) => {
    setHoveredImages((prev) => ({
      ...prev,
      [productId]: defaultImage,
    }));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${SERVER_API_URL}/product`);
        const products = response.data.result;
        setAllProducts(products);

        // Apply initial filter based on category (useParams)
        const initialFiltered = filterByCategory(products, category);
        setFilteredProducts(initialFiltered);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchData();
  }, [category]);

  const filterByCategory = (products, category) => {
    if (!category || category.toLowerCase() === "both") return products;

    // Extract meaningful keywords from input
    const keywords = category.toLowerCase().match(/\b\w+\b/g) || []; // Extract words (ignores special characters)
    if (keywords.length === 0) return products;

    const filtered = products
      .map((product) => {
        let matchCount = 0;

        // Normalize product properties for comparison
        const frameShape = product.frame_shape?.toLowerCase() || "";
        const frameType = product.frem_type?.toLowerCase() || "";
        const gender = product.gender?.toLowerCase() || "";
        const highlights = product.highlights?.toLowerCase() || "";
        let frameColor = "";

        // Handle frameColor as a JSON array
        if (product.frameColor) {
          try {
            const parsedColors = JSON.parse(product.frameColor);
            if (Array.isArray(parsedColors)) {
              frameColor = parsedColors
                .map((colorObj) => Object.keys(colorObj)[0].trim().toLowerCase())
                .join(" ");
            }
          } catch (error) {
            console.error("Error parsing frameColor:", product.frameColor, error);
          }
        }

        // Check if any keyword matches any product attributes
        keywords.forEach((keyword) => {
          if (
            frameShape.includes(keyword) ||
            frameType.includes(keyword) ||
            gender.includes(keyword) ||
            highlights.includes(keyword) ||
            frameColor.includes(keyword)
          ) {
            matchCount++;
          }
        });

        return matchCount > 0 ? { product, matchCount } : null;
      })
      .filter(Boolean) // Remove null values
      .sort((a, b) => b.matchCount - a.matchCount) // Sort by highest match count
      .map((item) => item.product);

    return filtered.length ? filtered : allProducts;
  };

  const addToCart = (item) => {
    const existingCartItems = JSON.parse(localStorage.getItem('cart')) || [];

    const itemIndex = existingCartItems.findIndex(cartItem => cartItem.id === item.id);

    if (itemIndex !== -1) {
      existingCartItems[itemIndex].quantity = Number(existingCartItems[itemIndex].quantity) || 1;
      existingCartItems[itemIndex].quantity += 1;
    } else {
      // If the item doesn't exist, add it with an initial quantity of 1
      item.quantity = 1;
      existingCartItems.push(item);
    }

    localStorage.setItem('cart', JSON.stringify(existingCartItems));
    // Get the count of unique items in the cart
    const uniqueItemCount = existingCartItems.length;
    alert(`${item.product_title} added to cart successfully!`);
    // Update product count in the global state
    getProductCount(uniqueItemCount);
  };

  // const wishlist = (item) => {
  //   const existingWishlistItems = JSON.parse(localStorage.getItem('wishlist')) || [];

  //   const itemIndex = existingWishlistItems.findIndex(wishlistItem => wishlistItem.id === item.id);

  //   if (itemIndex !== -1) {
  //     alert(`${item.product_title} is already in your wishlist!`);
  //   } else {
  //     // Add item to wishlist
  //     existingWishlistItems.push(item);
  //     localStorage.setItem('wishlist', JSON.stringify(existingWishlistItems));
  //     alert(`${item.product_title} added to wishlist successfully!`);
  //   }
  // }

  const toggleWishlist = (product) => {
    let updatedWishlist = [...wishlistItems];
    const index = updatedWishlist.findIndex(item => item.product_id === product.product_id);

    if (index !== -1) {
      updatedWishlist.splice(index, 1); // Remove if exists
    } else {
      updatedWishlist.push(product); // Add if not exists
    }

    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    setWishlistItems(updatedWishlist); // Update state
  };

  const handleFrameTypeChange = (framtype) => {
    setSelectedFrameType((prev) =>
      prev.includes(framtype) ? prev.filter((f) => f !== framtype) : [...prev, framtype]
    );
  };

  const handleFrameShapeChange = (frame) => {
    setSelectedFrameShape((prev) =>
      prev.includes(frame) ? prev.filter((f) => f !== frame) : [...prev, frame]
    );
  };

  const handleGenderChange = (gender) => {
    setSelectedGender((prev) =>
      prev.includes(gender) ? prev.filter((g) => g !== gender) : [...prev, gender]
    );
  };

  // Handle color filter selection
  const handleLensColor = (color) => {
    setSelectedLensColor((prev) =>
      prev.includes(color)
        ? prev.filter((item) => item !== color) // Remove if already selected
        : [...prev, color] // Add if not selected
    );
  };

  const handleFrameColor = (color) => {
    setSelectedFrameColor((prev) =>
      prev.includes(color)
        ? prev.filter((item) => item !== color) // Remove if already selected
        : [...prev, color] // Add if not selected
    );
  };

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxPrice - 1);
    setMinPrice(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minPrice + 1);
    setMaxPrice(value);
  };

  const handleSliderChange = (e, type) => {
    const value = Number(e.target.value);
    if (type === "min") {
      setMinPrice(Math.min(value, maxPrice - 1));
    } else {
      setMaxPrice(Math.max(value, minPrice + 1));
    }
  };

  const resetFilters = () => {
    setSelectedFrameType([]);
    setSelectedFrameShape([]);
    setSelectedGender([]);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  useEffect(() => {
    const filterAndSortProducts = () => {
      let filteredProducts = filterByCategory(allProducts, category); // Start with category-based filtering

      // **Filter by Frame Type**
      if (selectedFrameType.length > 0) {
        filteredProducts = filteredProducts.filter((product) =>
          selectedFrameType.some(
            (frame) => frame.replace(/\s+/g, "").toLowerCase() === product.frem_type?.replace(/\s+/g, "").toLowerCase()
          )
        );
      }

      // **Filter by Frame Shape**
      if (selectedFrameShape.length > 0) {
        filteredProducts = filteredProducts.filter((product) =>
          selectedFrameShape.some(
            (shape) => shape.replace(/\s+/g, "").toLowerCase() === product.frame_shape?.replace(/\s+/g, "").toLowerCase()
          )
        );
      }

      // **Filter by Gender**
      if (selectedGender.length > 0) {
        filteredProducts = filteredProducts.filter((product) =>
          selectedGender.some(
            (gender) => gender.trim().toLowerCase() === product.gender?.trim().toLowerCase()
          )
        );
      }

      // **Filter by Lens Color**
      if (selectedLensColor.length > 0) {
        filteredProducts = filteredProducts.filter((product) => {
          if (!product.lenshColor) return false;
          try {
            const lensColorsArray = JSON.parse(product.lenshColor);
            const productLensColors = lensColorsArray.map((colorObj) => Object.keys(colorObj)[0].trim().toLowerCase());
            return selectedLensColor.some((color) => productLensColors.includes(color.trim().toLowerCase()));
          } catch (error) {
            console.error("Error parsing lens_color:", product.lenshColor, error);
            return false;
          }
        });
      }

      // **Filter by Frame Color**
      if (selectedFrameColor.length > 0) {
        filteredProducts = filteredProducts.filter((product) => {
          if (!product.frameColor) return false;
          try {
            const frameColorsArray = JSON.parse(product.frameColor);
            const productFrameColors = frameColorsArray.map((colorObj) => Object.keys(colorObj)[0].trim().toLowerCase());
            return selectedFrameColor.some((color) => productFrameColors.includes(color.trim().toLowerCase()));
          } catch (error) {
            console.error("Error parsing frameColor:", product.frameColor, error);
            return false;
          }
        });
      }

      // **Filter by Price Range**
      filteredProducts = filteredProducts.filter((product) => {
        return product.product_price >= minPrice && product.product_price <= maxPrice;
      });

      // **Sorting Logic**
      let sortedProducts = [...filteredProducts];

      switch (sortOption) {
        case 'Price: High to Low':
          sortedProducts.sort((a, b) => (b.product_price - (b.product_price * b.discount / 100)) -
            (a.product_price - (a.product_price * a.discount / 100)));
          break;
        case 'Price: Low to High':
          sortedProducts.sort((a, b) => (a.product_price - (a.product_price * a.discount / 100)) -
            (b.product_price - (b.product_price * b.discount / 100)));
          break;
        case 'Newest First':
          sortedProducts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
          break;
        default:
          break;
      }

      console.log("Final Sorted & Filtered Products:", sortedProducts);
      setFilteredProducts(sortedProducts.length > 0 ? sortedProducts : []);
      setCurrentPage(1);
    };

    filterAndSortProducts();
  }, [selectedFrameType, selectedFrameShape, selectedGender, selectedFrameColor, minPrice, maxPrice, selectedLensColor, allProducts, category, sortOption]);




  return (
    <>
      <Header />
      <div className="product-page">
        <div className="banner" />

        <div className='product-header'>
          <div className="filter-bar">
            <span className="active">
              View Frames:- {[...selectedFrameType, ...selectedFrameShape].join(" / ")}
            </span>


            {/* <div className="toggle">
              <span className="active">VIEW 3D TRY ON</span>
            </div> */}

            <div className="sort">
              <LuArrowDownUp style={{ color: "#009688", fontSize: "14px" }} />
              <span className='active' style={{ fontSize: "13px" }}>SORT BY:</span>
              <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
                <option>Price: High to Low</option>
                <option>Price: Low to High</option>
                <option>Newest First</option>
              </select>
            </div>
          </div>
        </div>

        <div className="content-wrapper">
          {/* Filter Container */}
          <div className="filter-container">
            <h1 className="filters-title">FILTERS</h1>
            <div className="filter-buttons">
              <button className="apply-btn">Apply</button>
              <button className="reset-btn" onClick={resetFilters}>Reset</button>
            </div>

            <div className="filter-group">
              <h3>GENDER</h3>
              {genders.map((gender) => (
                <label key={gender}>
                  <input
                    type="checkbox"
                    value={gender}
                    onChange={() => handleGenderChange(gender)}
                    checked={selectedGender.includes(gender)}
                  />
                  {gender}
                </label>
              ))}
            </div>

            <h3>Frame Type</h3>
            <div className="frame-container">
              {frameType.map((shape) => (
                <label
                  className={`frame-item ${selectedFrameType.includes(shape) ? 'selected' : ''}`}
                  key={shape}
                  onClick={() => handleFrameTypeChange(shape)}
                >
                  <img
                    className="frame-image-icon"
                    src={frameImages[shape]}
                    alt={shape}
                  />
                  <span className="frame-label">{shape}</span>
                </label>
              ))}
            </div>

            <h3 style={{ marginTop: "10px" }}>Frame Shape</h3>
            <div className="frame-container">
              {frameShapes.map((shape) => (
                <label
                  className={`frame-item ${selectedFrameShape.includes(shape) ? 'selected' : ''}`}
                  key={shape}
                  onClick={() => handleFrameShapeChange(shape)}
                >
                  <img
                    className="frame-image-icon"
                    // src={`../../Assets/images/${shape}.png`}
                    src={frameImages[shape]}
                    alt={shape}
                  />
                  <span className="frame-label">{shape}</span>
                </label>
              ))}
            </div>

            {/* Add Filter Section Below */}
            <h3 className="frame-color-title">Frame Color</h3>
            <div className="frame-color-container">
              <div className="frame-color-list">
                {frameColors.map((color, index) => (
                  <label
                    className="frame-color-item"
                    key={index}
                    onMouseEnter={() => setHoveredColor(color.name)} // Show tooltip on hover
                    onMouseLeave={() => setHoveredColor(null)} // Hide tooltip when not hovering
                  >
                    <input
                      type="checkbox"
                      value={color.name}
                      onChange={() => handleFrameColor(color.name)}
                      checked={selectedColors.includes(color.name)}
                    />
                    <span
                      style={{
                        backgroundColor: color.name.toLowerCase(),
                      }}
                    ></span>
                    {/* Tooltip */}
                    {hoveredColor === color.name && (
                      <span className="tooltip">{color.name}</span>
                    )}
                  </label>
                ))}
              </div>
            </div>

            <h3 className="frame-color-title" style={{ marginTop: "0" }}>Lens Color</h3>
            <div className="frame-color-container">
              <div className="frame-color-list">
                {lensColors.map((color, index) => (
                  <label
                    className="frame-color-item"
                    key={index}
                    onMouseEnter={() => setHoveredColor(color.name)} // Show tooltip on hover
                    onMouseLeave={() => setHoveredColor(null)} // Hide tooltip when not hovering
                  >
                    <input
                      type="checkbox"
                      value={color.name}
                      onChange={() => handleLensColor(color.name)}
                      checked={selectedColors.includes(color.name)}
                    />
                    <span
                      style={{
                        backgroundColor: color.name.toLowerCase(),
                      }}
                    ></span>
                    {/* Tooltip */}
                    {hoveredColor === color.name && (
                      <span className="tooltip">{color.name}</span>
                    )}
                  </label>
                ))}
              </div>
            </div>

            {/* price input container */}
            <div className="price-slider">
              <h3 className="price-slider-title">Price</h3>
              <div className="price-input-container">
                <div className="price-input">
                  <span>₹</span>
                  <input
                    type="number"
                    value={minPrice}
                    placeholder='500'
                    onChange={handleMinChange}
                    min="0"
                    max={maxPrice - 1}
                  />
                </div>
                <div className="price-input">
                  <span>₹</span>
                  <input
                    type="number"
                    value={maxPrice}
                    placeholder='5000'
                    onChange={handleMaxChange}
                    min={minPrice + 1}
                    max="9999"
                  />
                </div>
              </div>

              <div className="slider-container">
                <input
                  type="range"
                  min="0"
                  max="9999"
                  value={minPrice}
                  onChange={(e) => handleSliderChange(e, "min")}
                  className="slider slider-min"
                />
                <input
                  type="range"
                  min="0"
                  max="9999"
                  value={maxPrice}
                  onChange={(e) => handleSliderChange(e, "max")}
                  className="slider slider-max"
                />
              </div>
            </div>

          </div>

          {/* Product Grid Section */}
          <div className="product-grid">
            {
              currentProducts.map((product, index) => {
                const defaultImage = product.product_thumnail_img;
                const hoverImage = product.product_all_img?.[0] || defaultImage;
                const imageSrc = hoveredImages[product.product_id] || defaultImage;

                let colors = [];
                // Safely parse the color field and ensure it's an array
                try {
                  const parsedColor = product.color ? JSON.parse(product.color) : [];
                  colors = Array.isArray(parsedColor) ? parsedColor : [];
                } catch (error) {
                  console.error(`Failed to parse color for product ID ${product.product_id}:`, error);
                  colors = []; // Default to an empty array if parsing fails
                }

                return (
                  <div key={index} className="product-card">
                    <div className='red-heart-container'>
                      {wishlistItems.some(item => item.product_id === product.product_id) ? (
                        <BsBagHeartFill className='hert-icon red-background' onClick={() => toggleWishlist(product)} />
                      ) : (
                        <BsBagHeart className='hert-icon' onClick={() => toggleWishlist(product)} />
                      )}
                    </div>
                    {/* <Link to={`/product-item/${product.product_id}`}>
                      <img className="carousel-image2" src={`${SERVER_API_URL}/${product?.product_thumnail_img}`} alt={`ImageItem ${product.product_id + 1}`} />
                    </Link> */}
                    <Link to={`/product-item/${product.product_id}`}>
                    <img
                      className="carousel-image2"
                      src={`${SERVER_API_URL}/${imageSrc}`}
                      alt={`ImageItem ${product.product_id}`}
                      onMouseEnter={() => handleMouseEnter(product.product_id, hoverImage)}
                      onMouseLeave={() => handleMouseLeave(product.product_id, defaultImage)}
                    />
                    </Link>
                    <div className="product-info">
                      {product.count_in_stock === 0 ? (
                        <h4 className='out-of-stock'>Out of stock</h4>
                      ):(<h4 className='out-of-stock' style={{color:"green"}}>in stock</h4>)}
                      <h4 className="product-hilight">{product.product_title}</h4>
                      <strong className="product-title">{product.highlights}</strong>
                      <p className="product-price">₹{(product.product_price - (product.product_price * product.discount / 100)).toFixed(0)}/-</p>
                      <div className="button-add-to-cart">
                        <div className="product-attributes">
                          <p className="product-attribute">
                            <strong>Color:</strong>
                            <div className="color-options">
                              {
                                colors.length > 0 ? (
                                  colors.map((colorObj, colorIndex) => {
                                    const [colorName, colorCode] = Object.entries(colorObj)[0]; // Extract color name and code
                                    return (
                                      <span
                                        key={colorIndex}
                                        className="color-box"
                                        title={colorName}
                                        style={{
                                          backgroundColor: colorCode,
                                          display: 'inline-block',
                                          width: '30px',
                                          height: '16px',
                                          borderRadius: '5px',
                                          margin: '0 5px',
                                          border: '1px solid #ddd',
                                          cursor: 'pointer'
                                        }}
                                      ></span>
                                    );
                                  })
                                ) : (
                                  <span>No Colors Available</span>
                                )
                              }
                            </div>
                          </p>
                          <p className="product-attribute">
                            <strong>Frame material:</strong> {product.material}
                          </p>
                        </div>
                        <button className="cart-btn" onClick={() => addToCart(product)}>
                          <img src={tdesign} alt="tdesign" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            }
          </div>
        </div>

        {/* Pagination Section */}
        <div className='pagination-main-container'>
          <div className="pagination">
            <button className="prev-btn" onClick={handlePrevPage} disabled={currentPage === 1}>
              Prev
            </button>
            <button className="next-btn" onClick={handleNextPage} disabled={currentPage === totalPages}>
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductDisplay;