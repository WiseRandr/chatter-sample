import React from "react";
import { NavLink, Link } from "react-router-dom";

import Chatter from "../Chatter/Chatter";

import logo from '../chatter.png';
import M from "materialize-css";

const Header = () => {
    
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems);
    });

    return(
        <nav>
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo right"><img src={logo} width="87px" alt="Chatter"/></Link>
                <Link to="#" data-target="mobile-menu" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/chat">Chat</NavLink></li>
                    { Chatter.isLogged() ?
                        <li><NavLink to="/profile">Profile</NavLink></li>
                        : 
                        <li><NavLink to="/register" className="btn">Register</NavLink></li>
                    }
                    { Chatter.isLogged() ?
                        <li><NavLink to="/logout" className="btn">Logout</NavLink></li>
                        : 
                        <li><NavLink to="/login" className="btn">Login</NavLink></li>
                    }
                </ul>
                <ul className="sidenav" id="mobile-menu">
                    <li><NavLink to="/" className="sidenav-close">Home</NavLink></li>
                    <li><NavLink to="/chat" className="sidenav-close">Chat</NavLink></li>
                    <li><NavLink to="/register" className="sidenav-close">Register</NavLink></li>
                    <li><NavLink to="/login" className="sidenav-close">Login</NavLink></li>
                    { Chatter.isLogged() ?
                        <li><NavLink to="/profile" className="sidenav-close">Profile</NavLink></li>
                        : 
                        <li><NavLink to="/register" className="sidenav-close">Register</NavLink></li>
                    }
                    { Chatter.isLogged() ?
                        <li><NavLink to="/logout" className="btsidenav-closen">Logout</NavLink></li>
                        : 
                        <li><NavLink to="/login" className="bsidenav-closetn">Login</NavLink></li>
                    }
                </ul>
            </div>
        </nav>
    );
}

export default Header;