import React, { useState } from 'react';

const Navbar = () => {
    const[navBarToggle,setNavBarToggle]=useState(false)
    const handleToggle =()=>{
        setNavBarToggle(!navBarToggle)
    }
    
    const renderClasses=()=>{
        let classes='nav-link'
        if(!navBarToggle){
            classes+=' hide'
        }
        return classes;
    }

    return (
        <nav>
            <a href="" className="logo">Brand Logo</a>
            <button onClick={handleToggle} className="hamburger-toggle">
                <i className="fas fa-bars fa-lg"></i>
            </button>
            <div className={renderClasses()}>
                <a href="" className="link">Home</a>
                <a href="" className="link">Blog</a>
                <a href="" className="link">About Us</a>
                <a href="" className="link">Contact</a>
            </div>
        </nav>
    );
};

export default Navbar;