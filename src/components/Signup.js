import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import signupimage from '../assets/images/Mobile login-pana.svg';
import '../assets/css/Signup.css'
import { useFormik } from 'formik';
import * as yup from 'yup'

const Signup = () => {
    const Navigate = useNavigate();
    const [allUser, setallUser] = useState([]);
    const [Error, setError] = useState("");
    let novaStyle = {
        textDecoration:"underline",
        textDecorationColor:"#FF4500",
        textDecorationStyle: "double"
    }

    // Declaring regex values for yup validation
    let lower = new RegExp(`(?=.*[a-z])`);
    let upper = new RegExp(`(?=.*[A-Z])`);
    let number = new RegExp(`(?=.*[0-9])`);
    let length = new RegExp(`(?=.{8,})`);

    const formik = useFormik({
        initialValues:{
            fullname:"",
            phone:"",
            email:"",
            password:""
        },

        onSubmit:(values) => {
            let details = JSON.parse(localStorage.getItem("nova"));
            setallUser(details);

            if (values) {
                if (allUser <= 0) {
                    setallUser(allUser.push(values));
                    localStorage.setItem("nova", JSON.stringify(allUser));
                    Navigate('/signin')
                } else {
                    for (const a of allUser) {
                        let User = values;
                        if (a["phone"] !== User.phone && a["email"] !== User.email) {
                            setallUser(allUser.push(values));
                            localStorage.setItem("nova", JSON.stringify(allUser));
                            Navigate('/signin');
                        } else if (a["phone" && "email"] === User.phone && User.email) {
                            let err = "Duplicate user found";
                            setError(err);
                        }
                    }
                }
            }
        },

        validationSchema:yup.object({
            fullname:yup
            .string()
            .matches(/^[a-z ,.'-]+$/i,"Must be at least 2 characters")
            .required("This field is required"),
            phone:yup
            .string()
            .matches(/^[\d]{11}$/,"Must be a valid phone number")
            .required("This field is required"),
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

                <div className="border rounded mt-4 p-3 shadow-sm mb-3">
                    <h4>Get a <span style={novaStyle}>Nova</span> account now</h4>
                    <p>To sign up, please type in a valid email address</p>

                    <form action="" onSubmit={formik.handleSubmit}>
                        <label htmlFor="full name" className='fw-bold' style={{color:"#FF4500"}} >Full Name:</label>
                        <input 
                            type="text"
                            className= {formik.errors.fullname ? "form-control my-2 is-invalid" : "form-control my-2"}
                            placeholder='firstname&nbsp;&nbsp;lastname'
                            name='fullname'
                            onChange={formik.handleChange}
                            value={formik.values.fullname}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.fullname && <small className='text-danger'>{formik.errors.fullname}<br/></small>}

                        <label htmlFor="phone number" className='fw-bold' style={{color:"#FF4500"}} >Phone Number:</label>
                        <input 
                            type="number"
                            className= {formik.errors.phone ? "form-control my-2 is-invalid" : "form-control my-2"}
                            placeholder='enter phone number'
                            name='phone'
                            onChange={formik.handleChange}
                            value={formik.values.phone}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.phone && <small className='text-danger'>{formik.errors.phone}<br/></small>}

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
                    <p>Already have an account? Sign in <Link to='/signin' className='fw-bold' style={{color:"#FF4500"}}>here</Link></p>
                    <button type='submit' className="btn my-2 p-2 text-light w-100" style={{backgroundColor:"#FF4500"}}>Create Account</button>
                    </form>
                </div>
            </div>
            <div className="col-lg-5 mx-auto">
                <img src={signupimage} width={600} alt="" className="img-fluid img-responsive" id='signupimage'/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Signup