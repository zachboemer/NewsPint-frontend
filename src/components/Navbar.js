import React from 'react';
import "../assets/navbar.scss";
import pintIcon from "../assets/beer.svg";
//import resume from "../assets/ZachBoemer_Resume.pdf";



export default function NavBar() {
    return (
        <>

            <link
            rel="stylesheet"
            href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css"
            />

            <nav class="navbar">
                <ul class="nav-menu">
                    <li class="nav-item">
                        <a
                            href="/pint"// fix this to be the right link
                        >
                            <img src={pintIcon} height="35vmin" alt=''></img>
                        </a>
                    </li>
                    {/* <li class="nav-item">
                        <a
                        href="https://www.linkedin.com/in/zachary-boemer"
                        target="_blank"
                        rel="noopener noreferrer">

                            <i class="fab fa-linkedin-in"></i>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a
                        href="https://www.github.com/zachboemer/"
                        target="_blank"
                        rel="noopener noreferrer">

                            <i class="fab fa-github"></i>
                        </a>
                    </li>
                
                    <li class="nav-item">
                        <a
                        href={resume}
                        download="ZachBoemer_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer">

                            <i class="fas fa-file-alt"></i>
                        </a>
                    </li> */}
                </ul>
            </nav>

    </>
    );
};