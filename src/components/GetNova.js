import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/GetNova.css';
import cbn from '../assets/images/cbn.svg';
import ndic from '../assets/images/NDIC.svg';
import bank from '../assets/images/E-Wallet-pana.svg'

const GetNova = () => {
    let cardStyle = {
        color:"#40196D",
        fontFamily:"Muli, sans-serif;",
        fontWeight:"900",
        fontSize:"16px",
        lineHeight:"23px"
    }

    let cardmargin = {
        marginRight:"30px"
    }
  return (
    <>
    <section className="container-fluid" id='sectionKuda'>
        <div className="row">
            <div className="col-lg-4 col-sm-12 p-5" id='freebank1'>
                <h1 id='freebank' className='p-lg-2'>We offer you the guarantee of a modern banking experience</h1>
                <p id='freedom' className='p-2'>We’re here to help you get the best out of your money, no strings attached.<br />Welcome to your freedom!</p>
                <div className="cbn">
                    <img src={cbn} alt="" />&nbsp;
                    <img src={ndic} alt="" className='ms-lg-3' />
                </div>
                <Link className="nav-link fs-5 text-center" to="/signup" id='getKudagetKuda'>Get Nova <span><i className="material-icons" id='mat' style={{transform:"translateY(7px)"}}>navigate_next</i></span></Link>

            </div>
            <div className="col-lg-4 col-sm-12" id='imagebank'>
                <img src={bank} width={480} alt="" />
            </div>
        </div>
    </section>
    </>
  )
}

export default GetNova