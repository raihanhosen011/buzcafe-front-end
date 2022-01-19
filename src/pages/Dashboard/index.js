import React, { useEffect, useState } from 'react'
import './dashboard.css'
import BussnessDetails from './partials/BussnessDetails'
import KYC from './partials/KYC'
import Payments from './partials/Payments'
import QrCode from './partials/QrCodeScanner'
import Sidebar from './partials/Sidebar'
import YourShop from './partials/YourShop'

function Index() {
    const [hash,setHash] = useState()
    const [details,setDetails] = useState();
    const [address, setAddress] = useState("");
    const fetchDetails = async () => {
        if(window.address && !details){
            try{
                const data = await window.buzcafeInst.Shops(window.address);
                setDetails([window.address,...data]);
                console.log(details);
            }catch(e){
                console.log(e);
            }
        }
    }


    useEffect(() => {
        const intervalId = setInterval(async () => {
          if (window.wallet) {
            setAddress(window.address);
            await fetchDetails();
            clearInterval(intervalId);
          } 
        }, 1000);
        return () => {
          clearInterval(intervalId);
        };


      }, []);
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
                  <Sidebar address={address}/>  
                </div>

                <div className='col-md-9' >
                   <div className='mx-auto' >
                      {hash == '#payments' && <Payments address={address}/> }
                      {hash == '#your-shop' && <YourShop address={address} details={details}/>}
                      {hash == '#get-qr' && <QrCode address={address} />}
                      {hash == '#business-details' && <BussnessDetails address={address} details={details}/>}
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
