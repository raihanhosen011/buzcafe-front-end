import React from 'react'
import TransactionCard from './TransactionCard'

export default function Transactions() {
    return (
        <div style={style.transactionBox} className=' px-auto py-2 '>
            <h1> Transactions </h1>
            <TransactionCard mode="RECEIVE" address="0xC2A4EE96F1EaCE85aF86703B0E77A671F97EAC46" value="2522" time="2 days ago"/>
            <TransactionCard mode="Send" address="0xC2A4EE96F1EaCE85aF86703B0E77A671F97EAC46" value="222" time="5 days ago"/>
            <TransactionCard />
            <TransactionCard />
            <TransactionCard />
            <TransactionCard />


            
        </div>
    )
}

const style = {
    transactionBox : {
        maxWidth: '500px'
    }
}
