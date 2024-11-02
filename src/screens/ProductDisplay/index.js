import React, { useEffect, useState, useContext } from 'react';
import { GlobleInfo } from '../../App';
import { Link } from 'react-router-dom';
import axios from 'axios';
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
  const { getProductCount } = useContext(GlobleInfo);
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Both');
  const [selectedVendor, setSelectedVendor] = useState('All');
  const [selectedFrame, setSelectedFrame] = useState([]);
  const [selectedGender, setSelectedGender] = useState([]);

  // Fetch products from API on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/product');
        setAllProducts(response.data.result);
        setFilteredProducts(response.data.result);
        console.log("first", response.data.result)
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchData();
  }, []);

  // Filter products whenever any filter criteria changes
  useEffect(() => {
    const filterProducts = () => {
      let filtered = allProducts;
  
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
  
      setFilteredProducts(filtered);
    };
  
    filterProducts();
  }, [selectedCategory, selectedVendor, selectedFrame, selectedGender, allProducts]);
  
  

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
            {filteredProducts.map((product, index) => (
              <div key={index} className="product-card">
                <Link to={`/product-item/${product.product_id}`}>
                  <img className='carousel-image2' src={`http://localhost:8000/${product?.product_thumnail_img}`} alt={`ImageItem ${product.product_id + 1}`} />
                </Link>
                <div className="product-info">
                  <h4 className="product-hilight">{product.product_title}</h4>
                  <h4 className="product-title">{product.highlights}</h4>
                  <p className="product-price">₹{product.product_price}/-</p>
                  <div className="button-add-to-cart">
                    <div className="product-attributes">
                      <p className="product-attribute">
                        <strong>Color:</strong>
                        <span className="product-color" style={{ backgroundColor: product.color }}></span> {product.color}
                      </p>
                      <p className="product-attribute">
                        <strong>Material:</strong> {product.material}
                      </p>
                    </div>
                    <button className="cart-btn"><img src={tdesign} alt="tdesign" /></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Section */}
        <div className='pagination-main-container'>
          <div className="pagination">
            <button className="prev-btn">Prev</button>
            <button className="next-btn">Next</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDisplay;


// import React, { useEffect, useState, useContext } from 'react';
// import { GlobleInfo } from '../../App';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import Header from '../../components/Header';
// import './index.css';

// const ProductDisplay = () => {
//     const {getProductCount} = useContext(GlobleInfo)

//     const [updatedProducts, setUpdatedProducts] = useState([]);
//     const [filteredProducts, setFilteredProducts] = useState([]);
//     const [selectedCategory, setSelectedCategory] = useState('Both');
//     const [selectedVendor, setSelectedVendor] = useState('All');

//     // Fetch products from API
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response2 = await axios.get('http://localhost:8000/product');
//                 // console.log("response2", response2)
//                 setUpdatedProducts(response2.data.result);
//                 setFilteredProducts(response2.data.result); // Initialize filteredProducts with all products
//             } catch (error) {
//                 console.error('Error fetching products:', error);
//             }
//         };
//         fetchData();
//     }, []);

//     const addToCart = (item) => {
//         // Get existing cart items from local storage
//         const existingCartItems = JSON.parse(localStorage.getItem('cart')) || [];
    
//         // Add the new item to the cart
//         const updatedCart = [...existingCartItems, item];
//         localStorage.setItem('cart', JSON.stringify(updatedCart));
    
//         // Get the new length of the cart and update the product count
//         const newLength = updatedCart.length;
//         alert(`${item.product_title} added to cart successfully!`);
        
//         // Update product count in the global state
//         getProductCount(newLength); // Update with the new cart length
//     };
    
   
//     // Handle filtering based on category and vendor
//     const filterProducts = () => {
//         let filtered = updatedProducts;

//         if (selectedCategory !== 'Both') {
//             filtered = filtered.filter(product =>
//                 product.product_categories && product.product_categories.toLowerCase().includes(selectedCategory.toLowerCase())
//             );
//         }
//         if (selectedVendor !== 'All') {
//             filtered = filtered.filter(product =>
//                 product.brand === selectedVendor
//             );
//         }
//         setFilteredProducts(filtered);
//     };

//     // Apply filters when selection changes
//     useEffect(() => {
//         filterProducts();
//     }, [selectedCategory, selectedVendor, updatedProducts]);

//     return (
//         <>
//             <Header />
//             <div className="product-display-bg-container">
//                 <div className="product-display-home-container">
//                     <img
//                         className="banner-top-image"
//                         src="https://images.unsplash.com/photo-1677761294200-64f1cb4fc69e?q=80&w=2063&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                         alt="top-banner"
//                     />
//                     <h1 className='all-product-text'>All Products</h1>
//                     <hr className='hr-line' />
//                     <div className='product-main-container'>
//                         <div className="filter-container">
//                             <h1 className="filters-title">Filters</h1>
//                             <div className="filter-buttons">
//                                 <button className="apply-btn">Apply</button>
//                                 <button className="reset-btn" onClick={() => {
//                                     setSelectedCategory('Both');
//                                     setSelectedVendor('All');
//                                 }}>Reset</button>
//                             </div>

//                             <div className="filter-group">
//                                 <h3>Product Category</h3>
//                                 <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="filter-select">
//                                     <option value="Both">Both</option>
//                                     <option value="Sunglasses">Sunglasses</option>
//                                     <option value="EyeGlasses">EyeGlasses</option>
//                                 </select>
//                             </div>

//                             <div className="filter-group">
//                                 <h3>Vendor</h3>
//                                 <label>
//                                     <input
//                                         type="checkbox"
//                                         value="All"
//                                         onChange={() => setSelectedVendor('All')}
//                                         checked={selectedVendor === 'All'}
//                                     /> All
//                                 </label>
//                                 <label>
//                                     <input
//                                         type="checkbox"
//                                         value="Ben Hunt"
//                                         onChange={() => setSelectedVendor('Ben Hunt')}
//                                         checked={selectedVendor === 'Ben Hunt'}
//                                     /> Ben Hunt
//                                 </label>
//                                 <label>
//                                     <input
//                                         type="checkbox"
//                                         value="DCEYEWR"
//                                         onChange={() => setSelectedVendor('DCEYEWR')}
//                                     /> DCEYEWR
//                                 </label>
//                                 <label>
//                                     <input
//                                         type="checkbox"
//                                         value="Wolf Eye"
//                                         onChange={() => setSelectedVendor('Wolf Eye')}
//                                     /> Wolf Eye
//                                 </label>
//                             </div>

//                             <div className="filter-group">
//                                 <h3>Frame Shape</h3>
//                                 <label>
//                                     <input type="checkbox" value="Aviator" /> Aviator
//                                 </label>
//                                 <label>
//                                     <input type="checkbox" value="Cats Eye" /> Cats Eye
//                                 </label>
//                                 <label>
//                                     <input type="checkbox" value="Rectangle" /> Rectangle
//                                 </label>
//                             </div>
//                         </div>

//                         <div className='products-container'>
//                             {filteredProducts.map(product => (
//                                 <div key={product.id} className='product-card'>
//                                     <Link to={`/product-item/${product.product_id}`}>
//                                         <img className='carousel-image2' src={`http://localhost:8000/${product?.product_thumnail_img}`} alt={`ImageItem ${product.product_id + 1}`} />
//                                     </Link>
//                                     <div className="product-info">
//                                         <h4 className="product-brand">{product.product_title}</h4>
//                                         <p className="product-name">{product.highlights}</p>
//                                         <p className="product-price">{product.product_price}</p>
//                                         <div className="product-attributes">
//                                             <p className="product-attribute">
//                                                 <strong>Color:</strong>
//                                                 <span className="product-color" style={{ backgroundColor: product.color }}></span> {product.color}
//                                             </p>
//                                             <p className="product-attribute">
//                                                 <strong>Material:</strong> {product.material}
//                                             </p>
//                                         </div>
//                                     </div>
//                                     <button className="cart-btn" onClick={() => addToCart(product)}>Add to Cart</button>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default ProductDisplay;
