import React,{useState,useRef} from 'react'

function Useref() {
    const[num, setNum] = useState(0)
    const inputOne = useRef()
    const inputTwo = useRef()

    const rupee = () => {
        console.log('Indian rupee')
        console.log(inputOne.current.value)
    }

    const dollar = () => {
        console.log('American Dollar')
        console.log(inputTwo.current.value)
    }

  return (
    <>
        <center> <br/> <br/>
            <input ref={inputOne} value={num} type='number' onChange={(e) =>setNum(e.target.value)}/>
            <input ref={inputTwo} value={num} type='text' onChange={(e) =>setNum(e.target.value)}/>
             <h4>Value is : {num}</h4>
            <button onClick={rupee}>Rupees</button>
            <button onClick={dollar}>Dollars</button>
        </center>
    </>
  )
}

export default Useref