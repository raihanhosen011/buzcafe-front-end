import React from 'react'
import { Link } from 'react-router-dom'
import './CategoryCard.css'

function index({ src,title,to }) {
    return (
            <div className='col-12 col-md-3 mb-3' >
               <div className='category__card' >
                   <div className='backdrop' />   

                   <img src={src} alt={`${title} demo`} />

                   <div className='category__card-text' >
                      <h4 className='category__card-title' >{title}</h4>
                      <Link to={to} > View more </Link>
                   </div>   
               </div>
            </div>
    )
}

export default index
