import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import './serviceDetails.css';

function Index() {

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
              <h3 className='dashboard__title' >Enter service Details</h3>
              
              <div>
                <form>
                  <div className='input__group' >
                    <label>Your name</label>
                    <input placeholder='Enter your name' type='text' name='name' /> 
                  </div>
                   
                  <div className='input__group' >
                    <label> Your address </label>
                    <input placeholder='Enter your address' type='text' name='address' /> 
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
                          <option>Ac Service </option>
                          <option>Salon at Home </option>
                          <option>Home Cleaning </option>
                          <option>Painting </option>
                          <option>Construction </option>
                          <option>Renovation & Refurbishment </option>
                          <option>Interior Design </option>
                          <option>Carpentry </option>
                          <option>Plumbing </option>
                          <option>Packers and Movers </option>
                          <option>Priest </option>
                          <option>Shower Filter </option>
                          <option>Spa </option>
                          <option>Wedding Planner </option>
                          <option>Car & Two Wheelers </option>
                          <option>Paying Guest </option>
                          <option>Personal Loan </option>
                          <option>Real Estate </option>
                          <option>Nurse </option>
                          <option>CCTV </option>
                          <option>Photographer </option>
                          <option>Business & Taxes </option>
                          <option>Food </option>
                          <option>Fitness & Yoga </option>
                          <option>Pest Control </option>
                          <option>Personal or Others </option>
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

export default Index
