import { UilStar } from '@iconscout/react-unicons'
import React from 'react'
import './topShop.css'

function index({ src,name,rating }) {
    return (
        <>
            <div className='topShop' >
                <div className='backdrop' />

                <img src={src} alt='shop' />

                <div className='topShop__content' >
                   <div className='topShop-name' > {name} </div>

                   <div className='topShop-rating' >
                      {[...Array(rating)].map(_ => <UilStar/>)}
                   </div> 
                </div>
            </div>   
        </>
    )
}

export default index
