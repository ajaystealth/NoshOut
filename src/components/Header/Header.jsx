import React from 'react'
import './Header.css'
import ExploreMenu from '../ExploreMenu/ExploreMenu'

const Header = () => {
  return (
    <div className='header' id='header'>
        <div className='header-contents'>
            <h2>Order your favourite food here.</h2>
            <marquee><h4>Order your nosh here...</h4></marquee>
            <p>Choose from a diverse menu featuring a delectable array of noshes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious mosh at a time.</p>
            <button>View Menu</button>
        </div>
    </div>
  )
}

export default Header