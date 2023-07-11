import { useState } from "react"
import Button from 'react-bootstrap/Button';


function Content() {
  const [text, setText]=useState('')
  const [teporary, setTemporary]=useState('')
 
  const handleClick=()=>{
    setText(teporary)
 
    
  }
  return (
    <div>
      <div>
       
          <label htmlFor="text"></label>
          <textarea name="text" onChange={(e)=>setTemporary(e.target.value)} id="name" cols="20" rows="05">
           
           
          </textarea>
         
     
      </div>
     
  
     <div>
     {/* <input  type="button" value="submit" onClick={handleClick} /> */}
     <Button variant="secondary" onClick={handleClick} >Click-Button</Button>
   
      <p className="p-3 mt-3 bg-danger text-white">Entered Text: {text}</p> 
    
     </div>
 
    </div>
  )
}

export default Content