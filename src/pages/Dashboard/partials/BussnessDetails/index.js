import React,{useState} from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import './BussnessDetails.css';
import { CATEGORY } from '../../../../Constant';
import { sendTransaction } from '../../../../components/sendTransaction';
import { ethers } from 'ethers';

//  import React from 'react'
 

 
function Index() {
  const [form, setForm] = useState({
    Name: '',
    Location: '',
    Image: '',
    Contact: '',
    Category: ''
  });
  const [show, setShow] = useState(false);

  const handleChange = event => {
    // use spread operator
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = async (e)=> {
    e.preventDefault();
    await sendTransaction(
      window.buzcafeInst,
      "newShop",
      [ethers.utils.formatBytes32String(form.Category),form.Location,form.Name,form.Contact,form.Image],
      "You are successfully listed on buzcafe"
    )
  }
    return (
        <>
           <div className='bussness-details' >
              <h3 className='dashboard__title' >Enter Business Details</h3>
              <div>
                {show? <img onError={e => setShow(false)} src={form.Image}/>:null}
                <form onSubmit={handleSubmit}>
                  <div className='input__group' >
                    <label>Business name</label>
                    <input 
                      placeholder='Enter your business name' 
                      type='text' 
                      name='Name'
                      onChange={handleChange}
                    /> 
                  </div>
                   
                  <div className='input__group' >
                    <label> Shop address </label>
                    <textarea 
                      placeholder='Enter your shop address' 
                      style={{height:"80px"}} 
                      type='text' 
                      name='Location'
                      onChange={handleChange}
                       /> 
                  </div>

                  <div className='row' >
                     <div className='col-md-6' > 
                        <div className='input__group' >
                          <label> Contact number </label>
                          <input 
                            placeholder='Enter contact number' 
                            type='text' 
                            name='Contact'
                            onChange={handleChange}
                      /> 
                        </div>                     
                     </div>

                  </div>

                  <div className='row' >
                     <div className='col-md-6' > 
                        <div className='input__group' >
                          <label> Add Image URL </label>
                          <input 
                            placeholder='Enter URL' 
                            type='text' 
                            name='Image'
                            onChange={e => {handleChange(e);setShow(true)}}
                          /> 
                          <p className='field-note-txt'> if you don't have Image link {"  "}
                              <a style={{ textDecoration: "underline"}} onClick={() =>
                              window.open(
                          "https://eraswap.cloud/Host/0x7E3E5B0A5035a3706b9BC717d69997b14dDf0453",
                          "",
                          "width=1001,height=650"
                              )
                            }>click here</a> </p>
                        </div>                     
                     </div>

                  </div>

                  <div className='row' >
                     
                    <div className='col-md-6' >
                      <div className='input__group' >
                        <label> Category </label>

                        <select name='Category' onChange={handleChange}
                      >
                            {CATEGORY.map(ele => 
                              <option>{ele}</option>)}
                        </select>  
                      </div>
                    </div>
                  </div> 
                  <button 
                    type='submit' 
                    className='button button--white'
                     > Add Shop </button>
                </form>
              </div>  
           </div>   
        </>
    )
}

export default Index
