import React, {useEffect, useState} from 'react'

const UseEffect = () => {
    const [count, setCount] = useState(0)
    
    useEffect(()=>{
        setTimeout(()=>{
            setCount(count+1)
            console.log(count)
        },1000)
    })
    // setTimeout(()=>{
    //     setCount(count+1)
    //     console.log(count)
    // },1000)
  return (
    <h1>I've rendered {count} times!</h1>
  )
}

export default UseEffect