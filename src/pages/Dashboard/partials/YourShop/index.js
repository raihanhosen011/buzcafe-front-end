import { ethers } from 'ethers';
import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'

function YourShop(props) {
    const {details,address} = props;
   
    return (
        <>
          <div className='buzcafe-details' >
              <h3 className='dashboard__title' >Your buzcafe shop</h3>

              <div className="card shadow">
                
                {address ? (details ? <div className="row p-5">
                    <div className="col-md-4">
                    <img src={details[5]} className="w-100" />
                    </div>
                    <div className="col-md-8 px-3">
                    <a href="#" class="badge badge-info">{ethers.utils.parseBytes32String(details[1])}</a>
                    <div className="card-block px-3">
                        <h4 className="card-title">{details[3]}</h4>
                        <div className='text-muted text-dark'>{details[0]}</div>
                        <p className='card-text'>
                         <i class="fa fa-map-marker" aria-hidden="true"></i> {details[2]}
                        </p>
                        <p className='card-text'>
                         <i class="fa fa-phone-alt" aria-hidden="true"></i> +91-{details[4]}
                        </p>
                    </div>
                    </div>
                </div> : <div>You haven't registered on buzcafe </div>) : <div>Please Connect to wallet </div>}
            </div>
              
              <div className='buzcafe-details__btns' >
                 <Link to='#business-details' className='button button--white' > Add New Business </Link>
                 <Link to='#' className='button button--white' > Edit Details </Link>
              </div>
          </div>   
        </>
    )
}

export default YourShop;
