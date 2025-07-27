import { pre } from 'motion/react-client';
import React, { useState, useMemo } from 'react'

export function UseMemoExample() {

    /*
    1. optimize expensive operation
    2. Reference equqlity
    */  

    const [counter, setCounter] = useState(0);
    const result = useMemo(() => {
        return factorial(counter);
    }, [counter])
    const [name, setName] = useState("");

    return (
        <div>
            <h1>Factorial of {counter} is <span className='text-2xl'>{result}</span></h1>
            <div className='flex gap-5 items-center mt-5 mb-5'>
                <button className='bg-[#1a6c1a] px-4 py-3 rounded' onClick={() => setCounter((prev) => prev + 1)}>Increment</button>
                <button className='bg-[#b73636] px-4 py-3 rounded' onClick={() => setCounter((prev) => prev - 1)}>Decrement</button>
            </div>

            <hr />
            <div className='mt-5'>
                <div>
                    <label>Enter Name</label>
                </div>
                <input 
                    onChange={(e) => setName(e.target.value)} 
                    value={name} 
                    placeholder="Enter Name" 
                    type="text"
                    className='bg-gray-500 px-4 py-3 rounded mt-1'
                />
                <p className='mt-5 text-red-600'>{`My Name is :  ${name}`}</p>
            </div>
        </div>
    )
}

function factorial(num) {
    if(num <= 0) return 1;
    return num * factorial(num-1);
}
