import React from 'react';
import "../assets/navbar.scss";
import pintIcon from "../assets/beer.svg";



export default function NavBar() {
    return (
        <>

            <link
            rel="stylesheet"
            href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css"
            />

            <nav className="navbar">
                <ul className="nav-menu">
                    <li className="nav-item">
                        <a
                            href="/pint"
                        >
                            <img src={pintIcon} height="35vmin" alt=''></img>
                        </a>
                    </li>
                </ul>
            </nav>

    </>
    );
};