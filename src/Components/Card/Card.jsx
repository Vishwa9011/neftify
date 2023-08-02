import React from 'react'
import './Card.css'
import alert from '/material-symbols_info-outline.svg'
import token_symbol from '/material-symbols_token-outline.svg'
import price_symbol from '/pepicons-pop_dollar.svg'

const Card = ({ data }) => {

     const getDate = (time) => {
          return new Date(time).toUTCString()
     }

     return (
          <div className='card-row'>
               <div className="card">
                    <div className="card-heading">Basic Info</div>
                    <div className="row">
                         <span>Pair Created At</span>
                         <span>{getDate(data.pairCreatedAt)}</span>
                    </div>
                    <div className="row">
                         <span>Symbol</span>
                         <span>{data.baseToken.symbol}</span>
                    </div>
                    <div className="row">
                         <span>Dex ID</span>
                         <span>{data.dexId}</span>
                    </div>
                    <div className="row">
                         <span>Pair Address</span>
                         <span>{data.pairAddress.slice(0, 10)}</span>
                    </div>
                    <div className="card-icon">
                         <img src={alert} alt="" />
                    </div>
               </div>
               <div className="card">
                    <div className="card-heading">Base Token</div>
                    <div className="row">
                         <span>Name</span>
                         <span>{data.baseToken.name}</span>
                    </div>
                    <div className="row">
                         <span>Symbol</span>
                         <span>{data.baseToken.symbol}</span>
                    </div>
                    <div className="row">
                         <span>Address</span>
                         <span>{data.baseToken.address.slice(0, 10)}</span>
                    </div>

                    <div className="card-icon">
                         <img src={token_symbol} alt="" />
                    </div>
               </div>
               <div className="card">
                    <div className="card-heading">Quote Token</div>
                    <div className="row">
                         <span>Name</span>
                         <span>{data.quoteToken.name}</span>
                    </div>
                    <div className="row">
                         <span>Symbol</span>
                         <span>{data.quoteToken.symbol}</span>
                    </div>
                    <div className="row">
                         <span>Address</span>
                         <span>{data.quoteToken.address.slice(0, 10)}</span>
                    </div>
                    <div className="card-icon">
                         <img src={token_symbol} alt="" />
                    </div>
               </div>
               <div className="card">
                    <div className="card-heading">Price</div>
                    <div className="row">
                         <span>Price Native</span>
                         <span>{data.priceNative}</span>
                    </div>
                    <div className="row">
                         <span>Price USD</span>
                         <span>{data.priceUsd}</span>
                    </div>
                    <div className="card-icon">
                         <img src={price_symbol} alt="" />
                    </div>
               </div>
          </div>
     )
}

export default Card