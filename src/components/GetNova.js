import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/GetNova.css';
import cbn from '../assets/images/cbn.svg';
// import ndic from '../assets/images/NDIC.svg';
import bank from '../assets/images/E-Wallet-pana.svg';
import card1 from '../assets/images/svgexport-3.svg';
import budget from '../assets/images/svgexport-6.svg';
import equation from '../assets/images/svgexport-20.svg';
import paynothing from '../assets/images/svgexport-4.svg'
import save from '../assets/images/svgexport-5.svg'

const GetNova = () => {
    let cardStyle = {
        color:"orangered",
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
                    <img src={cbn} alt="" />
                    {/* <img src={ndic} alt="" className='ms-lg-3' /> */}
                </div>
                <Link className="nav-link fs-5 text-center" to="/signup" id='getKudagetKuda'>Get Nova <span><i className="material-icons" id='mat' style={{transform:"translateY(7px)"}}>navigate_next</i></span></Link>

            </div>
            <div className="col-lg-4 col-sm-12" id='imagebank'>
                <img src={bank} width={480} alt="" />
            </div>
        </div>
    </section>

    {/* Card Section */}
    <section className="container-fluid" id='sectioncards'>
        <div className="row mx-auto">
            <div className="row" id='cards'>
                <div className="card col-lg-3 my-2 p-3 shadow-sm border-0" style={cardmargin}>
                    <div className="card-text px-1"><i className='material-icons bg-light p-1 rounded-circle' style={{transform:"translateY(7px)",color:"orangered"}} width={25}>credit_card</i></div>
                    <div className="card-text px-1 mt-2 fw-bold" style={cardStyle}>We’ll give you a free debit card. Order it right in the app.</div>
                </div>
                <div className="card col-lg-3 my-2 p-3 shadow-sm border-0" style={cardmargin}>
                    <div className="card-text px-1"><i className='material-icons bg-light p-1 rounded-circle' style={{transform:"translateY(7px)",color:"orangered"}} width={25}>payments</i></div>
                    <div className="card-text px-1 mt-2 fw-bold" style={cardStyle}>Create smart budgets to help you take control of your spending.</div>
                </div>
                <div className="card col-lg-3 my-2 p-3 shadow-sm border-0" style={cardmargin}>
                    <div className="card-text px-1"><i className='material-icons bg-light p-1 rounded-circle' style={{transform:"translateY(7px)",color:"orangered"}} width={25}>savings</i></div>
                    <div className="card-text px-1 mt-2 fw-bold" style={cardStyle}>See where your money goes without solving equations..</div>
                </div>
            </div>
            
            <div className="mt-4 row" id='cardss'>
                <div className="card col-lg-3 my-2 p-3 shadow-sm border-0" style={cardmargin}>
                    <div className="card-text px-1"><i className='material-icons bg-light p-1 rounded-circle' style={{transform:"translateY(7px)",color:"orangered"}} width={25}>add_card</i></div>
                    <div className="card-text px-1 mt-2 fw-bold" style={cardStyle}>Pay absolutely nothing for sending money.</div>
                </div>
                <div className="card col-lg-3 my-2 p-3 shadow-sm border-0" style={cardmargin}>
                    <div className="card-text px-1"><i className='material-icons bg-light p-1 rounded-circle' style={{transform:"translateY(7px)",color:"orangered"}} width={25}>attach_money</i></div>
                    <div className="card-text px-1 mt-2 fw-bold" style={cardStyle}>Save automatically and we’ll pay you up to 15% interest every year.</div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default GetNova