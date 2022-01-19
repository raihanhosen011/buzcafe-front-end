import { UilBill, UilDashboard, UilDocumentInfo, UilFileInfoAlt, UilQrcodeScan, UilUserNurse } from '@iconscout/react-unicons';
import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

function Index(props) {
    return (
        <>
           <div className='dashboard__sidebar mb-3' > 
              
              <div className='dashboard__sidebar-header' >
                 <h5>Era swap wallet ID</h5>
                 <p> {props.address} </p> 
              </div>
              
              <div className='dashboard__sidebar-menu' >
                 <ul className='menu__list' >
                   
                   <li className='single__menu' >
                      <Link to="#your-shop" >
                        <UilDocumentInfo className="menu__icon" /> Shop Details 
                      </Link>
                   </li>
                   
                   <li className='single__menu' >
                      <Link to="#business-details" >
                        <UilFileInfoAlt  className="menu__icon" /> Add/Update Details
                      </Link>
                   </li>
                   
                   <li className='single__menu' >
                      <Link to="#complete-kyc" >
                        <UilUserNurse className="menu__icon" /> Complete KYC
                      </Link>
                   </li>
                   
                   <li className='single__menu' >
                      <Link to="#get-qr" >
                        <UilQrcodeScan className="menu__icon" /> Get your QR
                      </Link>
                   </li>
                   
                   <li className='single__menu' >
                      <Link to="#payments" >
                        <UilBill  className="menu__icon" /> Payments
                      </Link>
                   </li>
                 </ul> 
              </div>

           </div>             
        </>
    )
}

export default Index
