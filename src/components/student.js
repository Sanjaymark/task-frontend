
import {useState} from "react";


 export default function StudentCard({name, batch, education, acceptCount, setAcceptCount}){
    const [show, setShow] = useState(true)
  
    function handleAccept(){
      setShow(!show)
      setAcceptCount(acceptCount+1)
    }
  
    function handleReject(){
      setShow(!show)
      setAcceptCount(acceptCount-1)
      
    }
    return (
      <div className='student-card'>
        <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ50haIo6IibH--JO8V4wJT_FGTLu3zECwg5EK_VQoT&s"
         alt="name"/>
        <h3>{name}</h3>
        <p>{batch}</p>
        <p>{education}</p>
  
      {
      show ?   <button 
        className='accept-btn btn'
        onClick={handleAccept}
        >Accept</button> 
        :    
        <button 
        className='reject-btn btn'
        onClick={handleReject}
        >Reject</button>
      }
        
  
      </div>
    )
  }
  