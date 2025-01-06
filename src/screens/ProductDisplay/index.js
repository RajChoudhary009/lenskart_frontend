import React, { useEffect, useState, useContext } from 'react';
import { GlobleInfo } from '../../App';
import { Link } from 'react-router-dom';
import { SERVER_API_URL } from '../../server/server';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from "../../components/Header";
import tdesign from '../../Assets/images/tdesign_cart.png';
import "./index.css";

const productCategories = ['Both', 'Sunglasses', 'EyeGlasses'];
const vendors = ['All', 'Ben Hunt', 'DCEYEWR', 'Wolf Eye'];
const frameShapes = [
  'Aviator', 'Cats Eye', 'Rectangle', 'Round', 'Square',
  'Wayfarer', 'Sports(Wraparound)', 'Hexagonal', 'Oval'
];
const genders = ['For Men', 'For Women', 'Unisex', 'For Kids'];

const ProductDisplay = () => {
  const { category } = useParams();
  const { getProductCount } = useContext(GlobleInfo);
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Both');
  const [selectedVendor, setSelectedVendor] = useState('All');
  const [selectedFrame, setSelectedFrame] = useState([]);
  const [selectedGender, setSelectedGender] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;


  console.log("category_test", category)

  // Fetch products from API
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

  // Filter products by lens_type or frem_type
  const filterByCategory = (products, category) => {
    if (!category || category.toLowerCase() === 'both') return products;

    const filtered = products.filter(
      (product) =>
        (product.lens_type && product.lens_type.toLowerCase() === category.toLowerCase()) ||
        (product.frem_type && product.frem_type.toLowerCase() === category.toLowerCase())
    );
    console.log("filtered", filtered)
    // If no products match, return all products
    return filtered.length > 0 ? filtered : products;
  };
  
  

  // Filter products whenever any filter criteria changes
  useEffect(() => {
    const filterProducts = () => {
      let filtered = filterByCategory(allProducts, category);

      if (selectedCategory !== 'Both') {
        filtered = filtered.filter(
          (product) => product.lens_type && product.lens_type.toLowerCase() === selectedCategory.toLowerCase()
        );
      }

      if (selectedVendor !== 'All') {
        filtered = filtered.filter(
          (product) => product.vendor && product.vendor.toLowerCase() === selectedVendor.toLowerCase()
        );
      }

      if (selectedFrame.length > 0) {
        filtered = filtered.filter(
          (product) => product.frem_type && selectedFrame.map((frame) => frame.toLowerCase()).includes(product.frem_type.toLowerCase())
        );
      }

      if (selectedGender.length > 0) {
        filtered = filtered.filter(
          (product) => product.gender && selectedGender.map((gender) => gender.toLowerCase()).includes(product.gender.toLowerCase())
        );
      }

      // If no products match after filtering, return all products
      setFilteredProducts(filtered.length > 0 ? filtered : allProducts);
      setCurrentPage(1); // Reset to the first page when filters change
    };

    filterProducts();
  }, [selectedCategory, selectedVendor, selectedFrame, selectedGender, allProducts, category]);

  const addToCart = (item) => {
    // Get existing cart items from local storage
    const existingCartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the item already exists in the cart
    const itemIndex = existingCartItems.findIndex(cartItem => cartItem.id === item.id);

    if (itemIndex !== -1) {
      // If the item exists, ensure quantity is a number and increase it
      existingCartItems[itemIndex].quantity = Number(existingCartItems[itemIndex].quantity) || 1;
      existingCartItems[itemIndex].quantity += 1;
    } else {
      // If the item doesn't exist, add it with an initial quantity of 1
      item.quantity = 1;
      existingCartItems.push(item);
    }

    // Update local storage with the modified cart
    localStorage.setItem('cart', JSON.stringify(existingCartItems));

    // Get the count of unique items in the cart
    const uniqueItemCount = existingCartItems.length;

    alert(`${item.product_title} added to cart successfully!`);

    // Update product count in the global state
    getProductCount(uniqueItemCount);
  };

  const handleFrameChange = (frame) => {
    setSelectedFrame((prev) =>
      prev.includes(frame) ? prev.filter((f) => f !== frame) : [...prev, frame]
    );
  };

  const handleGenderChange = (gender) => {
    setSelectedGender((prev) =>
      prev.includes(gender) ? prev.filter((g) => g !== gender) : [...prev, gender]
    );
  };

  const resetFilters = () => {
    setSelectedCategory('Both');
    setSelectedVendor('All');
    setSelectedFrame([]);
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

  return (
    <>
      <Header />
      <div className="product-page">
        <div className="banner" />

        <div className="content-wrapper">
          {/* Filter Container */}
          <div className="filter-container">
            <h1 className="filters-title">FILTERS</h1>
            <div className="filter-buttons">
              <button className="apply-btn">Apply</button>
              <button className="reset-btn" onClick={resetFilters}>Reset</button>
            </div>

            <div className="filter-group">
              <h3>PRODUCT CATEGORY</h3>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="filter-select"
              >
                {productCategories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <h3>Vendor</h3>
              {vendors.map((vendor) => (
                <label key={vendor}>
                  <input
                    type="checkbox"
                    value={vendor}
                    onChange={() => setSelectedVendor(vendor)}
                    checked={selectedVendor === vendor}
                  />
                  {vendor}
                </label>
              ))}
            </div>

            <div className="filter-group">
              <h3>Frame Shape</h3>
              {frameShapes.map((shape) => (
                <label key={shape}>
                  <input
                    type="checkbox"
                    value={shape}
                    onChange={() => handleFrameChange(shape)}
                    checked={selectedFrame.includes(shape)}
                  />
                  {shape}
                </label>
              ))}
            </div>

            <div className="filter-group">
              <h3>TARGET GENDER</h3>
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
          </div>

          {/* Product Grid Section */}
          <div className="product-grid">
  {
    currentProducts.map((product, index) => {
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
          <Link to={`/product-item/${product.product_id}`}>
            <img className="carousel-image2" src={`${SERVER_API_URL}/${product?.product_thumnail_img}`} alt={`ImageItem ${product.product_id + 1}`} />
          </Link>
          <div className="product-info">
            {product.count_in_stock === 0 && (
              <h4 className='out-of-stock'>Out of stock</h4>
            )}
            <h4 className="product-hilight">{product.product_title}</h4>
            <h4 className="product-title">{product.highlights}</h4>
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
                  <strong>Material:</strong> {product.material}
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

