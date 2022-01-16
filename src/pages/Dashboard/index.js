import React, { useEffect, useState } from 'react'
import Hero from '../../components/sections/Hero'
import './dashboard.css'
import BussnessDetails from './partials/BussnessDetails'
import KYC from './partials/KYC'
import Payments from './partials/Payments'
import QrCode from './partials/QrCodeScanner'
import ServiceDetails from './partials/ServiceDetails'
import Sidebar from './partials/Sidebar'
import YourService from './partials/YourServices'
import YourShop from './partials/YourShop'

function Index() {
    const [hash,setHash] = useState()

    useEffect(() => {
      setHash(window.location.hash)
    },[window.location.hash])

    return (
        <>
          <div className='dashboard' >
             {/* <Hero/> */}
            <br/>
            <br/>
            <br/>
            <br/>
            <section className='px-2 px-md-4' >
              <div className='row' >

                <div className='col-md-3' >
                  <Sidebar/>  
                </div>

                <div className='col-md-9' >
                   <div className='dashboard__content' >
                      {hash == '#payments' && <Payments/> }
                      {hash == '#your-shop' && <YourShop/>}
                      {hash == '#get-qr' && <QrCode/>}
                      {hash == '#business-details' && <BussnessDetails/>}
                      {hash == '#complete-kyc' && <KYC/>}
                   </div> 
                </div>

              </div>            
            </section>          
          </div>   
        </>
    )
}

export default Index
