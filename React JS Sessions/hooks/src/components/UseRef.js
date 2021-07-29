import React,{useState, useRef} from 'react'


export default function UseRef() {
  const [show,setShow] = useState(false);
  //it is like useState only and it preserves the value. No rerender!
  const luckyname = useRef(null);
  const submitForm = (event) => {
    event.preventDefault();
    const name  =luckyname.current.value;
    name === "" ? alert('Bhai! Pls data bharde..') : setShow(true)
  }

  

  return (
    <div>
      <form onSubmit={submitForm}>
        <div>
          <label htmlFor="luckyname">Enter Your Good Name</label>
          <input 
                type="text" 
                id='luckyname'
                ref={luckyname}
                />
                <br/>
                <button type="submit">Submit</button>
        </div>
      </form>
      <p>{show ? `Your name is ${luckyname.current.value}` : ""}</p>
    </div>
  )
}
