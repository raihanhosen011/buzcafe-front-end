import React from 'react'
import './utilitie.css'

function index({ src,alt,href }) {
    return (
        <div>
           <a href={href} target='_blank' >
             <div className='utilities__card' >
                <img src={src} alt={alt} /> 
             </div>            
           </a> 
        </div>
    )
}

export default index
