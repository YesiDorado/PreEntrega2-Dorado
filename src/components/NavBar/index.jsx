import React from "react";
import "./NavBar.css";
import logo from './assets/logo-01.png';
import CartWidget from "../CartWidget";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav>
            <ul className="nav-menu">
                <h2>
                    <Link to='/'>
                        <li>
                            <div className="logo">
                                <img src={logo} alt="patitas" />
                            </div>
                        </li>
                    </Link>
                </h2>
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        Home
                    </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/">
                        Nosotros
                    </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/">
                        Productos
                    </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/">
                        Contacto
                    </a>
                </li>
                <CartWidget />
            </ul>
        </nav>
    );
}