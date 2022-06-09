import React from "react";
import {Link} from "react-router-dom";
import "../Styles/style.css";
function NavBar() {
    return <>
        <nav className="nav-color">
            <div className="nav-wrapper">
                <Link to="/"><img className="img-nav" src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" ></img></Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/conversor">Conversor</Link></li>
                    <li><Link to="/">?</Link></li>
                    <li><Link to="/">?</Link></li>
                </ul>
            </div>
        </nav>
    </>
}
export default NavBar;