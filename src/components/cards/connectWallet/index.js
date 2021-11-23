import { UilTimes } from '@iconscout/react-unicons'
import React from 'react'
import './connectWallet.css'

function index({ setShowWallets }) {
    return (
        <div className='connect__wallet' >
           <div className='connect__wallet-card' >
              <h6 className='card__title' > Use Account From </h6>

              <div className='wallets my-4 d-flex flex-between' >
                 <a target='_blank' href='#' className='wallet' >
                    <img src='./images/wallet-logo/meta-mask.png' alt='meta mask logo' />
                 </a>

                 <a target='_blank' href='#' className='wallet mx-3' >
                    <img src='./images/wallet-logo/wallet-connect.png' alt='wallet connect logo' />
                 </a>

                 <a target='_blank' href='https://eraswap.life/access-my-wallet' className='wallet' >
                    <img src='./images/wallet-logo/era-swap.png' alt='Era swap logo' />
                 </a>
              </div>  

              <div className='footer__title' >
                 <a target='_blank' href='https://eraswap.life/create-new-wallet' >Don’t have an Ethereum account?</a> 
              </div>
           </div> 

           <div className='connect__wallet-close' onClick={() => setShowWallets(false)} >
              <UilTimes/> 
           </div>
        </div>
    )
}

export default index