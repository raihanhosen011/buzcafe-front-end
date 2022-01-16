import React from 'react'

export default function TransactionCard(props) {
    return (
        <div className='card shadow p-1 px-2 my-1 '>
            <div className='row'>
                <div  className='col-2 my-auto'>
                    <div style={{verticalAlign : 'middle'}} className='avatar text-center align-items-center '> <i style={{verticalAlign : 'middle'}} className={`fa fa-${props.mode == "RECEIVE" ? 'plus' : 'minus' }`} ></i></div>
                </div>
                <div className='col-6'>
                <h4>{props.mode == "RECEIVE" ? 'Receive from' : 'Paid to'}  </h4>
                <p className='text-muted text-truncate'  tooltip={props.address} > {props.address}</p>
                </div>

                <div className='col-4 my-auto'>
                <h2 className={props.mode == "RECEIVE" ? 'text-success' : 'text-danger' }>{props.mode == "RECEIVE" ? '+' : '-' } { props.value} </h2>
                </div>
            </div>
            <p className='text-small my-0 text-right'> <i className='fa fa-clock'></i> {props.time}</p>

        </div>
    )
}
