import { Button } from '@base-ui/react'
import React, { useState } from 'react'

const Conter = () => {
    const [count, setCount] = useState(0)
    
    const incr=()=>{
        setCount(count+1)
    }

    const decr = () => {
    if (count > 0) {
      setCount(count - 1)
    }
}

    const reset=()=>{
        setCount(0)
    }


  return (
    <>
    <h1>Counter</h1>
    <h3>{count}</h3>
    <button onClick={incr}>(+)</button>
    <button onClick={decr}>(-)</button>
    <Button onClick={reset}>Reset Counter</Button>
                            
     </>
  )
}

export default Conter