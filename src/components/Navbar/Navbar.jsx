import React from 'react';import './Navbar.css'const Navbar = () => {    return (        <div>            <nav className="navbar">                <a href="#" className='logo'>Qubit</a>                <ul className='navigations'>                    <li>Why Qubit?</li>                    <li>Products</li>                    <li>Solutions</li>                    <li>Customers</li>                    <li>Case studies</li>                    <li>Resources</li>                    <li>More</li>                </ul>                <ul className='btns'>                    <button className='active'>Book a demo</button>                    <button>Log In</button>                </ul>            </nav>        </div>    )}export default Navbar;