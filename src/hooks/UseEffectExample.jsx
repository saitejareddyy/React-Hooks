import React, { useEffect, useState } from 'react'

export function UseEffectExample() {
    const [time, setTime] = useState(new Date().toString());
    const [message, setMessage] = useState("Functional Component");

    useEffect(()=>{
        console.log("Coumponent Mounted or Updated");
        const interval = setInterval(showDate, 1000);

        return () => {
            console.log("cleaning of interval")
            clearInterval(interval);
        }
    }, [time])

    const showDate = () => {
        setTime(new Date().toString());
    }
  return (
    <div className='flex flex-col justify-center items-center'>
        <div>{time}</div>
        <button onClick={showDate} className='bg-[gray] px-4 py-3 rounded mt-5'>
            Show Date
        </button>
    </div>
  )
}