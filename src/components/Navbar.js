import React from 'react'

const Navbar = () => {
  return (
    <div style={{backgroundColor: 'cyan'}}>
        <h1>React Meals</h1>
        <a style={{margin: '10px', color: 'white'}}>Home</a>
        <a style={{margin: '10px', color: 'white'}}>Order</a>
        <a style={{margin: '10px', color: 'white'}}>Contact us</a>
    </div>
  )
}

export default Navbar