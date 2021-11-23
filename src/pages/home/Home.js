import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';
import CategoryCard from '../../components/cards/CategoryCard';
import TopShopCard from '../../components/cards/TopShopCard/index.js';
import UtilitieCard from '../../components/cards/UtilitieCard';
import Hero from '../../components/sections/Hero';
import './home.css';

function Home() {

   const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };

   return (
      <div className='home' >

         <Hero/>

         <section className='shop' >
            <div className='container' >

               <div className='section__title-field' >
                  <h3 className='section__title' >Shop Category</h3>
                  <span className='section__title-backdrop' > 01 </span>
               </div>

               <div className='section__content mt-5' >
                  <div className='row' >

                     <CategoryCard to='/all-shop' src='./images/categorys/category-1.jpg' title='Auto mobile' />
                     <CategoryCard to='/all-shop' src='./images/categorys/category-2.jpg' title='Electronics' />
                     <CategoryCard to='/all-shop' src='./images/categorys/category-3.jpg' title='Clothing' />
                     <CategoryCard to='/all-shop' src='./images/categorys/category-4.jpg' title='Book' />

                  </div>
               </div>

               <div className='section__footer' >
                 <Link to='/all-shop' className='button button--outline' > View all Shop </Link> 
               </div>

            </div>
         </section>
   

         <section className='service' >
            <div className='container' >

               <div className='section__title-field' >
                  <h3 className='section__title' >Service Category</h3>
                  <span className='section__title-backdrop' > 02 </span>
               </div>

               <div className='section__content mt-5' >
                  <div className='row' >

                     <CategoryCard to='/all-service' src='./images/categorys/category-5.jpg' title='Home claning' />
                     <CategoryCard to='/all-service' src='./images/categorys/category-6.jpg' title='Salon' />
                     <CategoryCard to='/all-service' src='./images/categorys/category-7.jpg' title='Carpentry' />
                     <CategoryCard to='/all-service' src='./images/categorys/category-8.jpg' title='AC service' />

                  </div>
               </div>

               <div className='section__footer' >
                 <Link to='/all-service' className='button button--outline' > View all Service </Link> 
               </div>
               
            </div>
         </section>
   

         <section className='topShop' >
            <div className='container' >

               <div className='section__title-field' >
                  <h3 className='section__title' > Top Shops </h3>
                  <span className='section__title-backdrop' > 03 </span>
               </div>


               <div className='section__content mt-5' >
                  <div className='row' >

                     <div className='col-md-6 mb-3 mb-md-0' >
                       <TopShopCard src='./images/top-shop/shopping-1.jpg' name='Shop Name 1' rating={5} />
                     </div> 

                     <div className='col-md-6 mb-3 mb-md-0' >

                        <div className='col-12 mb-3' >
                           <div className='row' >
                              <div className='col-12 mb-3 mb-md-0' >
                                <TopShopCard src='./images/top-shop/shopping-2.jpg' name='Shop Name 1' rating={5} />
                              </div>
                           </div>                              
                        </div>

                        <div className='col-12 small--rating' >

                           <div className='row' >
                              <div className='col-md-6 mb-3 mb-md-0' >
                                <TopShopCard src='./images/top-shop/shopping-3.jpg' name='Shop Name 1' rating={5} />
                              </div>

                              <div className='col-md-6 mb-3 mb-md-0' >
                                <TopShopCard src='./images/top-shop/shopping-4.jpg' name='Shop Name 1' rating={5} />
                              </div>
                           </div>   

                        </div>

                     </div>   

                  </div>
               </div>
               
            </div>
         </section>
         

         <section className='quote' >
            <div className='container' >

               <div className='row' >
                  <div className='col-md-6' >
                     <div className='quote__card' >
                        <img src='./images/icons/world.png' className='img__icon' />
                        <h5>Get customers from Global Era Swap Community</h5>
                     </div>
                     
                     <div className='quote__card' >
                        <img src='./images/icons/save-money.png' className='img__icon' />
                        <h5>Heavy savings on Aggregator Charges</h5>
                     </div>
                     
                     <div className='quote__card' >
                        <img src='./images/icons/timeally-club.png' className='img__icon' />
                        <h5>Control & Grow Your Digital Assets in Long Term</h5>
                     </div>
                  </div>

                  <div className='col-md-6' >
                     <div className='quote__card' >
                        <img src='./images/icons/peer-to-peer.png' className='img__icon' />
                        <h5>Receive Direct P2P Payment via QR Code</h5>
                     </div>
                     
                     <div className='quote__card' >
                        <img src='./images/icons/like-button.png' className='img__icon' />
                        <h5>No Bank Account Required</h5>
                     </div>
                     
                     <div className='quote__card' >
                        <img src='./images/icons/era-swap.png' className='img__icon' />
                        <h5> 15+ Utility Apps & Marketplaces with single ID </h5>
                     </div>
                  </div>
               </div>

            </div> 
         </section>


         <section className='utilities' >
            <div className='container' > 

               <div className='section__title-field' >
                  <h3 className='section__title' > More ES Utilities </h3>
                  <span className='section__title-backdrop' > 04 </span>
               </div>

               <div className='section__content mt-5' >
                  <Carousel responsive={responsive}>
                     <UtilitieCard src='./images/utilitie/Academy.jpg'  href='https://eraswap.academy/wallet-login' />
                     <UtilitieCard src='./images/utilitie/Betdeex.jpg'  href='https://www.betdeex.com/' />
                     <UtilitieCard src='./images/utilitie/Bookingdaap-01.jpg'  href='https://bookingdapp.com/' />
                     <UtilitieCard src='./images/utilitie/Buzcafe.jpg'  href='https://buzcafe.com/wallet-login' />
                     <UtilitieCard src='./images/utilitie/Certidapp.jpg'  href='https://certidapp.com' />
                     <UtilitieCard src='./images/utilitie/Charitydaap-01.jpg'  href='https://charitydapp.com/' />
                     <UtilitieCard src='./images/utilitie/Computeex.jpg'  href='https://www.computeex.net/btc-to-es' />
                     <UtilitieCard src='./images/utilitie/coupon.jpg'  href='https://coupondapp.com/' />
                     <UtilitieCard src='./images/utilitie/Curedaap-01.jpg'  href='https://curedapp.com/' />
                     <UtilitieCard src='./images/utilitie/DateSwappers.jpg'  href='https://dayswappers.com/' />
                     <UtilitieCard src='./images/utilitie/ESCloudLogo.png'  href='https://eraswap.cloud/' />
                     <UtilitieCard src='./images/utilitie/faithminus-01.jpeg'  href='https://faithminus.com/' />
                     <UtilitieCard src='./images/utilitie/KycDaap-01.jpg'  href='https://kycdapp.com/' />
                     <UtilitieCard src='./images/utilitie/Recyledaap-01.jpg'  href='https://recyclingdapp.com/' />
                     <UtilitieCard src='./images/utilitie/Rentdaap-01.jpg'  href='https://rentingdapp.com/' />
                     <UtilitieCard src='./images/utilitie/SurveysDAppLogo2.png'  href='https://surveysdapp.com/' />
                     <UtilitieCard src='./images/utilitie/SwappersWall.jpg'  href='https://swapperswall.com/wallet-login?home=swapperswall' />
                     <UtilitieCard src='./images/utilitie/Timeally.jpg'  href='https://www.timeally.io/' />
                     <UtilitieCard src='./images/utilitie/TimeSwappers.jpg'  href='https://www.timeswappers.com/wallet-login?home=timeswappers' />
                     <UtilitieCard src='./images/utilitie/Timeallyclub.jpg'  href='https://timeallyclub.com/' />
                     <UtilitieCard src='./images/utilitie/era_swap.png'  href='https://eraswap.info/' />
                     <UtilitieCard src='./images/utilitie/value OF Farmers.jpg'  href='https://valueoffarmers.org/' />
                  </Carousel>
               </div>

            </div>
         </section>

      </div>
   )
}

export default Home