import React from 'react'
import './MenuBar.css'
import Header from './Header'
import Nav from './Nav'

function MenuBar() {
  return (
    <div
      id='header-nav-bar'
      className="container-header-nav"
    >
      <Header />
      <Nav />
    </div>
  )
}

export default MenuBar