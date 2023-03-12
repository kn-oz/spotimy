import React from 'react'
import {SlEarphones} from 'react-icons/sl'
import {BiSearch, BiBarChart} from 'react-icons/bi'
import {AiFillHeart, AiFillPlayCircle} from 'react-icons/ai'

export default function Navigation() {
  return (
    <div className='navigation'>
      <nav className=''>
        <ul>
          <li className="p-4 bg-gradient-to-r from-indigo-400 to-indigo-700 px-8 md:px-16">
            <div className="link flex items-center gap-4">
              <SlEarphones className='text-gray-50 text-xl' />
              <span className='hidden md:block text-gray-50 font-semibold text-xl'>Discover</span>
            </div>
          </li>
          <li className="p-4 px-8  md:px-16">
            <div className="link flex items-center gap-4">
              <BiSearch className='text-gray-300 text-xl' />
              <span className='hidden md:block text-gray-300 font-semibold text-xl'>Search</span>
            </div>
          </li>
          <li className="p-4 px-8 md:px-16">
            <div className="link flex items-center gap-4">
              <AiFillHeart className='text-gray-300 text-xl' />
              <span className='hidden md:block text-gray-300 font-semibold text-xl'>Favourites</span>
            </div>
          </li>
          <li className="p-4 px-8 md:px-16">
            <div className="link flex items-center gap-4">
              <AiFillPlayCircle className='text-gray-300 text-xl' />
              <span className='hidden md:block text-gray-300 font-semibold text-xl'>PlayLists</span>
            </div>
          </li>
          <li className="p-4 px-8 md:px-16">
            <div className="link flex items-center gap-4">
              <BiBarChart className='text-gray-300 text-xl rotate-90' />
              <span className='hidden md:block text-gray-300 font-semibold text-xl'>Charts</span>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  )
}
