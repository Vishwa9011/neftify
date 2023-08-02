import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Pair from './Pages/Pair/Pair'
import Token from './Pages/Token/Token'
import './App.css'
import Sidebar from './Components/Sidebar/Sidebar'
import NFTify from '/NFTify.svg'
import hamberger from '/hamberger.svg'
import Token_logo from '/ic_baseline-token.svg'
import Pair_logo from '/fluent_pair-24-filled.svg'
import search_icon from "/search.svg";
import Card from './Components/Card/Card'
import { useWeb3Modal } from '@web3modal/react'

const App = () => {
     const { open, close } = useWeb3Modal()
     const [page, setPage] = useState('token')
     const [searchText, setSearchText] = useState('')
     const [searchData, setSearchData] = useState([])
     const getsearchData = async () => {
          const url = `https://api.dexscreener.com/latest/dex/search/?q=${searchText}`;
          try {
               const res = await fetch(url);
               const data = await res.json();
               console.log('searched data: ', data);

               // Sorting in descending order based on priceNative
               data.pairs.sort((a, b) => {
                    if (+a.priceNative > +b.priceNative) return -1;
                    if (+a.priceNative < +b.priceNative) return 1;
                    return 0;
               });

               setSearchData(data.pairs)
               console.log('searched data (sorted by priceNative in descending order): ', data);
          } catch (error) {
               console.log('error: ', error);
          }
     };

     useEffect(() => {
          if (searchText.length) {
               getsearchData()
          }
     }, [searchText])

     return (
          <div>
               <div className="background-image">
                    <div className="overlay"></div>
               </div>
               <div className="app">
                    <Sidebar page={page} setPage={setPage} />
                    <main>
                         <div className="navbar">
                              <div className="search">
                                   <input type="text" placeholder='Search' onChange={(e) => setSearchText(e.target.value)} />
                                   <img src={search_icon} alt="" />
                              </div>
                              <button className='btn-connect' onClick={() => open()}>
                                   Connect
                              </button>
                         </div>
                         <div className="mobile-navbar">
                              <div className='upper-nav'>
                                   <div className='logo'>
                                        <label>
                                             <input type="checkbox" className='hamberger-menu' />
                                             <img src={hamberger} alt='' />
                                        </label>
                                        <img src={NFTify} alt='' />
                                   </div>
                                   <button className='btn-connect' onClick={() => open()}>
                                        Connect
                                   </button>
                              </div>
                              <ul className="menu-list">
                                   <li onClick={() => setPage("token")} className={`menu-item ${page === 'token' ? "active" : ""}`}>
                                        <img src={Token_logo} alt="" />
                                        <span>Token Address</span>
                                   </li>
                                   <li onClick={() => setPage("pair")} className={`menu-item ${page === 'pair' ? "active" : ""}`}>
                                        <img src={Pair_logo} alt="" />
                                        <span>Pair Address</span>
                                   </li>
                              </ul>
                              <div className="search">
                                   <input type="text" placeholder='Search' onChange={(e) => setSearchText(e.target.value)} />
                                   <img src={search_icon} alt="" />
                              </div>
                         </div>
                         {
                              searchText.length ?
                                   <div className='main-container'>
                                        <div className="heading">
                                             Search Search Results
                                        </div>
                                        <div className="card-container">
                                             {searchData && searchData.length > 0 &&
                                                  searchData.map((token, i) => (
                                                       <Card key={i} data={token} />
                                                  ))
                                             }
                                        </div>
                                   </div>
                                   :
                                   page === "token" ?
                                        <Token />
                                        :
                                        <Pair />
                         }
                    </main>
               </div>
               <footer className='footer'></footer>
          </div>
     )
}

export default App