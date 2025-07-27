import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import { AppContext } from '../hooks/UseContextExample'

function Home() {
    const { name, setName } = useContext(AppContext);
    return (
        <div>
            <input className='bg-[gray] px-4 py-3 rounded mb-5' onChange={(e) => setName(e.target.value)} placeholder='Enter Name' type="text" />
            <h2>Name: {name}</h2>
        </div>
    )
}

export default Home
