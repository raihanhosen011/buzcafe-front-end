import React from 'react'
import TopShopCard from '../../components/cards/TopShopCard'
import Hero from '../../components/sections/Hero'
import './allService.css'

function index() {
    return (
        <> 
          <Hero/> 
          <section className='all-service px-2 px-md-4' >
              <div className='section__title-field container' >
                <h3 className='section__title' >Service Categories</h3>
              </div>     
                      
              <div className='section__content mt-5' >
                 
                <div className='row' >

                  <div className='col-md-2' >
                      <div className='sidebar' >
                        <ul>
                          <li>Ac Service</li>
                          <li>Salon at Home</li>
                          <li>Home Cleaning</li>
                          <li>Painting</li>
                          <li>Construction</li>
                          <li>Renovation & Refurbishment</li>
                          <li>Interior Design</li>
                          <li>Carpentry</li>
                          <li>Plumbing</li>
                          <li>Packers and Movers</li>
                          <li>Priest</li>
                          <li>Shower Filter</li>
                          <li>Spa</li>
                          <li>Wedding Planner</li>
                          <li>Car & Two Wheelers</li>
                          <li>Paying Guest</li>
                          <li>Personal Loan</li>
                          <li>Real Estate</li>
                          <li>Nurse</li>
                          <li>CCTV</li>
                          <li>Photographer</li>
                          <li>Business & Taxes</li>
                          <li>Food</li>
                          <li>Fitness & Yoga</li>
                          <li>Pest Control</li>
                          <li>Personal or Others</li>
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
