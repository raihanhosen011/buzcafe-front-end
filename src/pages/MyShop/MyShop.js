import React, { useEffect, useState } from 'react';
import Hero from '../../components/sections/Hero';
import Transactions from '../../components/Transactions/Transactions';


function MyShop(){
    return (
        <div  className='dashboard container' >
            {/* <Hero /> */}
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="card shadow">
                
                <div className="row p-5">
                    <div className="col-md-4">
                    <img src="https://picsum.photos/450/300?image=1072" className="w-100" />
                    </div>
                    <div className="col-md-8 px-3">
                    <a href="#" class="badge badge-info">Hotel</a>
                    <div className="card-block px-3">
                        <h4 className="card-title">Chai sutta Bar</h4>
                        <div className='text-muted'>0x58D45F9b7956602291fCF192a7c3bB04cBfeD7bF</div>
                        <p className='card-text'>
                         <i class="fa fa-map-marker" aria-hidden="true"></i> 115, Block-B, Malviya Road , Mumbai
                        </p>
                        <p className='card-text'>
                         <i class="fa fa-phone-alt" aria-hidden="true"></i> +91-9460291292
                        </p>
                    </div>
                    </div>
                </div>
            </div>
           <br/> <br />
            <Transactions />
            <br/>
            <br/>
            <br/>
            <br/>

        </div>
    )
}

export default MyShop;