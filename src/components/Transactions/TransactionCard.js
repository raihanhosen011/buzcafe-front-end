import React from 'react'

export default function TransactionCard(props) {
    return (
        <div className='card shadow p-1 px-2 my-1 '>
            <div className='row'>
                <div  className='col-2 my-auto'>
                    <div 
                     style={{verticalAlign : 'middle'}}
                     className={`avatar text-center align-items-center  ${props.mode == "RECEIVE" ? 'bg-success' : 'bg-danger' }`}> <i style={{verticalAlign : 'middle'}} className={`fa fa-${props.mode == "RECEIVE" ? 'plus' : 'minus' }`} ></i></div>
                </div>
                <div className='col-6'>
                <h4>{props.mode == "RECEIVE" ? 'Receive from' : 'Paid to'}  </h4>
                <p className='text-muted text-truncate'  data-toggle="tooltip" data-placement="top" title={props.address}> {props.address}</p>
                </div>

                <div className='col-4 my-auto text-right'>
                    <h2 >
                        {props.mode == "RECEIVE" ? '+' : '-' }
                        { props.value}
                        <img className="logo" src="https://s2.coinmarketcap.com/static/img/coins/200x200/4860.png" alt="ES"/>
                    </h2>
                </div>
            </div>
            <p className='text-small my-0 text-right'> <i className='fa fa-clock'></i> {props.time}</p>

        </div>
    )
}
