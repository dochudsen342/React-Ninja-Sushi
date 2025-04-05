import React, { FC } from 'react'
import cl from './header.module.css'
import HeaderNavbar from './HeaderNavbar'
import Logo from './Logo'
import HeaderOptions from './HeaderOptions'


const Header:FC = () => {
  
  return ( 
  <header className={cl.container}>
        <Logo/>
        <HeaderNavbar/>
        <HeaderOptions/>  
  </header>
  )
}

export default Header
