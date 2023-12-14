import React,{useEffect, useRef} from 'react'
import Counter from './Counter'

function App() {
  // const focusPoint = useRef(null)

  // const submitHandler = (e) => {
  //   e.preventDefault()
  //   console.log(focusPoint.current.value)
  // }

  // useEffect(() => {
  //   focusPoint.current.focus()
  // },[])

  return (
    <>
    <center>
      {/* <br/><br/>
      <form onSubmit={submitHandler}>
        <input ref={focusPoint} type='text' placeholder='enter text'/><br/> <br/>
        <input type='submit'/>
      </form> */}
      <Counter />
    </center>
    </>
  )
}

export default App