
import './Footer.css';
import { FaMediumM, FaFacebookF, FaInstagram, FaTiktok, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";


function Footer() {
    return (
        <>
            <div className="footer-main-container">
                <div className="footer-sub-container">

                    <div className='footer-left-container'>

                        <h2>Get Our Best Content</h2>
                        <div className='footer-form'>
                            <label htmlFor="businessEmail">Business Email *</label>
                            <input type="text" id='businessEmail' placeholder='Business Email *' />

                            <button className='footer-btn'>Submit</button>
                        </div>
                        <div className='footer-container'>
                            <img src='../Logo/footer-logo.svg' alt="" />
                            <h2>© 2025 graph8<br />
                                All rights reserved.
                            </h2>

                            <h2>
                                360 NW 27th St.<br />
                                Miami, FL 33127
                            </h2>
                        </div>

                    </div>

                    <div className="footer-right-container">

                        <div className='footer-menu'>
                            <div>
                                <h2>Sales Development</h2>
                                <ul>
                                    <li>Outbound</li>
                                    <li>Inbound</li>
                                    <li>Local</li>
                                </ul>
                            </div>

                            <div>
                                <h2>Go-To-Market</h2>
                                <ul>
                                    <li>GTM Set Up</li>
                                    <li>Scaled Outbound</li>
                                    <li>Enterprise Teams</li>
                                    <li>Additional Channels</li>
                                </ul>

                            </div>
                        </div>

                        <div className='footer-menu'>
                            <div>
                                <h2>Data Solution</h2>
                                <ul>
                                    <li>B2B Data</li>
                                    <li>Local Data</li>
                                    <li>Audience Data</li>
                                </ul>
                            </div>

                            <div>
                                <h2>Resources</h2>
                                <ul>
                                    <li>About Us</li>
                                    <li>CAC & Cost-Per-Lead Guide</li>
                                    <li>Lead Prioritization Guide</li>
                                    <li>Partner Program</li>
                                    <li>Blog</li>
                                    <li>Case Studies</li>
                                    <li>CIENCEpedia</li>
                                    <li>Contact Us</li>
                                    <li>Buying Guide</li>
                                    <li>Pricing</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-info-container">

                    <div className="footer-info">
                        <a href="nazeerahmadfn@gmail.com">nazeerahmadfn@gmail.com</a>
                        <span>Privacy Policy</span>
                        <span>Control My Personal Data</span>
                    </div>

                    <div className="footer-icons">
                        <FaMediumM />
                        <FaFacebookF />
                        <FaInstagram />
                        <FaXTwitter />
                        <FaLinkedinIn />
                        <FaYoutube />
                        <FaTiktok />

                    </div>
                </div>
            </div>

        </>
    )
}
export default Footer;