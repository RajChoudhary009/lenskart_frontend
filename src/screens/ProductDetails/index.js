import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SERVER_API_URL } from '../../server/server';
import axios from 'axios'; // Import Axios
import { GlobleInfo } from '../../App';
import tdesign from '../../Assets/images/tdesign_cart.png';
import { ColorRing } from 'react-loader-spinner';
import "./index.css"; // Import the corresponding CSS file
import Header from "../../components/Header";

const reviews = [
    { id: 1, user: "Nasrin Ahmed", comment: "Very perfect and beautiful.", date: "3 days ago", rating: 5 },
    { id: 2, user: "Nasrin Ahmed", comment: "Very perfect and beautiful.", date: "3 days ago", rating: 5 },
    { id: 3, user: "Nasrin Ahmed", comment: "Very perfect and beautiful.", date: "3 days ago", rating: 5 },
    { id: 4, user: "Nasrin Ahmed", comment: "Very perfect and beautiful.", date: "3 days ago", rating: 5 }
];

const suggestedFrames = [
    { id: 1, name: "Black Full Rim Rectangle", price: 2750, color: "Black", material: "Plastic", rating: 5 },
    { id: 2, name: "Black Full Rim Rectangle", price: 2750, color: "Black", material: "Plastic", rating: 5 },
    { id: 3, name: "Black Full Rim Rectangle", price: 2750, color: "Black", material: "Plastic", rating: 5 },
    { id: 4, name: "Black Full Rim Rectangle", price: 2750, color: "Black", material: "Plastic", rating: 5 }
];


const lensData = {
    Plano: [
        { type: "Blue Block", price: 800 },
        { type: "Photo CR", price: 1800 },
        { type: "Tinteble", price: 1200 }
    ],
    SingleVision: [
        { type: "Blue Block", price: 800 },
        { type: "Photo CR", price: 1800 },
        { type: "Tinteble", price: 1200 }
    ],
    Bifocal: [
        { type: "Arc", price: 1500 },
        { type: "Blue Block", price: 1800 },
        { type: "Photo CR", price: 1800 },
        { type: "Drivex", price: 3200 }
    ],
    Progressive: [
        { type: "Arc", price: 2500 },
        { type: "Blue Block", price: 2800 },
        { type: "Photo CR", price: 3600 },
        { type: "Drivex", price: 4000 }
    ]
}


const ProductDetails = () => {
    const { product_id } = useParams();
    const { getProductCount } = useContext(GlobleInfo)
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState(null);
    const [showPowerPopup, setShowPowerPopup] = useState(false);
    const [showPopupContainer, setShowPopupContainer] = useState(true);
    const [selectLansType, setSelectLansType] = useState('')
    // console.log(reviewData)

    useEffect(() => {
        const fetchData1 = async () => {

            axios.get('https://driver-vehicle-licensing.api.gov.uk/endpoint', {
                headers: {
                    'x-api-key': 'b1kcfWfJVF7rzqzPmOu1o1poab0DhcXM8uyI5bRi',
                    'Content-Type': 'application/json',
                },
                body: {
                    "registrationNumber": "TE57VRN"
                }
            })
                .then(response => {
                    console.log("hhhhh", response.data);
                })
                .catch(error => {
                    console.error(error);
                });
            // console.log('response', response)

        };

        fetchData1();
    }, []);

    const handleImageClick = (imageSrc) => {
        setSelectedImage(imageSrc);
    };

    const handlePowerClick = () => {
        setShowPowerPopup(!showPowerPopup);
    };

    const handleLanseClick = (type) => {
        setSelectLansType(type);
        setShowPopupContainer(false)
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${SERVER_API_URL}/product/productdetail/${product_id}`);
                console.log("response new", response.data)
                setItem(response.data);
                setLoading(false);
                console.log('response', response)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [product_id]);

    return (
        <>
            <Header />
            {loading ? (
                <ColorRing
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    wrapperClass="blocks-wrapper"
                    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                />
            ) : (
                <div className="product-details-container">
                    {/* Breadcrumb */}
                    <div className="main-content">
                        {/* Main Product Image Section */}
                        <div className="product-image-section">
                            <div className="main-image">
                                <img className='larg-image' src={selectedImage ? selectedImage : `${SERVER_API_URL}/${item?.result?.product_thumnail_img}`} alt={`Large Image`} />
                            </div>
                            <div className="thumbnail-row">
                                {item?.result && item.result.product_all_img && (
                                    <>
                                        <div className="thumbnail">
                                            <img
                                                className='mini-image'
                                                src={`http://localhost:8000/${item?.result?.product_all_img[0]}`}
                                                alt={`ImageItem ${product_id + 1}`}
                                                onClick={() => handleImageClick(`${SERVER_API_URL}/${item?.result?.product_all_img[0]}`)}
                                            />
                                        </div>

                                        <div className="thumbnail">
                                            <img
                                                className='mini-image'
                                                src={`${SERVER_API_URL}/${item?.result?.product_all_img[1]}`}
                                                alt={`ImageItem ${product_id + 1}`}
                                                onClick={() => handleImageClick(`${SERVER_API_URL}/${item?.result?.product_all_img[1]}`)}
                                            />
                                        </div>

                                        <div className="thumbnail">
                                            <img
                                                className='mini-image'
                                                src={`${SERVER_API_URL}/${item?.result?.product_all_img[2]}`}
                                                alt={`ImageItem ${product_id + 1}`}
                                                onClick={() => handleImageClick(`${SERVER_API_URL}/${item?.result?.product_all_img[2]}`)}
                                            />
                                        </div>

                                        <div className="thumbnail">
                                            <img
                                                className='mini-image'
                                                src={`${SERVER_API_URL}/${item?.result?.product_all_img[3]}`}
                                                alt={`ImageItem ${product_id + 1}`}
                                                onClick={() => handleImageClick(`http://localhost:8000/${item?.result?.product_all_img[3]}`)}
                                            />
                                        </div>

                                    </>
                                )}

                            </div>
                        </div>

                        {/* Product Info Section */}
                        <div className="product-info-section">
                            <h1 className="product-title">{item?.result?.highlights} Stylish Sunglasses</h1>
                            <p className="product-price">₹2750.00</p>
                            <button className="try-on-btn">TRY ON FACE</button>

                            <div className="cart-controls">
                                <button className="quantity-btn">-</button>
                                <span className="quantity">1</span>
                                <button className="quantity-btn">+</button>
                                <button className="add-to-cart-btn"><img src={tdesign} alt="tdesign" />ADD TO CART</button>
                            </div>
                            <div className="cart-controls">
                                <button className="buy-now-btn">BUY NOW</button>
                                <button className="buy-now-btn" onClick={handlePowerClick}>ADD POWER</button>
                            </div>


                            <div className="technical-details">
                                <h3>Technical Details</h3>
                                <ul>
                                    <li>Product ID: DCM413</li>
                                    <li>Frame Dimensions: 54 mm / 16 mm / 145 mm</li>
                                    <li>Frame Color: Grey</li>
                                    <li>Lens Color: Black</li>
                                    <li>Product Shape: Rectangle</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Customer Reviews Section */}
                    <div className="customer-reviews">
                        <h2>Customer Reviews & Ratings</h2>
                        <p>4.0 <span>★</span> 23,045 reviews</p>
                        <div className="reviews-row">
                            {reviews.map((review) => (
                                <div key={review.id} className="review-card">
                                    <p>{review.comment}</p>
                                    <p style={{ color: "#FCBF02" }}>{'★'.repeat(review.rating)}</p>
                                    <p>{review.user} - {review.date}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="suggested-frames">
                        <h2>Suggested Frames</h2>
                        <div className="frames-row">
                            {suggestedFrames.map((frame) => (
                                <div key={frame.id} className="frame-card">
                                    <div className="frame-image"></div>
                                    <p style={{ color: "#B2EB15" }}>{'★'.repeat(frame.rating)}</p>
                                    <h3 style={{ color: "#0296E5", marginBottom: "10px" }}>Amezing glasess</h3>
                                    <h3>{frame.name}</h3>
                                    <p className="frame-price">₹{frame.price}</p>
                                    <div className='frame-price-description'>
                                        <div>
                                            <p>Color: {frame.color}</p>
                                            <p>Material: {frame.material}</p>
                                        </div>
                                        <button className="cart-btn"><img src={tdesign} alt="tdesign" /></button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Power Popup Section */}
                    {showPowerPopup && (
                        <div className="power-popup">
                            <div className="popup-header">
                                <h3>Select Lens Type</h3>
                                <button className="close-btn" onClick={handlePowerClick}>✕</button>
                            </div>
                            {showPopupContainer && (
                                <div className="popup-content">
                                    <div className="lens-option" onClick={() => handleLanseClick('Plano')}>
                                        <div className="icon">👓</div>
                                        <div className="lens-info">
                                            <h4>Plano</h4>
                                            <p>Block 98% of harmful rays (Anti-glare and blue-cut options)</p>
                                        </div>
                                        <div className="arrow">➔</div>
                                    </div>
                                    <div className="lens-option" onClick={() => handleLanseClick('SingleVision')}>
                                        <div className="icon">👓</div>
                                        <div className="lens-info">
                                            <h4>Single Vision</h4>
                                            <p>For distance or near vision (Thin, anti-glare, blue-cut options)</p>
                                        </div>
                                        <div className="arrow">➔</div>
                                    </div>
                                    <div className="lens-option" onClick={() => handleLanseClick('Bifocal')}>
                                        <div className="icon">👓</div>
                                        <div className="lens-info">
                                            <h4>Bifocal</h4>
                                            <p>Bifocal and Progressives (For two powers in the same lenses)</p>
                                        </div>
                                        <div className="arrow">➔</div>
                                    </div>

                                    <div className="lens-option" onClick={() => handleLanseClick('Progressive')}>
                                        <div className="icon">👓</div>
                                        <div className="lens-info">
                                            <h4>Progressive</h4>
                                            <p>For Distance or Near Vision (Green, Grey, Brown)</p>
                                        </div>
                                        <div className="arrow">➔</div>
                                    </div>
                                    <div className="lens-option">
                                        <div className="icon">👓</div>
                                        <div className="lens-info">
                                            <h4>Frame Only</h4>
                                            <p>Buy Only Frame</p>
                                        </div>
                                        <div className="arrow">➔</div>
                                    </div>

                                    <div className="footer-info">
                                        <p>Not sure what to select? Call 9999899998</p>
                                    </div>
                                    <div className="price-info-popup">
                                        <p>Sub Total</p>
                                        <p>₹2000/-</p>
                                    </div>
                                </div>
                            )}
                            {!showPopupContainer && (
                                <div className="popup-content">
                                    {lensData[selectLansType]?.map((lensOption, index) => (
                                        <div key={index} className="lens-option">
                                            <div className="icon">👓</div>
                                            <div className="lens-info">
                                                <h4>{lensOption.type}</h4>
                                                <p>{lensOption.price}</p>
                                            </div>
                                            <div className="arrow">➔</div>
                                        </div>
                                    ))}
                                    <div className="price-info-popup">
                                        <p>Sub Total</p>
                                        <p>₹2000/-</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            )}

        </>

    );
};

export default ProductDetails;