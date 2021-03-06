import React from 'react'

const NavBar = () => {

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-5">
      <div className="collapse navbar-collapse">
        <div className="navbar-nav">
          <a className='navbar-brand' href='#'>Flash Card</a>
          <a className="nav-item nav-link" href="#cards">Cards</a>
          <a className="nav-item nav-link" href="#new">New </a>
          <a className="nav-item nav-link" href='#practice'>Practice</a>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
