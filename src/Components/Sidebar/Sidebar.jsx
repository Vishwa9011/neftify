import React from 'react'
import './Sidebar.css'
import vector from '/Vector.svg'
import NFTify from '/NFTify.svg'
import Token_logo from '/ic_baseline-token.svg'
import Pair_logo from '/fluent_pair-24-filled.svg'
import SocialIcons from '../SocialIcons/SocialIcons'

const Sidebar = ({ page, setPage }) => {
     return (
          <section className='sidebar'>
               <header className='sidebar-header'>
                    <div className="logo">
                         <img src={vector} alt="" />
                         <img src={NFTify} alt="" />
                    </div>
               </header>
               <ul className='menu-list'>
                    <li onClick={() => setPage("token")} className={`menu-item ${page === 'token' ? "active" : ""}`}>
                         <img src={Token_logo} alt="" />
                         <span>Token Address</span>
                    </li>
                    <li onClick={() => setPage("pair")} className={`menu-item ${page === 'pair' ? "active" : ""}`}>
                         <img src={Pair_logo} alt="" />
                         <span>Pair Address</span>
                    </li>
               </ul>

               <div className="social-icon-group">
                    <SocialIcons Icon={'facebook.svg'} />
                    <SocialIcons Icon={'linkedin.svg'} />
                    <SocialIcons Icon={'twitter.svg'} />
               </div>
          </section>
     )
}

export default Sidebar