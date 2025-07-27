import React, { useContext } from 'react'
import { AppContext } from '../hooks/UseContextExample'

function Navbar() {

    const { name } = useContext(AppContext);
  return (
    <div className='bg-[gray] p-5 rounded text-center'>
      <h2>Navbar</h2>
      <p>Name: {name}</p>
    </div>
  )
}

export default Navbar
