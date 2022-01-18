import React from 'react'

const truncate = (data) =>`${data.slice(0, 10)}....${data.slice(38)}`;
export default function PayTo(props) {
    return (
        <div style={style.transactionBox} className="mx-auto center border border-warning rounded m-3 p-2">
            <div class="d-flex justify-content-between">
             <div style={{verticalAlign : 'middle',width:"60px",height:"60px"}} className={`avatar my-auto text-center align-items-center mr-3`}> <img src={props.data[4]} style={{verticalAlign : 'middle'}} /></div>
             <div>
              <h3>{props.data[2]}</h3>
              <p>{truncate(props.address)}</p>
             </div>
             <a href="/" class="link">View Shop</a>
           </div>
           <hr />
            <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Enter Amount</label>
          <div className="input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">
          <img className="logo" src="https://s2.coinmarketcap.com/static/img/coins/200x200/4860.png" alt="ES"/>

          </div>
        </div>
        <input type="number" className="form-control" placeholder="Amount" />
      </div>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Description (Optional)</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
        </div>
       
        <button type="submit" className="btn btn-lg btn-block btn-warning">Pay</button>
      </form>
        </div>
    )
}


const style = {
    transactionBox : {
        maxWidth: '575px',
        margin: 'auto'
    }
}