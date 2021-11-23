import React from 'react'

function index() {
    return (
        <>
          <div className='payments buzcafe-details' >  
             <div className='row' >

                <div className='col-12 mb-4' >
                    <h4 className='dashboard__title mb-2' > Payments History </h4> 

                    <div className='buzcafe-details__content' >
                        <table>
                            {/* TABLE HEAD */}
                            <tr>
                                <th> Name </th> 
                                <th> From </th> 
                                <th> Details </th> 
                            </tr>

                            {/* TABLE BODY */}
                            
                            <tr>
                                <td> Debit 200 ES </td> 
                                <td> 0x20s2ad2000ad3s3356565a6sd  </td> 
                                <td> lorem ipsum...... </td>
                            </tr>

                            <tr>
                                <td> Debit 200 ES </td> 
                                <td> 0x20s2ad2000ad3s3356565a6sd  </td> 
                                <td> lorem ipsum...... </td>
                            </tr>

                            <tr>
                                <td> Debit 200 ES </td> 
                                <td> 0x20s2ad2000ad3s3356565a6sd  </td> 
                                <td> lorem ipsum...... </td>
                            </tr>

                        </table>                     
                    </div>    
  
                </div>
                
                <div className='col-md-6 mb-4' >
                   <h4 className='dashboard__title mb-2' >Make payment</h4> 

                   <form>
                       
                      <div className='input__group' >
                         <label>ES amount</label>
                         <input placeholder='enter amount' type='text' />   
                      </div>  
                       
                      <div className='input__group' >
                         <label>Enter receiver wallet address</label>
                         <input placeholder='0x00000000000000000000' type='text' />   
                      </div>  

                      <button className='button button--white' > Pay </button>  
                   </form>
                </div>

                <div className='col-md-6' >
                   <h4 className='dashboard__title' > ES balance </h4>

                   <div className='bg-white text-dark p-2' >
                      20000 <b className='ms-1' >ES</b>  
                   </div>
                </div>    
             </div>
          </div>   
        </>
    )
}

export default index
