import React, {useState}from 'react'


export default function Todofrom(props) {
  const [input, setinput] = useState("");

  const handleChange = e =>{
    setinput(e.target.value)
  
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    props.addtask({
      id: Math.floor(Math.random()*10000),
      text: input,
      isComplete: false
    })
    setinput('')
    

  }
 
  return (
    <>
  
  <form className='todo-form' >
    <input className="todo-input" type="text" placeholder='add to do' value = {input} name="text" onChange={handleChange}/>
    <button type ="submit" onClick={handleSubmit} className =" todo-btn " > ADD  </button>

  </form>
  </>
  )

}

