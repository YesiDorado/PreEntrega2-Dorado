import React from "react";
import CartWidget from "../CartWidget";

export const NavBar = () => {
    return (
        <div className="nav">
            <nav className="nav">
                <div className="nav__brand">
                    <a className="nav__link" href="#">Make up</a>
                </div>
                <ul className="nav__list">
                    <li>
                        <a className="nav__link" href="#">Nosotros</a>
                    </li>
                    <li>
                        <a className="nav__link" href="#">Productos</a>
                    </li>
                    <li>
                        <a className="nav__link" href="#">< CartWidget /></a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;