import React from 'react';
import { Link } from 'react-router-dom';  // Assuming you're using React Router for navigation
import footer_icon from '../../Assets/images/footer_icon.png'
import './index.css';

const Footer = () => {

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    {/* Dummy logo image */}
                    <img src={footer_icon} alt="footer_icon" className="logo" />
                    <p>Get amazing sunglasses & eyeglasses that make you more happy.</p>
                </div>
                <div className="footer-links">
                    <div className="quick-links">
                        <h3>QUICK LINKS</h3>
                        <ul className='link-container'>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/terms-of-service">Terms of Service</Link></li>
                            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                            <li><Link to="/cancellation-policy">Cancellation Policy</Link></li>
                            <li><Link to="/refund-policy">Refund Policy</Link></li>
                        </ul>
                    </div>
                    <div className="useful-links">
                        <h3>USEFUL LINKS</h3>
                        <ul className='link-container'>
                            <li><Link to="/shop-by-shape">Shop By Shape</Link></li>
                            <li><Link to="/for-kids">For Kids</Link></li>
                            <li><Link to="/for-women">For Women</Link></li>
                            <li><Link to="/for-men">For Men</Link></li>
                            <li><Link to="/all-collection">All Collection</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="contact-info">
                    <h3>CONTACT US</h3>
                    <ul className='link-container'>
                        <li><span role="img" aria-label="phone">📞</span> +91 9824757577</li>
                        <li><span role="img" aria-label="email">📧</span> contact@dceyewr.com</li>
                        <li><span role="img" aria-label="location">📍</span> K.T. Shah Road, Mandvi - Kachchh.</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© Copyright 2024, DCEYEWR - All Rights Reserved</p>
                <div className="social-icons">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://via.placeholder.com/24?text=F" alt="Facebook" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://via.placeholder.com/24?text=I" alt="Instagram" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://via.placeholder.com/24?text=L" alt="LinkedIn" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
