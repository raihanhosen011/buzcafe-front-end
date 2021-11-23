import React from 'react'
import TopShopCard from '../../components/cards/TopShopCard'
import Hero from '../../components/sections/Hero'
import './allShop.css'

function index() {
    return (
        <> 
          <Hero/> 
          <section className='all-shop px-2 px-md-4' >
              <div className='section__title-field container' >
                <h3 className='section__title' >Shop Categories</h3>
              </div>     
                      
              <div className='section__content mt-5' >
                 
                <div className='row' >

                  <div className='col-md-2' >
                      <div className='sidebar' >
                        <ul>
                          <li>Wine Shop</li>
                          <li>Wedding</li>
                          <li>Travel</li>
                          <li>Transpoters</li>
                          <li>Training Institute</li>
                          <li>Sports goods</li>
                          <li>Sports coach</li>
                          <li>shopping</li>
                          <li>buzcafe news</li>
                          <li>Buzcafe Social</li>
                          <li>buzcafe pay</li>
                          <li>anything on hire</li>
                          <li>apply for loan</li>
                          <li>auto care</li>
                          <li>auto mobile</li>
                          <li>b 2 b</li>
                          <li>baby care</li>
                          <li>banquets</li>
                          <li>bills & recharge</li>
                          <li>books hotels</li>
                          <li>train</li>
                          <li>books</li>
                          <li>cab car rental</li>
                          <li>caterers</li>
                          <li>civil contractor</li>
                          <li>courier</li>
                          <li>daily needs</li>
                          <li>dance & music</li>
                          <li>florist</li>
                          <li>educations</li>
                          <li>pet & pet care</li>
                          <li>playschool</li>
                          <li>language classes</li>
                        </ul>
                      </div>
                  </div>

                  <div className='col-md-10' >  
                    <div className='row' >

                       <div className='col-md-4 mb-3' >
                         <TopShopCard src='./images/top-shop/shopping-2.jpg' name='Shop Name 1' rating={5} />
                       </div>

                       <div className='col-md-4 mb-3' >
                         <TopShopCard src='./images/top-shop/shopping-2.jpg' name='Shop Name 1' rating={5} />
                       </div>

                       <div className='col-md-4 mb-3' >
                         <TopShopCard src='./images/top-shop/shopping-2.jpg' name='Shop Name 1' rating={5} />
                       </div>

                       <div className='col-md-4 mb-3' >
                         <TopShopCard src='./images/top-shop/shopping-2.jpg' name='Shop Name 1' rating={5} />
                       </div>

                       <div className='col-md-4 mb-3' >
                         <TopShopCard src='./images/top-shop/shopping-2.jpg' name='Shop Name 1' rating={5} />
                       </div>

                       <div className='col-md-4 mb-3' >
                         <TopShopCard src='./images/top-shop/shopping-2.jpg' name='Shop Name 1' rating={5} />
                       </div>
                    
                    </div>  
                  </div>

                </div> 

              </div>        
          </section>   
        </>
    )
}

export default index
