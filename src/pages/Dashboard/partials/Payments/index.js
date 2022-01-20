import React,{useEffect, useState} from 'react'
import { logEvents } from '../../../../components/LogEvents';
import PayTo from '../../../../components/PayTo'
import Transactions from '../../../../components/Transactions/Transactions';

function Index(props) {
    const [transfer, setTransfer] = useState("");
    const [data, setData] = useState();
    const checkShop = async () => {
        try{
          const res =  await window.buzcafeInst.Shops(transfer);
          setData([transfer, ...res]);
          console.log(data);
        }catch(e) {
          console.log(e);
        }
    }
    useEffect(()=>{
      if(props.address){
        const x = logEvents(window.buzcafeInst,"PayTo",[null,props.address,null,null]);
        const y = logEvents(window.buzcafeInst,"PayTo",[props.address,null,null,null]);
        if(x && x.isArray()){
        x.concat(y);
        x.sort(function (a, b) {
          return a.blockNumber - b.blockNumber;
        })
      }
        console.log("data" , x);
      }
      
      
    },[props.address])


    return (
        <>
          <div className='payments buzcafe-details' >  
             {props.address ? <div className='row' >
              <div className='col-md-8 mb-4' >
                <h4 className='dashboard__title mb-2' > Payments History </h4> 
                <Transactions />   
              </div> 
              <div className='col-md-6 mb-4' >
                  <h4 className='dashboard__title mb-2' >Make payment</h4> 

                  {data ? <PayTo data={data} /> : 
                  <div className='input__group' >
                    <label>Enter receiver wallet address</label>
                    <input placeholder='0x00000000000000000000' value={transfer} onChange={e => setTransfer(e.target.value)} type='text' /> 
                    <button className='button button--white' onClick={checkShop} > Proceed </button>  
                  </div>  }

              </div>
             </div> : <div> Please Connect to wallet</div>}
          </div>   
        </>
    )
}

export default Index
