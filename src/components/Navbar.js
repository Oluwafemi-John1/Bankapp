import React from 'react';
import logo from '../assets/images/svgexport-1.svg';
import kudacard from '../assets/images/svgexport-3.svg';
import spend from '../assets/images/svgexport-4.svg';
import save from '../assets/images/svgexport-5.svg';
import budget from '../assets/images/svgexport-6.svg';
import borrow from '../assets/images/svgexport-7.svg';
import countrylogo from '../assets/images/logo.svg';
import imagescam from '../assets/images/imagescam.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
        <div className="sticky-top">
            <nav className="navbar navbar-expand-lg py-3">
                <div className="container-fluid">
                    <a className="navbar-brand ms-lg-5" href="#"><img src={logo} width={85} alt="" className='imglogo'/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            {/* Features */}
                            <li className="nav-item dropdown px-1">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >Features</a>
                                <ul className="dropdown-menu border-0 shadow-sm">
                                    <li className='py-1'><a href="" className="dropdown-item"><img src={kudacard} width={25} alt="" />&nbsp;&nbsp;&nbsp;Kuda Card</a></li>
                                    <li className='py-1'><a href="" className="dropdown-item"><img src={spend} width={25} alt="" />&nbsp;&nbsp;&nbsp;Spend</a></li>
                                    <li className='py-1'><a href="" className="dropdown-item"><img src={save} width={25} alt="" />&nbsp;&nbsp;&nbsp;Save</a></li>
                                    <li className='py-1'><a href="" className="dropdown-item"><img src={budget} width={25} alt="" />&nbsp;&nbsp;&nbsp;Budget</a></li>
                                    <li className='py-1'><a href="" className="dropdown-item"><img src={borrow} width={25} alt="" />&nbsp;&nbsp;&nbsp;Borrow</a></li>
                                </ul>
                            </li>

                            <li className="nav-item">
                            <a className="nav-link" href="#">Business&nbsp;<a href="" className='border rounded text-decoration-none shadow-sm'><span className='Beta'>Beta</span></a></a>
                            </li>
                            
                            {/* Company */}
                            <li className="nav-item dropdown px-1">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >Company</a>
                                <ul className="dropdown-menu border-0 shadow-sm">
                                    <li className='py-1'><a href="" className="dropdown-item">Blog</a></li>
                                    <li className='py-1'><a href="" className="dropdown-item">Press</a></li>
                                    <li className='py-1'><a href="" className="dropdown-item">Join our team</a></li>
                                    <li className='py-1'><a href="" className="dropdown-item">About us</a></li>
                                </ul>
                            </li>

                            {/* Get Help */}
                            <li className="nav-item dropdown px-1">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >Help</a>
                                <ul className="dropdown-menu border-0 shadow-sm">
                                    <li className='py-1'><a href="" className="dropdown-item">Get Help</a></li>
                                    <li className='py-1'><a href="" className="dropdown-item">FAQs</a></li>
                                    <li className='py-1'><a href="" className="dropdown-item">Security</a></li>
                                    <li className='py-1'><a href="" className="dropdown-item">Contact us</a></li>
                                </ul>
                            </li>
                        </ul>

                        <ul className='navbar-nav' id='navbar-nav2'>
                            <li className="nav-item">
                                <Link className="nav-link" to="/signin">Sign In</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light rounded px-4" to="/signup" id='getKuda'>Get Kuda</Link>
                            </li>
                            <li className="nav-item dropdown" id='imagescammer'>
                                <a className="nav-link " href="#"><img src={countrylogo} alt="" /></a>
                                <ul className='dropdown-menu border-0 rounded'>
                                    <li id='imagescam'><a href="" className="dropdown-item"><img src={imagescam} alt="" /></a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </>
  )
}

export default Navbar