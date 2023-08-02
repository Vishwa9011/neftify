import React, { useEffect, useState } from 'react'
import Card from '../../Components/Card/Card'

const Token = () => {
     const [data, setData] = useState([]);

     const getTokenData = async () => {
          const url = 'https://api.dexscreener.com/latest/dex/tokens/0x2170Ed0880ac9A755fd29B2688956BD959F933F8,0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
          try {
               const res = await fetch(url)
               const data = await res.json()
               setData(data.pairs)
          } catch (error) {
               console.log('error: ', error);
          }
     }

     useEffect(() => {
          getTokenData()
     }, [])

     return (
          <div className='main-container'>
               <div className="heading">
                    Token Search Results
               </div>
               <div className="card-container">
                    {data && data.length > 0 &&
                         data.map((token, i) => (
                              <Card key={i} data={token} />
                         ))
                    }
               </div>
          </div>
     )
}

export default Token