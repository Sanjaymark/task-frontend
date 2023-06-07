
import './App.css';
import React, { useState } from 'react';
function App() {
const [acceptCount, setAcceptCount] = useState(0)
  const studentsData = [
    {
      name:"Selvam",
      batch:"B47WD",
      education:"B.E",
    },
    {
      name:"Sanjay",
      batch:"B45WD",
      education:"B.E",
    },
    {
      name:"Baskar",
      batch:"B43WD",
      education:"BCA",
    },
    {
      name:"Naveen",
      batch:"B42WD",
      education:"BSC",
    },
  ]
  return (
<div className="App">
<div>
  <h1>Accepted Students : {acceptCount}</h1>
</div>
<div className='card-block'>
  {studentsData.map((stud,idx)=>(
     <StudentCard
     key={idx}
     name={stud.name}
     batch={stud.batch}
     education={stud.education}
     acceptCount={acceptCount}
     setAcceptCount={setAcceptCount}
     />
  ))}
</div>
</div>
  );
}
// const props={} => 
// props= {
//   name:"",
//    batch:"", 
//    education:""}
//destructuring 
// const {name, batch, education} = props

export default App;

function StudentCard({name, batch, education, acceptCount, setAcceptCount}){
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




// function Welcome(){
//   const welcomename = "guvi"
//   return(
//     React.createElement("div", {id:"welcome"}, 
//     React.createElement("h1", {}, `Hi how are you ${welcomename}`))
//   )
// }
//jsx -> javascript xml = (html with js)

// functional component
// function Greeting(){
//   //normal js
//   //function
//   //varible
//   const name = "sanjay"

//   return (
//     <div id="greeting" className='greeting-class'>
//       <h1>Hi how are you {name}</h1>
//     </div>
//   )
// }