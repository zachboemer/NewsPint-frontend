import React from 'react';
import "../assets/navbar.scss";
//import pintIcon from "../assets/beer.svg";

export default function NavBar() {
    return (

            <nav className="navbar">
                
                    <ul className="nav-menu">

                        <li className="nav-item">
                            <a href="/">
                                <i class="iconoir-home" ></i>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a href="/pint">
                                <i class="iconoir-glass-half" ></i>
                            </a>
                        </li>

                    </ul>
            </nav>

    );
};