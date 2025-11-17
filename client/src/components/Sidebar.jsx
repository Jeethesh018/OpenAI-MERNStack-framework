import React, { useState } from 'react'
import { useAppContext } from '../context/AppContext'
import { assets } from '../assets/assets';

const Sidebar = () => {

 const {
  chats,
  setSelectedChat,
  theme,
  setTheme,
  user
 } = useAppContext();
 const [search,setSearch] = useState("")

  return (
    <div>
      <img className='w-full max-w-48'
       src={theme === "dark" ? assets?.logo_full : assets?.logo_full_dark} alt='' />
    </div>
  )
}

export default Sidebar
