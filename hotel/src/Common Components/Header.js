import { useRef } from 'react';
import React from 'react';
import {FaBars, FaTimes} from "react-icons/fa";
import "../Styles/main.css";

export const Navbar = function (){

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("reponsive_nav");
    }

    return (
        <header>
            <h3>logo</h3>
            <nav ref={ navRef }>
                <a href="">Home</a>
                <a href="">Body</a>
                <a href="">About us</a>
                <a href="">Contact us</a>
                <button onClick= { showNavbar }>
                    <FaTimes />
                </button>
            </nav>
            <button onClick= { showNavbar }>
                <FaBars />
            </button>
        </header>
    )
}

