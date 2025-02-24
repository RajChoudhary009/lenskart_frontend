// // import React from 'react';
// // import { Link } from 'react-router-dom';  // Assuming you're using React Router for navigation
// // import footer_icon from '../../Assets/images/footer_icon.png'
// // import './index.css';

// // const Footer = () => {

// //     return (
// //         <footer className="footer">
// //             <div className="footer-container">
// //                 <div className="footer-logo">
// //                     {/* Dummy logo image */}
// //                     <img src={footer_icon} alt="footer_icon" className="logo" />
// //                     <p>Get amazing sunglasses & eyeglasses that make you more happy.</p>
// //                 </div>
// //                 <div className="footer-links">
// //                     <div className="quick-links">
// //                         <h3>QUICK LINKS</h3>
// //                         <ul className='link-container'>
// //                             <li><Link to="/about">About</Link></li>
// //                             <li><Link to="/contact">Contact</Link></li>
// //                             <li><Link to="/terms-of-service">Terms of Service</Link></li>
// //                             <li><Link to="/privacy-policy">Privacy Policy</Link></li>
// //                             <li><Link to="/cancellation-policy">Cancellation Policy</Link></li>
// //                             <li><Link to="/refund-policy">Refund Policy</Link></li>
// //                         </ul>
// //                     </div>
// //                     <div className="useful-links">
// //                         <h3>USEFUL LINKS</h3>
// //                         <ul className='link-container'>
// //                             <li><Link to="/shop-by-shape">Shop By Shape</Link></li>
// //                             <li><Link to="/for-kids">For Kids</Link></li>
// //                             <li><Link to="/for-women">For Women</Link></li>
// //                             <li><Link to="/for-men">For Men</Link></li>
// //                             <li><Link to="/all-collection">All Collection</Link></li>
// //                         </ul>
// //                     </div>
// //                 </div>
// //                 <div className="contact-info">
// //                     <h3>CONTACT US</h3>
// //                     <ul className='link-container'>
// //                         <li><span role="img" aria-label="phone">📞</span> +91 9824757577</li>
// //                         <li><span role="img" aria-label="email">📧</span> contact@dceyewr.com</li>
// //                         <li><span role="img" aria-label="location">📍</span> K.T. Shah Road, Mandvi - Kachchh.</li>
// //                     </ul>
// //                 </div>
// //             </div>
// //             <div className="footer-bottom">
// //                 <p>© Copyright 2024, DCEYEWR - All Rights Reserved</p>
// //                 <div className="social-icons">
// //                     <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
// //                         <img src="https://via.placeholder.com/24?text=F" alt="Facebook" />
// //                     </a>
// //                     <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
// //                         <img src="https://via.placeholder.com/24?text=I" alt="Instagram" />
// //                     </a>
// //                     <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
// //                         <img src="https://via.placeholder.com/24?text=L" alt="LinkedIn" />
// //                     </a>
// //                 </div>
// //             </div>
// //         </footer>
// //     );
// // };

// // export default Footer;

// import React from "react";
// import { FloatingWhatsApp } from 'react-floating-whatsapp'
// import "./index.css"; // Import the CSS file

// export default function Footer() {
//     return (
//         <footer className="footer">
//             {/* Top Section */}
//             <div className="footer-top">
//                 <h2 className="footer-title">Buy The Best Eyewear From Eye zones</h2>
//                 <p className="footer-description">
//                     Eye zones is the leading e-commerce portal for eyewear in India. It has revolutionized the eyewear industry with its
//                     Omni-Channel approach, from offline stores to innovative technology for online shopping.
//                 </p>
//                 <p className="footer-description">
//                     A one-stop solution for purchasing eyewear and accessories, Eye zones delivers them at your doorstep with multiple
//                     payment options. <span className="footer-link">Sunglasses</span> as well as <span className="footer-link">Eyeglasses</span>
//                     are available for men and women in various styles. If you want to try <span className="footer-link">Contact Lenses</span>,
//                     pick the best from our wide range.
//                 </p>
//             </div>

//             {/* Footer Links Section */}
//             <div className="footer-links-main">
//                 <div className="footer-links">
//                     <div className="footer-column">
//                         <h3>Services</h3>
//                         <ul>
//                             <li>Store Locator</li>
//                             <li>Buying Guide</li>
//                             <li>Frame Size</li>
//                         </ul>
//                     </div>
//                     <div className="footer-column">
//                         <h3>About Us</h3>
//                         <ul>
//                             <li>We Are Hiring</li>
//                             <li>Refer And Earn</li>
//                             <li>About Us</li>
//                             <li>Eye zones Coupons</li>
//                         </ul>
//                     </div>
//                     <div className="footer-column">
//                         <h3>Help</h3>
//                         <ul>
//                             <li>FAQ's</li>
//                         </ul>
//                     </div>
//                 </div>

//                 {/* App Download & Social Icons */}
//                 <div className="footer-bottom">
//                     <div className="footer-apps">
//                         <img
//                             src="https://static.lenskart.com/media/desktop/img/play-store.svg"
//                             alt="Google Play"
//                         />
//                         <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" />
//                     </div>
//                     <p className="footer-text">Download Eye zones App to buy Eyeglasses, Sunglasses, and Contact Lenses</p>
//                 </div>



//             </div>

//             {/* Bottom Section */}
//             <div className="footer-bottom-section">
//                 <div className="footer-bottom-links">
//                     <span>T & C</span> | <span>Privacy</span> | <span>Disclaimer</span>
//                 </div>
//                 <div className="footer-text">Version 1.0.0 || Follow Us</div>
//                 <div className="footer-social">
//                     <img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" alt="Facebook" />
//                     <img src="https://cdn-icons-png.flaticon.com/512/124/124021.png" alt="Twitter" />
//                     <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" />
//                     <img src="https://cdn-icons-png.flaticon.com/512/1384/1384096.png" alt="Chat" />
//                     <h1 style={{ color: "#2f78c4" }}>
//                     <FloatingWhatsApp
//                         phoneNumber="+91 76677 37337"
//                         accountName="Softgenics India Pvt. Ltd."
//                         allowClickAway
//                         notification
//                         notificationDelay={60000} // 1 minute
//                     />
//                 </h1>
//                 </div>
//             </div>
//         </footer>
//     );
// }
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaTiktok } from "react-icons/fa";
import { IoPlay } from "react-icons/io5";
import { MdEmail, MdCall, MdTextsms, MdChat } from "react-icons/md";
import "./index.css"; // Import the CSS file


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="subscribe-section">
                    <h2>SIGNUP FOR OFFERS & TIPS</h2>
                    <div className="subscribe-box" style={{ marginLeft: "30px", marginRight: "140px" }}>
                        <input type="email" placeholder="Enter your email address" />
                        <button>Subscribe</button>
                    </div>
                    {/* Social Media Icons */}
                    <div className="social-media">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter />
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                            <FaYoutube />
                        </a>
                        {/* <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                            <FaTiktok />
                        </a> */}
                    </div>
                </div>

                <div className="footer-grid">
                    <div className="footer-column">
                        <h3>SHOP BY CATEGORIES</h3>
                        <ul>
                            <li><IoPlay color="#00c2cb" size={13}/>All Glasses</li>
                            <li><IoPlay color="#00c2cb" size={13}/>All Women’s Eyeglasses | Sunglasses</li>
                            <li><IoPlay color="#00c2cb" size={13}/>All Men's Eyeglasses | Sunglasses</li>
                            <li><IoPlay color="#00c2cb" size={13}/>Kids Glasses (Toddler | Child | Pre-Teen)</li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3>SHOP BY STYLES</h3>
                        <ul>
                            <li><IoPlay color="#00c2cb" size={13}/>Aviator Glasses</li>
                            <li><IoPlay color="#00c2cb" size={13}/>Cat-Eye Glasses</li>
                            <li><IoPlay color="#00c2cb" size={13}/>Oval Glasses</li>
                            <li><IoPlay color="#00c2cb" size={13}/>Rectangle Glasses</li>
                            <li><IoPlay color="#00c2cb" size={13}/>Round Glasses</li>
                            <li><IoPlay color="#00c2cb" size={13}/>Square Glasses</li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3>SHOP BY FRAME COLORS</h3>
                        <ul>
                            <li><IoPlay color="#00c2cb" size={13}/>Blue </li>
                            <li><IoPlay color="#00c2cb" size={13}/>Black </li>
                            <li><IoPlay color="#00c2cb" size={13}/>Brown </li>
                            <li><IoPlay color="#00c2cb" size={13}/>Green </li>
                            <li><IoPlay color="#00c2cb" size={13}/>Gray </li>
                            <li><IoPlay color="#00c2cb" size={13}/>Red </li>
                            <li><IoPlay color="#00c2cb" size={13}/>Orange </li>
                            <li><IoPlay color="#00c2cb" size={13}/>Pink </li>
                            <li><IoPlay color="#00c2cb" size={13}/>Gold </li>
                            <li><IoPlay color="#00c2cb" size={13}/>White </li>
                            <li><IoPlay color="#00c2cb" size={13}/>Clear/Transparent </li>
                            <li><IoPlay color="#00c2cb" size={13}/>Purple </li>
                            {/* <li><IoPlay color="#00c2cb" size={13}/>Yellow </li> */}
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3>SHOP BY LENS COLORS</h3>
                        <ul>
                            <li><IoPlay color="#00c2cb" size={13}/>Blue </li>
                            <li><IoPlay color="#00c2cb" size={13}/>Black </li>
                            {/* <li><IoPlay color="#00c2cb" size={13}/>Clear</li> */}
                            <li><IoPlay color="#00c2cb" size={13}/>Violet </li>
                            <li><IoPlay color="#00c2cb" size={13}/>Brown </li>
                            <li><IoPlay color="#00c2cb" size={13}/>Green </li>
                            <li><IoPlay color="#00c2cb" size={13}/>Gray </li>
                            <li><IoPlay color="#00c2cb" size={13}/>Red </li>
                            <li><IoPlay color="#00c2cb" size={13}/>Orange </li>
                            <li><IoPlay color="#00c2cb" size={13}/>Pink </li>
                            <li><IoPlay color="#00c2cb" size={13}/>Gold </li>
                            <li><IoPlay color="#00c2cb" size={13}/>White </li>
                            {/* <li><IoPlay color="#00c2cb" size={13}/>Silver </li> */}
                            <li><IoPlay color="#00c2cb" size={13}/>Clear/Transparent </li>
                            <li><IoPlay color="#00c2cb" size={13}/>Yellow </li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3>YOUR ACCOUNT</h3>
                        <ul>
                            <li><IoPlay color="#00c2cb" size={13}/>Your Orders</li>
                            <li><IoPlay color="#00c2cb" size={13}/>Your Saved Frames</li>
                            <li><IoPlay color="#00c2cb" size={13}/>Your Dashboard</li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom Section */}
                <div className="footer-bottom">
                    <div className="contact-info">
                        <span><MdEmail size={18} /> Email: eyezones94@gmail.com</span>
                        <span><MdCall size={18} /> Call: +91 93803 59418</span>
                        <span><MdTextsms size={18} /> Text: +91 93803 59418</span>
                        <span><MdChat size={18} /> Chat: Search or Chat</span>
                    </div>
                    <div className="footer-bottom-down">
                        <p>© 2025 Payne Glasses LLC. All Rights Reserved.</p>

                        <div className="policy-links" style={{ paddingLeft: "20px", paddingRight: "20px" }}>
                            <a href="#">Privacy Policy</a> | <a href="#">Terms of Use</a>
                        </div>

                        {/* Payment Methods Image */}
                        <div className="payment-methods">
                            <img src="https://cdn.razorpay.com/app/googlepay.svg" alt="Payment Methods" />
                            <img src="https://checkout-static-next.razorpay.com/build/assets/images/phonepe.e101f376.svg" alt="Payment Methods" />
                            <img src="https://cdn.razorpay.com/app/cred_circle.png" alt="Payment Methods" />
                            <img src="https://cdn.razorpay.com/app/amazonpay.svg" alt="Payment Methods" />
                            <img src="https://cdn.razorpay.com/app/bhim.svg" alt="Payment Methods" />
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
