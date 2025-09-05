import React from 'react'
import { SearchBar } from '../SearchBar'
import { Buttonslogin } from '../defaults/Buttonslogin'

const NavBar = () => {
  return (
    <nav className="py-5 px-10">
      <header className="flex items-center justify-between gap-5">
        <SearchBar />

        <div className="flex items-center gap-3">
         
<Buttonslogin 
  text='login' 
  className='bg-[#3d393e] text-white px-4 py-2 rounded hover:bg-[#52525c] transition-colors' 
/>
<Buttonslogin 
  text='signup' 
  className='bg-[#3d393e] text-white px-4 py-2 rounded hover:bg-[#52525c] transition-colors' 
/>

        </div>
      </header>
    </nav>
  )
}

export default NavBar