import React from 'react'
import { Link } from 'react-router-dom'

function Index() {
    return (
        <>
          <div className='buzcafe-details' >
              <h3 className='dashboard__title' >Your buzCafe services</h3>

              <div className='buzcafe-details__content' >
                <table>
                   {/* TABLE HEAD */}
                   <tr>
                      <th>Business Logo</th> 
                      <th>Business Name</th> 
                      <th>Contact Details</th> 
                      <th>Pincode</th> 
                   </tr>

                   {/* TABLE BODY */}
                   <tr>
                      <td><img src='./images/buzcafe.png' /></td>
                      <td>Devlaza</td> 
                      <td>+88 912556415</td> 
                      <td>65849</td>
                   </tr>
                   <tr>
                      <td><img src='./images/buzcafe.png' /></td>
                      <td>Devlaza</td> 
                      <td>+88 912556415</td> 
                      <td>65849</td>
                   </tr>
                   <tr>
                      <td><img src='./images/buzcafe.png' /></td>
                      <td>Devlaza</td> 
                      <td>+88 912556415</td> 
                      <td>65849</td>
                   </tr>
                </table>   
              </div>
              
              <div className='buzcafe-details__btns' >
                 <Link to='#service-details' className='button button--white' > Add New services </Link>
                 <Link to='#' className='button button--white' > Edit Details </Link>
              </div>
          </div>   
        </>
    )
}

export default Index
