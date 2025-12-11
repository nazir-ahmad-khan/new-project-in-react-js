import { Link } from "react-router-dom";
import './Header.css';
import logo from '../Logo/logo.svg';


function Header({openPopup}) {


    return (
        <>

        <div className="main_container">
            <div className="header-container">
                    <div>
                        <Link to="/">
                            <img src={logo} alt="Logo" />
                        </Link>
                    </div>

                    <nav className="menu">
                        <ul >
                            <li><Link to="/">Sales Development</Link></li>
                            <li><Link to="gotomarket">Go-To-Market</Link></li>
                            <li><Link to="datasolutions">Data Solutions</Link></li>
                            <li><Link to="pricing">Pricing</Link></li>
                            <li><Link to="resources">Resources</Link> </li>
                        </ul>
                    </nav>
                    <div>
                        <button onClick={openPopup} className="btn">
                            Book a meeting
                        </button>
                    </div>
            </div>
        </div>
        </>
    )
}
export default Header;