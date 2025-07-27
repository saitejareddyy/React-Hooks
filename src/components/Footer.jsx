import React, { useContext } from 'react'
import { AppContext } from '../hooks/UseContextExample'

function Footer() {
    const { name } = useContext(AppContext);
  return (
    <div className='bg-[gray] text-center p-5 rounded'>
      <h1>Footer</h1>

      <p>Name: {name}</p>

    </div>
  )
}

export default Footer
