import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import './BussnessDetails.css';

function index() {

    const subCategory = [
      { value: 'furniture & Furnishing', label: 'Furniture & Furnishing' },
      { value: 'Home Cleaning', label: 'Home Cleaning' },
      { value: 'Fabric sofa cleaning ', label: 'Fabric sofa cleaning ' },
      { value: 'Carpet Cleaning ', label: 'Carpet Cleaning' },
      { value: 'Leather sofa cleaning', label: 'Leather sofa cleaning' },
      { value: 'Kitchen Deep Cleaning', label: 'Kitchen Deep Cleaning' },
      { value: 'Carpet shampooing ', label: 'Carpet shampooing' },
      { value: 'Sofa Cleaning', label: 'Sofa Cleaning' },
      { value: 'Mattress cleaning', label: 'Mattress cleaning' },
      { value: 'Bathroom Cleaning', label: 'Bathroom Cleaning' }
    ]

    const animatedComponents = makeAnimated();

    return (
        <>
           <div className='bussness-details' >
              <h3 className='dashboard__title' >Enter Business Details</h3>
              
              <div>
                <form>
                  <div className='input__group' >
                    <label>Business name</label>
                    <input placeholder='Enter your business name' type='text' name='business-name' /> 
                  </div>
                   
                  <div className='input__group' >
                    <label> Shop address </label>
                    <input placeholder='Enter your shop address' type='text' name='shop-name' /> 
                  </div>

                  <div className='row' >
                     
                     <div className='col-md-3' > 
                        <div className='input__group' >
                          <label> City </label>
                          <input placeholder='Enter city name' type='text' name='city' /> 
                        </div>                     
                     </div>
                     
                     <div className='col-md-3' > 
                        <div className='input__group' >
                          <label> State </label>
                          <input placeholder='Enter state name' type='text' name='state' /> 
                        </div>                     
                     </div>
                     
                     <div className='col-md-3' > 
                        <div className='input__group' >
                          <label> Pincode </label>
                          <input placeholder='Enter pin code' type='text' name='pincode' /> 
                        </div>                     
                     </div>
                     
                     <div className='col-md-3' > 
                        <div className='input__group' >
                          <label> Contact number </label>
                          <input placeholder='Enter contact number' type='text' name='contact' /> 
                        </div>                     
                     </div>

                  </div>

                  <div className='row' >
                     
                    <div className='col-md-6' >
                      <div className='input__group' >
                        <label> Category </label>

                        <select name='category' >
                            <option>Select category</option>
                            <option>Wine Shop</option>
                            <option>Wedding</option>
                            <option>Travel</option>
                            <option>Transpoters</option>
                            <option>Training Institute</option>
                            <option>Sports goods</option>
                            <option>Sports coach</option>
                            <option>shopping</option>
                            <option>buzcafe news</option>
                            <option>Buzcafe Social</option>
                            <option>buzcafe pay</option>
                            <option>anything on hire</option>
                            <option>apply for loan</option>
                            <option>auto care</option>
                            <option>auto mobile</option>
                            <option>b 2 b</option>
                            <option>baby care</option>
                            <option>banquets</option>
                            <option>bills & recharge</option>
                            <option>books hotels</option>
                            <option>train</option>
                            <option>books</option>
                            <option>cab car rental</option>
                            <option>caterers</option>
                            <option>civil contractor</option>
                            <option>courier</option>
                            <option>daily needs</option>
                            <option>dance & music</option>
                            <option>florist</option>
                            <option>educations</option>
                            <option>pet & pet care</option>
                            <option>playschool</option>
                            <option>language classes</option>
                        </select>  
                      </div>
                    </div>
                     
                    <div className='col-md-6' >
                      <div className='input__group' >
                        <label> Sub Category </label>

                        <Select
                          closeMenuOnSelect={false}
                          components={animatedComponents}
                          isMulti
                          options={subCategory}
                        /> 
                      </div>
                    </div>

                  </div> 

                  <div className='form__texts' >
                     <p>Important Terms & Conditons for Merchants about Listing and QR code generation process on BuzCafe</p>
                  
                     <ul>
                       <li><input type='checkbox' name='check-1' /> Update all the details required</li>
                       <li><input type='checkbox' name='check-2' /> I confirm that I have read and understood all the mentioned on BuzCafe</li>
                     </ul> 
                  </div>

                  <button type='submit' className='button button--white' > Submit </button>
                </form>
              </div>  
           </div>   
        </>
    )
}

export default index
