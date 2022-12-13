import React from 'react';
import Navbar from './Navbar';
import '../assets/css/Cards.css';
import { Link } from 'react-router-dom';
import atm from '../assets/images/Wallet.gif';
import saveMoney from '../assets/images/Saving money.gif';
import spend from '../assets/images/Make it rain.gif'

const Cards = () => {
  return (
    <>
    <Navbar/>

    <section className="container-fluid border-danger border-3 mt-5 mt-lg-0 mt-md-0" id='sectionCard'>
        {/* First section */}
        <div className="row my-5 border-bottom" id='divCard'>
            <div className="col-lg-4 col-sm-12 border-info mt-lg-5" id='freebank1'>
                <h1 id='moneyapp' className='p-lg-2'>The money app for everyone</h1>
                <p className='p-3' id='saveSpend'>Save, spend, send and invest money across borders.</p>
                <Link className="nav-link fs-5 text-center ms-lg-2 ms-4" to="/signup" id='getKudagetKuda'>Get Nova <span><i className="material-icons" id='mat' style={{transform:"translateY(7px)"}}>navigate_next</i></span></Link>
            </div>
            <div className="col-lg-6 col-sm-12 border-primary" id='imgAtm'>
                <img src={atm} alt="" width={500} className='img-fluid img-responsive' />
            </div>
        </div>
        {/* Second Section */}
        <div className="row my-5 border-bottom">
            <div className="col-lg-4 col-sm-12 border-info mt-lg-5" id='freebank1'>
                <h1 id='moneyapp' className='p-lg-2'>Save</h1>
                <p className='p-3' id='saveSpend'>Putting money away for the future is smart but it takes discipline - something humans don’t have in abundance. We’re using technology to solve that by automating saving. You set an amount to save and the Novaa app takes care of the rest, prompt interest payout included.</p>
            </div>
            <div className="col-lg-6 col-sm-12 border-primary p-5" id='imgAtm'>
                <img src={saveMoney} alt="" width={500} className='img-fluid img-responsive' />
            </div>
        </div>
        {/* Third Section */}
        <div className="row my-5 border-bottom">
            <div className="col-lg-5 col-sm-12 border-primary p-5" id='imgAtm'>
                <img src={spend} alt="" width={500} className='img-fluid img-responsive' />
            </div>
            <div className="col-lg-4 col-sm-12 border-info mt-lg-5" id='freebank1'>
                <h1 id='moneyapp' className='p-lg-2'>Spend</h1>
                <p className='p-3' id='saveSpend'>Nova gives you more than one way to pay easily, including a widely accepted debit card issued in partnership with Visa, quick web payments direct from your Kuda account, and location-based gift cards for shopping and subscriptions.</p>
            </div>
        </div>
    </section>
    </>
  )
}

export default Cards