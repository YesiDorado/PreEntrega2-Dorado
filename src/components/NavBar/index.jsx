import React from "react";

export const NavBar = () => {
    return (
        <div className="nav">
            <nav className="nav">
                <div className="nav__brand">
                    <a className="nav__link" href="#">Make up</a>
                </div>
                <ul className="nav__list">
                    <li>
                        <a className="nav__link" href="#">Base</a>
                    </li>
                    <li>
                        <a className="nav__link" href="#">Labial</a>
                    </li>
                    <li>
                        <a className="nav__link" href="#">Pestaña</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;