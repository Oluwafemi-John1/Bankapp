import React from 'react'
import Navbar from './Navbar'
import '../assets/css/Cards.css'
import { Link } from 'react-router-dom'

const Cards = () => {
  return (
    <>
    <Navbar/>

    <section className="container-fluid border-danger border-3 mt-5 mt-lg-0 mt-md-0" id='sectionCard'>
        <div className="row border-warning" id='divCard'>
            <div className="col-lg-4 col-sm-12 border-info mt-lg-5" id='freebank1'>
                <h1 id='moneyapp' className='p-lg-2'>The money app for everyone</h1>
                <p className='p-3' id='saveSpend'>Save, spend, send and invest money across borders.</p>
                <Link className="nav-link fs-5 text-center ms-lg-2 ms-4" to="/signup" id='getKudagetKuda'>Get Nova <span><i className="material-icons" id='mat' style={{transform:"translateY(7px)"}}>navigate_next</i></span></Link>
            </div>
            <div className="col-lg-4 col-sm-12 border-primary">

            </div>
        </div>
    </section>
    </>
  )
}

export default Cards