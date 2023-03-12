import React from 'react'
import avatar from "../assets/undraw_pic_profile_re_7g2h.svg"

export default function Avatar() {
  return (
    <div className='avatar w-10 md:w-24'>
      <img src={avatar} alt="" className='bg-orange-300 rounded-[50%] mb-2' />
      <h1 className="hidden md:block text-center text-white font-semibold"> Bob Smith</h1>
    </div>
  )
}
