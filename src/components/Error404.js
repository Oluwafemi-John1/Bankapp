import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Error404.css';
import error from '../assets/images/404 Error Page not Found with people connecting a plug-amico.svg';

const Error404 = () => {
    let cardStyle = {
        color:"orangered",
        fontFamily:"Muli, sans-serif;",
        fontWeight:"900",
        fontSize:"16px",
        lineHeight:"23px"
    }
  return (
    <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6 p-5 mt-lg-5 h-lg-50" style={cardStyle} id="errordiv">
                    <h1 className='p-lg-5 text-center'>Oh No! Error 404</h1>
                    <h3 className="p-2 text-center">Page not Found</h3>
                    <p className="text-center">The link you clicked may be broken or the page may have been removed or renamed</p>
                    <div className='text-center'><Link to="/" className='text-decoration-none' >Go home</Link></div>
                </div>
                <div className="col-lg-6 mt-lg-3">
                    <img src={error} alt="" className='img-fluid img-responsive' id='errorimg'/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Error404