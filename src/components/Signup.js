import React from 'react'
import Navbar from './Navbar'

const Signup = () => {
  return (
    <>
    <Navbar/>
    <div className='container-fluid mt-5 mt-lg-0'>
        <div className="row mx-auto mt-5 mt-lg-0">
            <div className="col-12 col-lg-4 px-lg-5">
                <div className="border p-3 shadow-sm rounded mt-lg-3">
                    Please, check your browser’s address bar to be sure you’re on <span style={{color:"#FF4500"}} className="fw-bold">https://app.novabank.com</span>
                </div>

                <div className="border rounded mt-4 p-3 shadow-sm mb-3">
                    <h4>Get a Nova account now</h4>
                    <p>To sign up, please type in a valid email address</p>
                </div>

                <div>
                    <label htmlFor="full name" className='fw-bold' style={{color:"#FF4500"}} >Full Name:</label>
                    <input type="text" className="form-control my-2" placeholder='firstname&nbsp;&nbsp;lastname'/>
                </div>
                <div>
                    <label htmlFor="phone number" className='fw-bold' style={{color:"#FF4500"}} >Phone Number:</label>
                    <input type="number" className="form-control my-2" placeholder='enter phone number'/>
                </div>
                <div>
                    <label htmlFor="email address" className='fw-bold' style={{color:"#FF4500"}} >Email Address:</label>
                    <input type="email" className="form-control my-2" placeholder='example@gmail.com'/>
                </div>
                <div>
                    <label htmlFor="password" className='fw-bold' style={{color:"#FF4500"}} >Password:</label>
                    <input type="password" className="form-control my-2" placeholder='&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;'/>
                </div>
                <p>Forgot password? <span style={{color:"#FF4500"}}>Reset it</span></p>
                <button className="btn my-2 p-2 text-light w-100" style={{backgroundColor:"#FF4500"}}>Create Account</button>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Signup