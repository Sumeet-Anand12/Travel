import React from 'react'
import User from '../assets/Header/User.svg';
const Header = () => {
  return (
    <div className='max-w-1440 max-h-screen'>

         <div className='w-full bg-FFFFFF  flex px-104 h-87 items-center justify-between shadow-md drop-shadow-112211'>
           <ul className='flex items-center gap-3'>
            <li>
                <a href="">Find Flight</a>
            </li>
            <li>
                <a href="">Find Stays</a>
            </li>
           </ul>
           <ul className='flex items-center gap-4'>
            <li>
                <a href="">Favourites</a>
            </li>
            <li className='flex items-center gap-2'>
                <img src={User} alt="" />
                <a href="">John D.</a>
            </li>
           </ul>
         </div>

    </div>
  )
}

export default Header