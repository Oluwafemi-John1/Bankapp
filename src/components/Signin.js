import React from 'react';
import Navbar from './Navbar';
import signinimage from '../assets/images/Mobile login.gif';
import { Link } from 'react-router-dom';

const Signin = () => {
    let novaStyle = {
        textDecoration:"underline",
        textDecorationColor:"#FF4500",
        textDecorationStyle: "double"
    }
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
                    <h4>Get a <span style={novaStyle}>Nova</span> account now</h4>
                    <p>To sign up, please type in a valid email address</p>

                    <form action="">
                        <label htmlFor="full name" className='fw-bold' style={{color:"#FF4500"}} >Full Name:</label>
                        <input 
                            type="text"
                            // className= {formik.errors.fullname ? "form-control my-2 is-invalid" : "form-control my-2"}
                            placeholder='firstname&nbsp;&nbsp;lastname'
                            name='fullname'
                            // onChange={formik.handleChange}
                            // value={formik.values.fullname}
                            // onBlur={formik.handleBlur}
                        />
                        {/* {formik.touched.fullname && <small className='text-danger'>{formik.errors.fullname}<br/></small>} */}

                        <label htmlFor="phone number" className='fw-bold' style={{color:"#FF4500"}} >Phone Number:</label>
                        <input 
                            type="number"
                            // className= {formik.errors.phone ? "form-control my-2 is-invalid" : "form-control my-2"}
                            placeholder='enter phone number'
                            name='phone'
                            // onChange={formik.handleChange}
                            // value={formik.values.phone}
                            // onBlur={formik.handleBlur}
                        />
                        {/* {formik.touched.phone && <small className='text-danger'>{formik.errors.phone}<br/></small>} */}

                        <label htmlFor="email address" className='fw-bold' style={{color:"#FF4500"}} >Email Address:</label>
                        <input 
                            type="email"
                            // className= {formik.errors.email ? "form-control my-2 is-invalid" : "form-control my-2"}
                            placeholder='example@gmail.com'
                            name='email'
                            // onChange={formik.handleChange}
                            // value={formik.values.email}
                            // onBlur={formik.handleBlur}
                        />
                        {/* {formik.touched.email && <small className='text-danger'>{formik.errors.email}<br/></small>} */}

                        <label htmlFor="password" className='fw-bold' style={{color:"#FF4500"}} >Password:</label>
                        <input 
                            type="password"
                            // className= {formik.errors.password ? "form-control my-2 is-invalid" : "form-control my-2"}
                            placeholder='&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;'
                            name='password'
                            // onChange={formik.handleChange}
                            // value={formik.values.password}
                            // onBlur={formik.handleBlur}
                        />
                        {/* {formik.touched.password && <small className='text-danger'>{formik.errors.password}<br/></small>} */}

                    <p>Forgot password? <span style={{color:"#FF4500"}}>Reset it</span></p>
                    <p>Already have an account? Sign in <Link to='/signin' className='fw-bold' style={{color:"#FF4500"}}>here</Link></p>
                    <button type='submit' className="btn my-2 p-2 text-light w-100" style={{backgroundColor:"#FF4500"}}>Create Account</button>
                    </form>
                </div>
            </div>
            <div className="col-lg-5 mx-auto">
            <img src={signinimage} width={600} alt="" className="img-fluid img-responsive" id='signupimage'/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Signin