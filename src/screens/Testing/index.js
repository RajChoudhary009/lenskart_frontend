


import React, { useState, useEffect, useContext } from 'react';
import { GlobleInfo } from '../../App';
import { useParams, Link } from 'react-router-dom';
import { LiaShuttleVanSolid } from "react-icons/lia";
import { FaUniregistry, FaDyalog } from "react-icons/fa";
import { TbWallet } from "react-icons/tb";
import axios from 'axios'; // Import Axios

import { ColorRing } from 'react-loader-spinner';
import lense from '../../Assets/images/lense.png'

import './index.css'
import Header from '../../components/Header';
// import Footer from '../Footer';

const lensOptions = [
    {
        id: 1,
        title: "Brown Tinted Power Lenses",
        image: lense,
        warranty: "1 Year Warranty",
        features: [
            "Crack & Scratch Resistant",
            "Applicable Only for Single Vision Power",
            "UV-400 Protection",
            "Lightweight Lenses",
            "1 Year Warranty",
        ],
        price: 1700,
        offer: "Lens Price: ₹1200 | Power Sun Offer (MRP: ₹1700)",
    },
    {
        id: 2,
        title: "Grey Tinted Power Lenses",
        image: lense,
        warranty: "1 Year Warranty",
        features: [
            "Crack & Scratch Resistant",
            "Applicable Only for Single Vision Power",
            "UV-400 Protection",
            "Lightweight Lenses",
            "1 Year Warranty",
        ],
        price: 1700,
        offer: "Lens Price: ₹1200 | Power Sun Offer (MRP: ₹1700)",
    },
    {
        id: 3,
        title: "Blue Light Block Lenses",
        image: lense,
        warranty: "1 Year Warranty",
        features: [
            "Anti-Glare Protection",
            "Lightweight Lenses",
            "UV-400 Protection",
            "1 Year Warranty",
        ],
        price: 2000,
        offer: "Lens Price: ₹1500 | Blue Shield Offer (MRP: ₹2000)",
    },
    {
        id: 4,
        title: "Photochromic Lenses",
        image: lense,
        warranty: "2 Years Warranty",
        features: [
            "Transitions to Sunglasses",
            "UV-400 Protection",
            "Lightweight Lenses",
            "2 Years Warranty",
        ],
        price: 2500,
        offer: "Lens Price: ₹2000 | Transition Offer (MRP: ₹2500)",
    },
    {
        id: 5,
        title: "Polarized Lenses",
        image: lense,
        warranty: "1 Year Warranty",
        features: [
            "Reduces Glare",
            "UV-400 Protection",
            "Lightweight Lenses",
            "1 Year Warranty",
        ],
        price: 2200,
        offer: "Lens Price: ₹1800 | Polarized Offer (MRP: ₹2200)",
    },
];

// LensPricingData.js
const lensPricingData = {
    singleVision: [
        { SPH: "Plano", CYL: "TO 6.00", BB: 2.00, PHOTO: 400.00, DRIVEX: 800.00 },
        { SPH: "6.25", CYL: "TO 10.00", BB: 2.00, PHOTO: 900.00, DRIVEX: 1050.00 },
        { SPH: "Plano", CYL: "TO 10.00", BB: -4.00, PHOTO: 900.00, DRIVEX: 1050.00 }
    ],
    bifocal: [
        { SPH: "3.00", CYL: "Up to", ADD: 3.00, ARC: 800.00, BB: 800.00, PHOTO: 1200.00, DRIVEX: 2500.00 }
    ],
    progressiv: [
        { SPH: "3.00", CYL: "Up to", ADD: 3.00, ARC: 1550.00, BB: 1800.00, PHOTO: 2000.00, DRIVEX: 2800.00 }
    ]
};


const ProductDetails = () => {
    const { getProductCount } = useContext(GlobleInfo)

    const [item, setItem] = useState({});
    const [reviewData, setReviewData] = useState({})
    const [rattingData, setRattingData] = useState({})
    // const [pincode, setPinCode] = useState("")
    const [postalInfo, setPostalInfo] = useState("")
    const [loading, setLoading] = useState(true);
    const [activeClass, setActiveClass] = useState(false);
    const { product_id } = useParams();
    const [selectedImage, setSelectedImage] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false); // State for modal
    console.log(reviewData)

    const handleImageClick = (imageSrc) => {
        setSelectedImage(imageSrc);
    };

    // const handlePincode = async () => {
    //     try {
    //         const resPin = await fetch(`https://api.postalpincode.in/pincode/${pincode}`);
    //         const data = await resPin.json();

    //         // Check if data array is not empty before accessing its elements
    //         if (data && data.length > 0) {
    //             setPostalInfo(data[0].PostOffice[0].District)
    //             // console.log(data[0].PostOffice[0].District)
    //         } else {
    //             console.error('No data available for the given pincode');
    //         }
    //     } catch (error) {
    //         console.error('Error fetching postal info:', error);
    //     }
    // };


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/product/productdetail/${product_id}`);
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


   
    




    // const addToWishlist = (item) => {
    //     // Get existing wishlist items from local storage
    //     const existingWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    //     const isItemInWishlist = existingWishlist.some((wishlistItem) => wishlistItem.product_id === item.result.product_id);

    //     if (isItemInWishlist) {
    //         // Remove the item from the wishlist
    //         const index = existingWishlist.findIndex((wishlistItem) => wishlistItem.product_id === item.result.product_id);
    //         if (index !== -1) {
    //             const updatedWishlist = [...existingWishlist];
    //             updatedWishlist.splice(index, 1);
    //             localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    //             setActiveClass(false);
    //             alert(`${item.result.product_categories} Removed from Wishlist`);
    //         }
    //     } else {
    //         // Add the item to the wishlist
    //         const updatedWishlist = [...existingWishlist, item.result];
    //         localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    //         setActiveClass(true);
    //         alert(`${item.result.product_categories} Added to Wishlist`);
    //     }
    // };

    const addToCart = (item) => {
        // Get existing cart items from local storage
        const existingCartItems = JSON.parse(localStorage.getItem('cart')) || [];

        // Add the new item to the cart
        const updatedCart = [...existingCartItems, item];
        localStorage.setItem('cart', JSON.stringify(updatedCart));

        // Get the new length of the cart and update the product count
        const newLength = updatedCart.length;
        alert(`${item.result.product_categories} added to cart successfully!`);

        // Update product count in the global state
        getProductCount(newLength); // Update with the new cart length
    };


    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };


    const changeText = activeClass ? 'Wishlisted' : 'Wish List';

    const generateStars = (numberOfStars) => {
        // Assuming you want to display a fixed number of stars (e.g., 5)
        const fullStars = '★'.repeat(numberOfStars);
        const emptyStars = '☆'.repeat(5 - numberOfStars); // Assuming a total of 5 stars

        return `${fullStars}${emptyStars}`;
    };

    return (
        <>
            <Header />
            <div className='product-details-container'>
                <div className='product-details-home-container'>
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
                        <>
                            <div className='product-left-container'>
                                <div className='image-cont'>
                                    <div className='image-cont-collum'>
                                        {item?.result && item.result.product_all_img && (
                                            <>
                                                <img
                                                    className='mini-image'
                                                    src={`http://localhost:8000/${item?.result?.product_all_img[0]}`}
                                                    alt={`ImageItem ${product_id + 1}`}
                                                    onClick={() => handleImageClick(`http://localhost:8000/${item?.result?.product_all_img[0]}`)}
                                                />

                                                <img
                                                    className='mini-image'
                                                    src={`http://localhost:8000/${item?.result?.product_all_img[1]}`}
                                                    alt={`ImageItem ${product_id + 1}`}
                                                    onClick={() => handleImageClick(`http://localhost:8000/${item?.result?.product_all_img[1]}`)}
                                                />

                                                <img
                                                    className='mini-image'
                                                    src={`http://localhost:8000/${item?.result?.product_all_img[2]}`}
                                                    alt={`ImageItem ${product_id + 1}`}
                                                    onClick={() => handleImageClick(`http://localhost:8000/${item?.result?.product_all_img[2]}`)}
                                                />
                                                <img
                                                    className='mini-image'
                                                    src={`http://localhost:8000/${item?.result?.product_all_img[3]}`}
                                                    alt={`ImageItem ${product_id + 1}`}
                                                    onClick={() => handleImageClick(`http://localhost:8000/${item?.result?.product_all_img[3]}`)}
                                                />
                                            </>
                                        )}

                                    </div>
                                    <img className='larg-image' src={selectedImage ? selectedImage : `http://localhost:8000/${item?.result?.product_thumnail_img}`} alt={`Large Image`} />

                                </div>
                                <div className='image-container-details'>
                                    <button className='tag-button'>Details</button>
                                    <button className='tag-button'>Retrieves</button>
                                    <button className='tag-button'>Releted</button>
                                </div>
                                <hr style={{ color: '#000', width: "100%" }} />

                                <p className='product-item-description' style={{ color: "#000", marginBottom: "0px", paddingBottom: "0px", marginTop: "30px" }}>Heighligth:</p>

                                <div className='image-container-details' style={{ marginTop: "0px", paddingTop: "0px" }}>
                                    <p className='product-item-description' style={{ color: "#757575", fontSize: "15px" }}>{item?.result?.highlights}</p>
                                </div>

                                <p className='product-item-description' style={{ color: "#000", marginBottom: "0px", paddingBottom: "0px", marginTop: "30px" }}>Description:</p>

                                <div className='image-container-details' style={{ marginTop: "0px", paddingTop: "0px" }}>
                                    <p className='product-item-description' style={{ color: "#757575", fontSize: "15px" }}>{item?.result?.product_description}</p>
                                </div>

                                <hr style={{ color: '#000', width: "100%" }} />

                                {/* specification */}
                                <p className='product-item-description' style={{ color: "#000", marginBottom: "10px", paddingBottom: "0px", marginTop: "10px" }}>
                                    Specification:
                                </p>

                                <div className='image-container-details display-flex' style={{ marginTop: "0px", paddingTop: "0px" }}>
                                    <span className='span-description'> Product benefits:</span> <span className='span-description'> {item?.result?.Specification?.benefits}</span>
                                </div>

                                <div className='image-container-details display-flex' style={{ marginTop: "0px", paddingTop: "0px" }}>
                                    <span className='span-description'> Product country:</span> <span className='span-description'> {item?.result?.Specification?.country}</span>
                                </div>
                                <div className='image-container-details display-flex' style={{ marginTop: "0px", paddingTop: "0px" }}>
                                    <span className='span-description'> Primary Concerns:</span> <span className='span-description'> {item?.result?.Specification?.primary_concerns}</span>
                                </div>
                                {/* end specification */}

                                <hr style={{ color: '#000', width: "100%" }} />
                                {/* review ui */}
                                <p className='product-item-description' style={{ color: "#000", marginBottom: "10px", paddingBottom: "0px", marginTop: "10px" }}>
                                    Review:
                                </p>


                                <hr style={{ color: '#000', width: "100%" }} />

                                {/* write a review */}
                                <Link to="#" className='product-item-description' style={{ TextDecoder: "none", color: "#60f", fontSize: "14px", marginBottom: "20px", paddingBottom: "0px", marginTop: "10px" }}>
                                    Read All 148 Reviewer:
                                </Link>
                                <p className='product-item-description' style={{ color: "#000", marginBottom: "10px", paddingBottom: "0px", marginTop: "10px" }}>
                                    Review this Product:
                                </p>
                                <Link to={`/review/${product_id}`} className='rewiev-btn'>Write a Review</Link>
                                {/* write a review */}

                            </div>

                            <div className='product-rigth-container'>
                                <div className='product-items'>
                                    <p className='product-item-description'>{item.result.product_description.slice(0, 80)}</p>
                                    <p className='product-item-description'>
                                        {rattingData?.totalNumberOfRaters ? (
                                            <span style={{ color: 'green', fontSize: '20px', paddingRight: "5px" }}>
                                                {generateStars(rattingData.totalNumberOfRaters)}
                                            </span>
                                        ) : (
                                            <span style={{ color: 'green', fontSize: '20px', paddingRight: "5px" }}>
                                                {generateStars(3)} {/* Display dummy rating (e.g., 3 stars) */}
                                            </span>
                                        )}
                                        {rattingData?.totalNumberOfRaters >= 1 ? rattingData.totalNumberOfRaters : 3} Ratings || {rattingData?.totalReviews >= 1 ? rattingData.totalReviews : 12} Review
                                    </p>
                                    <div className='price-design'>
                                        <p className='price-item-desc' style={{ marginRight: "10px" }}>Rs.{item.result.product_price - (item.result.product_price * item.result.discount / 100)}</p>
                                        <p className='price-underline' style={{ marginRight: "10px" }}>{item.result.product_price}</p>
                                        <p className='price-green'>Save {item.result.discount}%off</p>
                                    </div>
                                    <div className='best-seller-container'>
                                        <p className='item-color-descrp'><span className='pink-background'>#{item.result.offer}Best Seller in </span>{item.result.highlights}</p>
                                    </div>
                                    <div className='buttom-container'>
                                        {/* <button className='addtocart bluebackground' onClick={() => addToCart(item)}>Add To Cart</button>
                                        <button className='addtocart blackbackground' onClick={() => addToWishlist(item)}>❤️ {changeText}</button> */}
                                        <button className='addtocart bluebackground'>Buy Now</button>
                                        <Link
                                            to={`/lense/power/${product_id}`}
                                            className='addtocart powerBackground'
                                        >
                                            Add Power
                                        </Link>
                                    </div>

                                    {/* <div className="pincode-container" style={{ marginTop: "20px", width: "90%" }}>
                                        <div className="input-con">
                                            <h1><LiaShuttleVanSolid color="#cc5aae" /></h1>
                                            <input value={pincode} onChange={(e) => setPinCode(e.target.value)} className="input-item" type="text" placeholder="Enter Pincode" style={{ width: "220px" }} />
                                        </div>
                                        <div className="input-con">
                                            <button onClick={() => handlePincode(pincode)} className="remove-button" style={{ fontSize: "15px", fontWeight: "600", color: "#6600FF" }}>chenge </button>
                                        </div>
                                    </div> */}

                                    {postalInfo !== "" && (
                                        <div className="pincode-container" style={{ marginTop: "20px", width: "90%" }}>{postalInfo} </div>
                                    )}

                                    <div className="garenty-container" style={{ marginTop: "20px" }}>
                                        <div className='pincode-dis-con'>
                                            <h1><FaUniregistry color="#cc5aae" size={30} style={{ marginBottom: "0", paddingBottom: "0" }} /></h1>
                                            <p className='pincode-dis'>100% Genuine Products</p>
                                        </div>
                                        <div className='pincode-dis-con'>
                                            <h1><FaDyalog color="#cc5aae" size={30} style={{ marginBottom: "0", paddingBottom: "0" }} /></h1>
                                            <p className='pincode-dis'> Return in 15 Days</p>
                                        </div>
                                        <div className='pincode-dis-con'>
                                            <h1><LiaShuttleVanSolid color="#cc5aae" size={30} style={{ marginBottom: "0", paddingBottom: "0" }} /></h1>
                                            <p className='pincode-dis'> Free Delivery above ₹499 </p>
                                        </div>
                                        <div className='pincode-dis-con'>
                                            <h1><TbWallet color="#cc5aae" size={30} style={{ marginBottom: "0", paddingBottom: "0" }} /></h1>
                                            <p className='pincode-dis'> Free COD above ₹500 </p>
                                        </div>
                                    </div>

                                    <img style={{ width: "95%", height: "100px", marginTop: "20px" }} src='https://media6.ppl-media.com/mediafiles/ecomm/misc/1680602964_1280x272-web.jpg' alt='mobile-notification' />

                                </div>
                            </div>

                            {/* Modal Component */}
                            {isModalOpen && (
                                <div className="modal-overlay" onClick={toggleModal}>
                                    <div className="modal-content scrollable-modal" onClick={(e) => e.stopPropagation()}>
                                        <h2>Choose Lens Package</h2>
                                        <div className="lens-options-container">
                                            {lensOptions.map((option) => (
                                                <div className="lens-option" key={option.id}>
                                                    <img src={option.image} alt={option.title} className="lens-image" />
                                                    <div className="lens-info">
                                                        <h3>{option.title}</h3>
                                                        {option.features.map((feature, featureIndex) => (
                                                            <p key={featureIndex}>{feature}</p>
                                                        ))}
                                                        <p className="price">₹{option.price}</p>
                                                        <p className="offer">{option.offer}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="subtotal">Subtotal (Frame): ₹{item.result?.product_price - (item.result?.product_price * item.result?.discount / 100)}</div>
                                        <button className="close-btn" onClick={toggleModal}>Close</button>
                                    </div>
                                </div>
                            )}

                        </>
                    )}
                </div>

            </div>
            {/* <Footer /> */}
        </>
    )
}

export default ProductDetails