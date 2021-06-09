import React, { useState, useEffect } from 'react';
import Netflix from './netflix.png';
import Avatar from './avatar.png';
import './NavBar.css';
const NavBar = () => {
    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true)
            } else {
                handleShow(false)
            }
        });
        return () => {
            window.addEventListener('scroll');
        }
    }, [])
    return (
        <div className={`nav_bar ${show && "nav_black"}`}>
            <img
                className="netflix_logo"
                src={Netflix}
                title="netflix"
                alt="netflix"
            />
            <img
                className="avatar_logo"
                src={Avatar}
                title="avatar"
                alt="avatar"
            />
        </div>
    )
}

export default NavBar
