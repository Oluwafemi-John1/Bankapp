import React, { useState } from 'react';
import Navbar from './Navbar';
import signinimage from '../assets/images/Mobile login.gif';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup'

const Signin = () => {
    const Navigate = useNavigate();
    const [Error, setError] = useState("");

    let novaStyle = {
        textDecoration:"underline",
        textDecorationColor:"#FF4500",
        textDecorationStyle: "double"
    }

    let lower = new RegExp(`(?=.*[a-z])`);
    let upper = new RegExp(`(?=.*[A-Z])`);
    let number = new RegExp(`(?=.*[0-9])`);
    let length = new RegExp(`(?=.{8,})`);

    const formik = useFormik({
        initialValues:{
            email:"",
            password:""
        },

        onSubmit:(values) => {
            let details = JSON.parse(localStorage.getItem("nova"));
            if(values) {
                for (const a of details) {
                    let User = values;
                    if (a["email"] === User.email && a["password"] === User.password) {
                        localStorage.signInEmail = JSON.stringify(User.email);
                        localStorage.users = JSON.stringify(a);
                        // Navigate("/user")
                    } else {
                        let err = "User not found"
                        setError(err)
                    }
                }
            }
        },

        validationSchema:yup.object({
            email:yup
            .string()
            .email("Must be a valid email")
            .required("This field is required"),
            password:yup
            .string()
            .matches(lower,"Must include lowercase letter")
            .matches(upper,"Must include uppercase letter")
            .matches(number,"Must include a number")
            .matches(length,"Must not be less than 8 characters")
            .required("This field is required")
        })
    })
  return (
    <>
    <Navbar/>
    <div className='container-fluid mt-5 mt-lg-0'>
        <div className="row mx-auto mt-5 mt-lg-0">
            <div className="col-12 col-lg-4 px-lg-5">
                <div className="border p-3 shadow-sm rounded mt-lg-3">
                    Please, check your browser’s address bar to be sure you’re on <span style={{color:"#FF4500"}} className="fw-bold">https://app.novabank.com</span>
                </div>

                <div className="border rounded mt-5 p-3 shadow-sm mb-3">
                    <h4>Sign in to your <span style={novaStyle}>Nova</span> account now</h4>
                    <p>To sign in, please type in your registered email address</p>
                    <p>
                        <b className="text-danger">{Error}</b>
                    </p>

                    <form action="" onSubmit={formik.handleSubmit}>
                        <label htmlFor="email address" className='fw-bold' style={{color:"#FF4500"}} >Email Address:</label>
                        <input 
                            type="email"
                            className= {formik.errors.email ? "form-control my-2 is-invalid" : "form-control my-2"}
                            placeholder='example@gmail.com'
                            name='email'
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.email && <small className='text-danger'>{formik.errors.email}<br/></small>}

                        <label htmlFor="password" className='fw-bold' style={{color:"#FF4500"}} >Password:</label>
                        <input 
                            type="password"
                            className= {formik.errors.password ? "form-control my-2 is-invalid" : "form-control my-2"}
                            placeholder='&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;'
                            name='password'
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.password && <small className='text-danger'>{formik.errors.password}<br/></small>}

                    <p>Forgot password? <span style={{color:"#FF4500"}}>Reset it</span></p>
                    <p>New to <span style={novaStyle}>Nova</span>, Sign up <Link to='/signup' className='fw-bold' style={{color:"#FF4500"}}>here</Link></p>
                    <button type='submit' className="btn my-2 p-2 text-light w-100" style={{backgroundColor:"#FF4500"}}>Sign in</button>
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