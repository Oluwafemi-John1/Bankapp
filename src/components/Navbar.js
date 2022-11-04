import React from 'react';
import logo from '../assets/images/nova logo.png';
import kudacard from '../assets/images/svgexport-3.svg';
import spend from '../assets/images/svgexport-4.svg';
import save from '../assets/images/svgexport-5.svg';
import budget from '../assets/images/svgexport-6.svg';
import borrow from '../assets/images/svgexport-7.svg';
import countrylogo from '../assets/images/logo.svg';
import imagescam from '../assets/images/imagescam.png';
import { Link } from 'react-router-dom';
import '../assets/css/Navbar.css';

const Navbar = () => {
  return (
    <>
        <div className="sticky-top">
            <nav className="navbar navbar-expand-lg py-3 shadow-sm">
                <div className="container-fluid">
                    <a className="navbar-brand ms-lg-5" href="#"><img src={logo} width={90} alt="" className='imglogo'/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            {/* Features */}
                            <li className="nav-item dropdown px-1">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >Features</a>
                                <ul className="dropdown-menu border-0 shadow-sm">
                                    <li className='py-1'><Link href="" className="dropdown-item"><img src={kudacard} width={25} alt="" />&nbsp;&nbsp;&nbsp;Nova Card</Link></li>
                                    <li className='py-1'><Link href="" className="dropdown-item"><img src={spend} width={25} alt="" />&nbsp;&nbsp;&nbsp;Spend</Link></li>
                                    <li className='py-1'><Link href="" className="dropdown-item"><img src={save} width={25} alt="" />&nbsp;&nbsp;&nbsp;Save</Link></li>
                                    <li className='py-1'><Link href="" className="dropdown-item"><img src={budget} width={25} alt="" />&nbsp;&nbsp;&nbsp;Budget</Link></li>
                                    <li className='py-1'><Link href="" className="dropdown-item"><img src={borrow} width={25} alt="" />&nbsp;&nbsp;&nbsp;Borrow</Link></li>
                                </ul>
                            </li>

                            <li className="nav-item">
                            <Link className="nav-link" href="#">Business&nbsp;<a href='#' className='border rounded text-decoration-none shadow-sm'><span className='Beta'>Beta</span></a></Link>
                            </li>
                            
                            {/* Company */}
                            <li className="nav-item dropdown px-1">
                                <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >Company</Link>
                                <ul className="dropdown-menu border-0 shadow-sm">
                                    <li className='py-1'><Link href="" className="dropdown-item">Blog</Link></li>
                                    <li className='py-1'><Link href="" className="dropdown-item">Press</Link></li>
                                    <li className='py-1'><Link href="" className="dropdown-item">Join our team</Link></li>
                                    <li className='py-1'><Link href="" className="dropdown-item">About us</Link></li>
                                </ul>
                            </li>

                            {/* Get Help */}
                            <li className="nav-item dropdown px-1">
                                <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >Help</Link>
                                <ul className="dropdown-menu border-0 shadow-sm">
                                    <li className='py-1'><Link href="" className="dropdown-item">Get Help</Link></li>
                                    <li className='py-1'><Link href="" className="dropdown-item">FAQs</Link></li>
                                    <li className='py-1'><Link href="" className="dropdown-item">Security</Link></li>
                                    <li className='py-1'><Link href="" className="dropdown-item">Contact us</Link></li>
                                </ul>
                            </li>
                        </ul>

                        <ul className='navbar-nav' id='navbar-nav2'>
                            <li className="nav-item">
                                <Link className="nav-link" to="/signin">Sign In</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light rounded px-4" to="/signup" id='getKuda'>Get Nova</Link>
                            </li>
                            <li className="nav-item dropdown" id='imagescammer'>
                                <Link className="nav-link " to=""><img src={countrylogo} alt="" /></Link>
                                <ul className='dropdown-menu border-0 rounded'>
                                    <li id='imagescam'><Link to="" className="dropdown-item"><img src={imagescam} alt="" /></Link></li>
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