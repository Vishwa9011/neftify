import React, { useEffect, useState } from 'react'
import Card from '../../Components/Card/Card';

const Pair = () => {
     const [data, setData] = useState([]);

     const getPairAddress = async () => {
          const url = 'https://api.dexscreener.com/latest/dex/pairs/bsc/0x7213a321F1855CF1779f42c0CD85d3D95291D34C,0x16b9a82891338f9ba80e2d6970fdda79d1eb0dae'
          try {
               const res = await fetch(url)
               const data = await res.json()
               setData(data.pairs)
          } catch (error) {
               console.log('error: ', error);
          }
     }

     useEffect(() => {
          getPairAddress()
     }, [])

     return (
          <div className='main-container'>
               <div className="heading">
                    Pair Search Results
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

export default Pair