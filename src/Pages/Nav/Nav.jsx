import React from 'react'
import {Link} from 'react-router-dom'
import './Nav.css'

const Nav = () => {
  return (
    <header>
    <h1><Link to='/'><img src="./Assets/logo.png" alt="logo"  className='logo'/></Link></h1>
    <nav>
      <ul>
        <li className="home"><Link to='/'>Home</Link></li>
        <li><Link to='/packages'>Packages</Link></li>
        <li><Link to="/adventure">Adventure Activities</Link></li>
        <li><Link to='/aboutus'>About Us</Link></li>
        <li><Link to='/share-experience'>Share Experience</Link></li>
        {/* <li><Link to='#'>News</Link></li> */}
        <li><Link to='/Contactus'>Contact</Link></li>
       <Link to='/login'><button>Log In</button></Link> 
      </ul>
    </nav>
    <button className='menu'>Menu
      <ul type='none'>
      <li className="home"><Link to='/'>Home</Link></li>
        <li><Link to='/packages'>Packages</Link></li>
        <li><Link to="/adventure">Adventure Activities</Link></li>
        <li><Link to='/aboutus'>About Us</Link></li>
        <li><Link to='/aboutus'>About Us</Link></li>
        <li><Link to='/share-experience'>Share Experience</Link></li>
        <li><Link to='#'>News</Link></li>
        <li><Link to='/Contactus'>Contact</Link></li>
      <Link to='/login'><button>Log In</button></Link> 
      </ul>
    </button>
    
    </header>
  )
}

export default Nav