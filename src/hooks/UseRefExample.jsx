import { h2 } from 'motion/react-client';
import React, { useEffect, useRef, useState } from 'react'

export function UseRefExample() {

    // DOM reference
    // useRef for storing the previous state
    // hold mutable value prevent re-render of component

    const inputEle = useRef("");
    const [name, setName] = useState("");
    const [counter, setCounter] = useState(0);
    const previousCounterRef = useRef("");

    const setInput = () => {
        setName("");
        inputEle.current.focus();
    }

    useEffect(() => {
        previousCounterRef.current = counter;
    }, [counter])
  return (
    <div>
        <input ref={inputEle} onChange={(e)=>setName(e.target.value)} value={name} type="text" placeholder='Enter Name' className='px-4 py-3 border border-amber-400 rounded-2xl'/>

        <p className='bg-[crimson] w-full h-[120px] mt-5 rounded text-emerald-500 flex justify-center items-center'>{name}</p>
        <button onClick={setInput} className='bg-amber-400 px-4 py-3  rounded mt-5 mb-5 cursor-pointer'>Reset</button>

        <hr />

        <div className='mt-[30px]'>
            <h1 className='text-2xl'>Random Counter: {counter}</h1>
            {<h2>Previous Counter: {previousCounterRef.current}</h2>}
            <button onClick={()=>setCounter(Math.floor(Math.random()*100))} className='bg-green-800 px-4 py-3 rounded mt-5 cursor-pointer'>Generate Number</button>
        </div>
    </div>
  )
}

